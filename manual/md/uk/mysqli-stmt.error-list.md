- [« mysqli_stmt::$errno](mysqli-stmt.errno.md)
- [mysqli_stmt::$error »](mysqli-stmt.error.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає перелік помилок виконання останнього запиту

# mysqli_stmt::$error_list

# mysqli_stmt_error_list

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

mysqli_stmt::$error_list -- mysqli_stmt_error_list -- Повертає список
помилок виконання останнього запиту

### Опис

Об'єктно-орієнтований стиль

array `$mysqli_stmt->error_list`;

Процедурний стиль

**mysqli_stmt_error_list**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): array

Повертає список помилок, що виникли під час виконання останньої операції
над запитом, який може завершуватися успішно чи неуспішно.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Список помилок, кожна з яких представлена у вигляді масиву (array),
містить код помилки, повідомлення про помилку, а також код стану
sqlstate.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* відкриваємо з'єднання */$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno(  вдалося підключитися: %s
", mysqli_connect_error());   exit();}$mysqli->query("CREATE TABLE myCountry LIKE Country");$mysqli->query("INSERT INTO myCountry SELECT * FROM  , Code FROM myCountry ORDER BY Name";if ($stmt u003d $mysqli->prepare($query)) {    /* удаляємо таблицю */     $mysqli-> y $stmt->execute();   echo "Помилка:
";   print_r($stmt->error_list);   /* закриваємо запрос */    $stmt->close();}/* закриваємо з'єднання*/$mysqli->close();?> ``

**Приклад #2 Процедурний стиль**

`<?php/* відкриваємо з'єднання */$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno())          підключитися: %s
mysqli_connect_error()u003d| FROM myCountry ORDER BY Name";if ($stmt u003d mysqli_prepare($link, $query)) {    /* удаляем таблицу */    mysqli_query($link, "DROP TABLE myCountry");    /* выполняем запрос */    mysqli_stmt_execute($stmt );   echo "Помилка:
";   print_r(mysql_stmt_error_list($stmt));    /* закриваємо запрос */    mysqli_stmt_close($stmt);}/* закриваємо з'єднання**/my

Результат виконання даних прикладів:

Array
(
[0] u003d> Array
(
[errno] u003d> 1146
[sqlstate] u003d> 42S02
[error] u003d> Table 'world.myCountry' doesn't exist
)

)

### Дивіться також

- [mysqli_stmt_error()](mysqli-stmt.error.md) - Повертає рядок з
поясненням останньої помилки під час виконання запиту
- [mysqli_stmt_errno()](mysqli-stmt.errno.md) - Повертає код
помилки виконання останнього запиту
- [mysqli_stmt_sqlstate()](mysqli-stmt.sqlstate.md) - Повертає код
помилки SQLSTATE, викликаної під час виконання останньої операції над
запитом
