- [« PDO::sqliteCreateCollation](pdo.sqlitecreatecollation.md)
- [Модулі для роботи з базами даних окремих виробників
»](refs.database.vendors.md)

- [PHP Manual](index.md)
- [SQLite (PDO)] (ref.pdo-sqlite.md)
- Реєстрація користувальницької функції для використання в
SQL-запитах

# PDO::sqliteCreateFunction

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8, PECL pdo_sqlite \>u003d 1.0.0)

PDO::sqliteCreateFunction — Реєстрація функції користувача для
використання у SQL-запитах

### Опис

public **PDO::sqliteCreateFunction**(
string `$function_name`,
[callable](language.types.callable.md) `$callback`,
int `$num_args` u003d -1,
int `$flags` u003d 0
): bool

**Увага**

Ця функція є ЕКСПЕРИМЕНТАЛЬНОЮ. Поведінка цієї функції, її ім'я
і документація, що відноситься до неї, можуть змінитися в наступних версіях
PHP без попередження. Використовуйте цю функцію на свій страх та ризик.

Цей метод дозволяє вам реєструвати функцію PHP як користувальницьку
функцію SQLite (User Defined Function, UDF), що дозволить використовувати
її у SQL-запитах.

UDF можна використовувати в будь-якому SQL-запиті, в якому дозволяється
використовувати функції, наприклад, SELECT, UPDATE, а також у тригерах.

### Список параметрів

`function_name`
Ім'я функції для використання у запитах.

`callback`
Функція зворотного дзвінка для обробки дзвінків SQL-функції.

> **Примітка**: Функція зворотного дзвінка повинна повертати значення
> зрозумілого SQLite типу (тобто [скалярного
> типу](language.types.intro.md)).

Ця функція має бути визначена таким чином:

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`value`
Перший аргумент, що передається в SQL-функцію.

`values`
Подальші аргументи.

`num_args`
Кількість аргументів, які приймає функція. Якщо поставити рівним
`-1`, то функція прийматиме будь-яку кількість аргументів.

`flags`
Побітова кон'юнкція (АБО) прапорів. На даний момент підтримується
тільки прапор **`PDO::SQLITE_DETERMINISTIC`**, який визначає те, що
функція завжди повертає однаковий результат для однакових вхідних
значень.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|----------------------------|
| 7.1.4 | Доданий параметр `flags`. |

### Приклади

**Приклад #1 Приклад використання **PDO::sqliteCreateFunction()****

` <?phpfunction md5_and_reverse($string){    return strrev(md5($string));}$db u003d new PDO('sqlite:sqlitedb');$db->sqliteCreateFunction('md5rev', 'md ;$rows u003d $db->query('SELECT md5rev(filename) FROM files')->fetchAll();?> `

У цьому прикладі ми визначили функцію, що обчислює md5 суму рядка та
перевертає її. Коли SQL-запит буде запущено, отримані значення
filename буде перетворено цією функцією. Результативний набір `$rows`
міститиме перетворені значення.

Краса такого підходу полягає в тому, що вам не потрібно після
отримання результуючого набору пробігатися по ньому циклом
[foreach](control-structures.foreach.md) для обчислення потрібних
значень.

**Підказка**

Ви можете використовувати
[PDO::sqliteCreateFunction](pdo.sqlitecreatefunction.md) та
[PDO::sqliteCreateAggregate](pdo.sqlitecreateaggregate.md) для
перевизначення стандартних функцій SQLite, що агрегують.

### Дивіться також

- [PDO::sqliteCreateAggregate](pdo.sqlitecreateaggregate.md)
- **sqlite_create_function()**
- **sqlite_create_aggregate()**
