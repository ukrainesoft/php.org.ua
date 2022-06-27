- [« mysqli::select_db](mysqli.select-db.md)
- [mysqli::$sqlstate »](mysqli.sqlstate.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Задає набір символів

# mysqli::set_charset

# mysqli_set_charset

(PHP 5 \>u003d 5.0.5, PHP 7, PHP 8)

mysqli::set_charset -- mysqli_set_charset — Задає набір символів

### Опис

Об'єктно-орієнтований стиль

public **mysqli::set_charset**(string `$charset`): bool

Процедурний стиль

**mysqli_set_charset**([mysqli](class.mysqli.md) `$mysql`, string
`$charset`): bool

Задає набір символів, який використовуватиметься під час обміну даними з
сервером бази даних.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`charset`
Набір символів, які потрібно встановити.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::set_charset()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "test");printf("Початковий :
", $mysqli->character_set_name());/* зміна набору символів на utf8mb4 */$mysqli->set_charset("utf8mb4");printf("Поточний набір символів: %s
", $mysqli->character_set_name());

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect('localhost', 'my_user', 'my_password', 'test');printf("Початковий набір s
", mysqli_character_set_name($link));/* зміна набору символів на utf8mb4 */mysqli_set_charset($link, "utf8mb4");printf("Поточний набір символів: %s
", mysqli_character_set_name($link)); `

Результат виконання даних прикладів:

Початковий набір символів: latin1
Поточний набір символів: utf8mb4

### Примітки

> **Примітка**:
>
> Щоб використовувати цю функцію на платформах Windows, вам знадобиться
> клієнтська бібліотека MySQL версії 4.1.11 або вище (для MySQL 5.0
> відповідно 5.0.6 чи вище).

> **Примітка**:
>
> Це найкращий спосіб завдання набору символів. Використання для
> цілей функції [mysqli_query()](mysqli.query.md) (наприклад
> `SET NAMES utf8`) не рекомендується. Додатково дивіться [Набори
> символи MySQL](mysqlinfo.concepts.charset.md).

### Дивіться також

- [mysqli_character_set_name()](mysqli.character-set-name.md) -
Повертає поточне кодування, встановлене для з'єднання з БД
- [mysqli_real_escape_string()](mysqli.real-escape-string.md) -
Екранує спеціальні символи в рядку для використання в
SQL-вираз, використовуючи поточний набір символів з'єднання
- [Концепції кодувань MySQL](mysqlinfo.concepts.charset.md)
- [» Список підтримуваних MySQL наборів
символів](http://dev.mysql.com/doc/mysql/en/charset-charsets.md)
