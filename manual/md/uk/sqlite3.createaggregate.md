- [SQLite3::\_\_construct](sqlite3.construct.md)
- [SQLite3::createCollation »](sqlite3.createcollation.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Зареєструвати функцію PHP як агрегуючу функцію SQL

# SQLite3::createAggregate

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::createAggregate — Зареєструвати функцію PHP як
агрегуючої функції SQL

### Опис

public **SQLite3::createAggregate**(
string `$name`,
[callable](language.types.callable.md) `$stepCallback`,
[callable](language.types.callable.md) `$finalCallback`,
int `$argCount` u003d -1
): bool

Реєструє функцію PHP або функцію користувача як
агрегує функції SQL для використання в запитах.

### Список параметрів

`name`
Ім'я агрегуючої функції SQL, яка має бути створена або
перевизначено.

`stepCallback`
Функція зворотного дзвінка, яка буде викликана для кожного рядка
результуючого набору. Ваша PHP-функція має акумулювати результат
та зберігати його в контексті агрегації.

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

`finalCallback`
Функція зворотного виклику для обчислення підсумкового агрегованого
значення. Вона буде викликана як тільки всі рядки результуючого набору
будуть оброблені, їй буде передано агрегуючий контекст і вона поверне
фінальне значення. Ця функція має повернути значення типу
зрозумілого SQLite (тобто [скалярний тип](language.types.intro.md)).

Ця функція має бути визначена таким чином:

fini([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$context`, int `$rownumber`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`context`
Містить результат найостаннішого виклику функції, що агрегує.

`rownumber`
Завжди `0`.

Значення цієї функції, що повертається, буде використане як повертається
значення всього агрегатора.

`argCount`
Кількість аргументів, які приймає функція агрегування SQL. Якщо
значення негативне, то функція може використовувати будь-яку кількість
аргументів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад агрегуючої функції max_length**

` <?php$data u003d array(  'one',  'two',  'three',  'four',  'five',  ''ix'' ' '              ;$db u003d new SQLite3(':memory:');$db->exec("CREATE TABLE strings(a)");$insert u003d $db->prepare('INSERT INTO strings VALUES (?)'); foreach ($data as $str) {    $insert->bindValue(1, $str); $insert->execute();}$insertu003du003dnull;function max_len_step($context, $rownumber, $string){    if (strlen($string) > $context) { {         | }   return $context;}function max_len_finalize($context, $rownumber){   return $context u003du003du003d null ? 0 : $context;}$db->createAggregate('max_len', 'max_len_step', 'max_len_finalize');var_dump($db->querySingle('SELECT max_len(a) from strings'));?> `

Результат виконання цього прикладу:

int(5)

У цьому прикладі ми написали функцію, що агрегує, яка обчислює самої
довгий рядок в одній колонці таблиці. Для кожного рядка викликається
функція `max_len_step` і їй передається параметр `$context`. Цей
параметр нічим не відрізняється від звичайної змінної PHP та спокійно може
містити масив чи об'єкт. У цьому прикладі ми використовуємо її для
зберігання максимальної знайденої довжини рядка. Якщо `$string` матиме
довжину більше, ніж поточна збережена, значення контексту буде
оновлено.

Після того, як всі рядки оброблені, SQLite викличе функцію
`max_len_finalize` для остаточної підготовки результату. Тут ми
можемо зробити необхідні розрахунки на основі даних з $context. В
нашому простому прикладі ніяка постобробка не потрібна і ми просто
повертаємо отримане значення.

**Підказка**

НЕ рекомендується зберігати копію значень у контексті, а обробку
виробляти у фіналізуючій функції, так як це може призвести до
великого споживання пам'яті при обробці запиту. Просто уявіть,
скільки пам'яті вам знадобиться для зберігання мільйона рядків, по 32 байти
кожна, у пам'яті.

**Підказка**

Для перевизначення вбудованих у SQLite агрегуючих функцій ви можете
використовувати **SQLite3::createAggregate()**.
