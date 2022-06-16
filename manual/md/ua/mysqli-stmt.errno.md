- [« mysqli_stmt::data_seek](mysqli-stmt.data-seek.md)
- [mysqli_stmt::$error_list »](mysqli-stmt.error-list.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає код помилки виконання останнього запиту

# mysqli_stmt::$errno

# mysqli_stmt_errno

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$errno -- mysqli_stmt_errno — Повертає код помилки
виконання останнього запиту

### Опис

Об'єктно-орієнтований стиль

int `$mysqli_stmt->errno`;

Процедурний стиль

**mysqli_stmt_errno**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): int

Повертає код помилки для останнього виклику функції, яка могла
завершитися вдало чи невдало.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Код помилки. Нуль означає відсутність помилок.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* відкриваємо з'єднання */$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno(  вдалося підключитися: %s
", mysqli_connect_error());   exit();}$mysqli->query("CREATE TABLE myCountry LIKE Country");$mysqli->query("INSERT INTO myCountry SELECT * FROM , Code FROM myCountry ORDER BY Name";if ($stmt u003d $mysqli->prepare($query)) {    /* удаляємо таблицю */     $mysqli-> y| $stmt->execute();   printf("Помилка:%d.
", $stmt->errno);    /* закриваємо запрос */   $stmt->close();}/* закриваємо з'єднання*/$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

`<?php/* відкриваємо з'єднання */$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno())          підключитися: %s
mysqli_connect_error()u003d| FROM myCountry ORDER BY Name";if ($stmt u003d mysqli_prepare($link, $query)) {    /* удаляем таблицу */    mysqli_query($link, "DROP TABLE myCountry");    /* выполняем запрос */    mysqli_stmt_execute($stmt );   printf("Помилка:%d.
", mysqli_stmt_errno($stmt));   /* закриваємо запрос */   mysqli_stmt_close($stmt);}/* закриваємо з'єднання*/mysqli_close($link);

Результат виконання даних прикладів:

Помилка: 1146.

### Дивіться також

- [mysqli_stmt_error()](mysqli-stmt.error.md) - Повертає рядок з
поясненням останньої помилки під час виконання запиту
- [mysqli_stmt_sqlstate()](mysqli-stmt.sqlstate.md) - Повертає код
помилки SQLSTATE, викликаної під час виконання останньої операції над
запитом
