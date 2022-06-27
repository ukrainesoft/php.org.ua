- [« mysqli::use_result](mysqli.use-result.md)
- [mysqli_stmt »](class.mysqli-stmt.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає кількість попереджень із останнього запиту заданого
підключення

# mysqli::$warning_count

# mysqli_warning_count

(PHP 5, PHP 7, PHP 8)

mysqli::$warning_count -- mysqli_warning_count — Повертає кількість
попереджень із останнього запиту заданого підключення

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->warning_count`;

Процедурний стиль

**mysqli_warning_count**([mysqli](class.mysqli.md) `$mysql`): int

Повертає кількість попереджень із останнього запиту.

> **Примітка**:
>
> Для отримання попереджень можна використовувати SQL-команду
> `SHOW WARNINGS [limit row_count]`.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Кількість попереджень чи нуль, якщо таких немає.

### Приклади

**Приклад #1 Приклад використання `$mysqli->warning_count`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {   ключ|
", mysqli_connect_error());   exit();}$mysqli->query("CREATE TABLE myCity LIKE City"); GBR',        'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch')";$mysqli->query($query);if ($mysqli->warning_count) {    if ($result u003d $mysqli->query("SHOW WARNINGS")) {        $row u003d $ result->fetch_row();        printf("%s (%d): %s
", $row[0], $row[1], $row[2]);        $result->close();    }}/* закриваємо з'єднання*/$mysqli->close();?> ``

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
", Mysqli_connect_error()); MyCli_query($link,"CREATE TABLE myCity LIKE City"); ',        'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch')";mysqli_query($link, $query);if (mysqli_warning_count($link)) {    if ($result u003d mysqli_query($link, "SHOW WARNINGS")) {        $row u003d mysqli_fetch_row($result );         printf("%s (%d): %s
", $row[0], $row[1], $row[2]);        mysqli_free_result($result);    }}/* закриваємо з'єднання */mysqli_close($link);?> `

Результат виконання даних прикладів:

Warning (1264): Data truncated for column 'Name' at row 1

### Дивіться також

- [mysqli_errno()](mysqli.errno.md) - Повертає код помилки
останнього виклику функції
- [mysqli_error()](mysqli.error.md) - Повертає рядок з описом
останньої помилки
- [mysqli_sqlstate()](mysqli.sqlstate.md) - Повертає код стану
SQLSTATE останній MySQL операції
