- [« mysqli::$error](mysqli.error.md)
- [mysqli::get_charset »](mysqli.get-charset.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає кількість стовпців, зачеплених останнім запитом

# mysqli::$field_count

# mysqli_field_count

(PHP 5, PHP 7, PHP 8)

mysqli::$field_count -- mysqli_field_count — Повертає кількість стовпців,
порушених останнім запитом

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->field_count`;

Процедурний стиль

**mysqli_field_count**([mysqli](class.mysqli.md) `$mysql`): int

Повертає число стовпців, які зачепили останній запит для з'єднання,
вказаного в `mysql`. Ця функція може бути корисною під час використання
[mysqli_store_result()](mysqli.store-result.md) для того, щоб
визначити чи виданий непустий результат, чи у разі невідомого
призначення запиту.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Ціле число, яке містить число полів у результаті запиту.

### Приклади

**Приклад #1 Приклад використання `$mysqli->field_count`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "test");$mysqli->query( "DROP TABLE IF EXISTS friends");$mysqli->query( TABLE friends (id int, name varchar(20))");$mysqli->query( "INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");$mysqli->real_query "SELECT * FROM friends");if ($mysqli->field_count) {    /* Визначити тип запиту (select/show або describe) */    $result u003d $my /* Створити вибірку */    $row u003d $result->fetch_row(); /* Очистити вибірку */    $result->close();}/* Закрити з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "test"); mysqli_query($link, "DROP TABLE IF EXISTS friends");mysqli_query($link, id int, name varchar(20))");mysqli_query($link, "INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");mysqli_real_query($link, "SELECT ");if(mysqli_field_count($link)) {    /* Визначити тип запиту (select/show або describe) */    $result u003d Mysqli_store_result($link); /* Створити вибірку */    $row u003d mysqli_fetch_row($result); /* Очистити вибірку */    mysqli_free_result($result);}/* Закрити з'єднання*/mysqli_close($link);?> `
