- [«PDO_SQLITE DSN](ref.pdo-sqlite.connection.md)
- [PDO::sqliteCreateCollation »](pdo.sqlitecreatecollation.md)

- [PHP Manual](index.md)
- [SQLite (PDO)] (ref.pdo-sqlite.md)
- Реєстрація агрегуючої функції користувача для використання
у SQL-запитах

# PDO::sqliteCreateAggregate

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8, PECL pdo_sqlite \>u003d 1.0.0)

PDO::sqliteCreateAggregate — Реєстрація агрегуючої користувача
функції для використання у SQL-запитах

### Опис

public **PDO::sqliteCreateAggregate**(
string `$function_name`,
[callable](language.types.callable.md) `$step_func`,
[callable](language.types.callable.md) `$finalize_func`,
int `$num_args` u003d ?
): bool

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

Цей метод аналогічний
[PDO::sqliteCreateFunction](pdo.sqlitecreatefunction.md), за
за винятком того, що він реєструє функцію, яку можна
використовувати для обчислення агрегованого результату по всіх рядках у
запит.

Ключова відмінність цього методу від
[PDO::sqliteCreateFunction](pdo.sqlitecreatefunction.md) у тому, що
Для керування агрегуванням вимагає використання двох функцій.

### Список параметрів

`function_name`
Ім'я функції для використання у запитах.

`step_func`
Функція зворотного дзвінка для кожного рядка в результуючому наборі. Ваша
Функція PHP повинна акумулювати результат і зберігати його в контексті
агрегації.

Ця функція має бути визначена таким чином:

step(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$context`,
int `$rownumber`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`context`
Для першого рядка має дорівнювати **`null`**; Для всіх наступних
рядків його значення має дорівнювати значенню, поверненому на
попередній крок; ви повинні використовувати його для збереження стану
агрегації.

`rownumber`
Номер поточного рядка.

`value`
Перший аргумент передано агрегатору.

`values`
Подальші аргументи.

Значення функції, що повертається, буде використано як параметр `context`
при наступному запуску функції, або як значення, що передається
фіналізуючої функції.

`finalize_func`
Функція зворотного виклику для обчислення підсумкового агрегованого
значення. Вона буде викликана як тільки всі рядки результуючого набору
будуть оброблені, їй буде передано агрегуючий контекст і вона поверне
фінальне значення. Ця функція має повернути значення типу
зрозумілого SQLite (тобто [скалярний тип](language.types.intro.md)).

Ця функція має бути визначена таким чином:

fini([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$context`, int `$rowcount`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`context`
Містить значення, повернене останнім викликом агресивної
функція step_func.

`rowcount`
Кількість рядків, до яких застосовувалася функція, що агрегує.

Значення цієї функції, що повертається, буде використано як результат
агрегації.

`num_args`
Підказка для парсера SQLite, якщо функція зворотного виклику отримує
задану кількість аргументів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад агрегуючої функції max_length**

` <?php$data u003d array(  'one',  'two',  'three',  'four',  'five',  ''ix'' ' '              ;$db u003d new PDO('sqlite::memory:');$db->exec("CREATE TABLE strings(a)");$insert u003d $db->prepare('INSERT INTO strings VALUES (?)') );foreach ($data as $str) {   $insert->execute(array($str));}$insert u003d null;function max_len_step($context, $rownumber, $string){     > $context) {        $context u003d strlen($string); }   return $context;}function max_len_finalize($context, $rowcount){   return $context u003du003du003d null ? 0 : $context;}$db->sqliteCreateAggregate('max_len', 'max_len_step', 'max_len_finalize');var_dump($db->query('SELECT max_len(a) from strings')->fetchAll ?> `

У цьому прикладі ми створили функцію, що агрегує, яка обчислює довжину
найбільшого рядка в одному зі стовпців таблиці. Для кожного рядка,
викликається функція `max_len_step`, і їй передається параметр `$context`.
Цей параметр, як і будь-яка інша змінна PHP, може містити і
масив та об'єкт. У цьому прикладі вона використовується для зберігання
максимальної довжини рядка; Якщо `$string` має довжину більшу, ніж
міститься у контексті, ми оновлюємо контекст новим значенням.

Після того, як будуть оброблені всі рядки, SQLite викличе функцію
`max_len_finalize` для обчислення результату агрегації. У ній ми
проводимо обчислення, виходячи з даних з $context. В нашому
простому прикладі ми просто повертаємо його значення, тому що ніякі
додаткові обчислення не потрібні.

**Підказка**

Вкрай не рекомендується зберігати в контексті копії значень для
обробки їх у фінальній функції, так як це спричинить за собою
великий перевитрата пам'яті SQLite для обробки запиту. Просто
уявіть, скільки пам'яті вам знадобиться, якщо вам потрібно
агрегувати, наприклад, мільйон значень по 32 байти.

**Підказка**

Ви можете використовувати
[PDO::sqliteCreateFunction](pdo.sqlitecreatefunction.md) та
[PDO::sqliteCreateAggregate](pdo.sqlitecreateaggregate.md) для
перевизначення стандартних функцій SQLite, що агрегують.

### Дивіться також

- [PDO::sqliteCreateFunction](pdo.sqlitecreatefunction.md)
- **sqlite_create_function()**
- **sqlite_create_aggregate()**
