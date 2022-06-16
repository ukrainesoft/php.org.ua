- [« mysqli::real_connect](mysqli.real-connect.md)
- [mysqli::real_query »](mysqli.real-query.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Екранує спеціальні символи у рядку для використання у
SQL-вираз, використовуючи поточний набір символів з'єднання

# mysqli::real_escape_string

# mysqli::escape_string

# mysqli_real_escape_string

(PHP 5, PHP 7, PHP 8)

mysqli::real_escape_string -- mysqli::escape_string --
mysqli_real_escape_string — Екранує спеціальні символи в рядку
використання у SQL-вираженні, використовуючи поточний набір символів
з'єднання

### Опис

Об'єктно-орієнтований стиль

public **mysqli::real_escape_string**(string `$string`): string

Процедурний стиль

**mysqli_real_escape_string**([mysqli](class.mysqli.md) `$mysql`,
string `$string`): string

Ця функція використовується для створення допустимих SQL рядків, які
можна використовувати у SQL виразах. Заданий рядок кодується для
створення екранованого рядка SQL з урахуванням поточного набору символів
підключення.

**Застереження**

# Безпека: набір за промовчанням символів

Набір символів повинен бути заданий на стороні сервера, або за допомогою
API-функції [mysqli_set_charset()](mysqli.set-charset.md). В протилежному
у разі **mysqli_real_escape_string()** працювати не буде. За
додаткову інформацію звертайтеся до документації [набори
символів] (mysqlinfo.concepts.charset.md).

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`string`
Рядок, який потрібно екранувати.

Екрановані символи
`NUL (ASCII 0),
,, \, ', ", та Control-Z`.

### Значення, що повертаються

Повертає екранований рядок.

### Приклади

**Приклад #1 Приклад використання **mysqli::real_escape_string()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$city х| city працювати */$query u003d sprintf("SELECT CountryCode FROM City WHERE nameu003d'%s'",    $mysqli->real_escape_string($city));$result u003d $mysqli-y "Повернені рядки: %d.
", $result->num_rows);/* цей запрос завершиться помилкою, потому ми не екранували $city */$query u003d sprintf("SELECT CountryCode FROM City$ u003d $mysqli->query($query);

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR || MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$city u003d х' | буде працювати */$query u003d sprintf("SELECT CountryCode FROM City WHERE nameu003d'%s'",    mysqli_real_escape_string($mysqli, $city));$result u003dmysqli_y;y : %d.
", mysqli_num_rows ($result)); u003d mysqli_query ($ mysqli, $ $ query);

Результатом виконання даних прикладів буде щось подібне:

Повернені рядки: 1.

Fatal error: Uncaught mysqli_sql_exception: Ви маєте error в вашій SQL syntax; check the manual that corresponds to your MySQL server version for right syntax to used near 's-Hertogenbosch'' at line 1 in...

### Дивіться також

- [mysqli_set_charset()](mysqli.set-charset.md) - Задає набір
символів
