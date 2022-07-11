- [« mysqli_stmt::$error_list](mysqli-stmt.error-list.md)
- [mysqli_stmt::execute »](mysqli-stmt.execute.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає рядок із поясненням останньої помилки під час виконання
запиту

# mysqli_stmt::$error

# mysqli_stmt_error

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$error -- mysqli_stmt_error — Повертає рядок з
поясненням останньої помилки під час виконання запиту

### Опис

Об'єктно-орієнтований стиль

string `$mysqli_stmt->error`;

Процедурний стиль

**mysqli_stmt_error**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): string

Повертає рядок із повідомленням про помилку для останнього виклику функції,
яка могла її спричинити.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Рядок повідомлення про помилку. Порожній рядок означає відсутність помилок.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* відкриваємо з'єднання */$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno(  вдалося підключитися: %s
", mysqli_connect_error());   exit();}$mysqli->query("CREATE TABLE myCountry LIKE Country");$mysqli->query("INSERT INTO myCountry SELECT * FROM  , Code FROM myCountry ORDER BY Name";if ($stmt u003d $mysqli->prepare($query)) {    /* удаляємо таблицю */     $mysqli-> y $stmt->execute();   printf("Помилка:%s.
", $stmt->error);    /* закриваємо запит */   $stmt->close();}/* закриваємо з'єднання*/$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

`<?php/* відкриваємо з'єднання */$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno())          підключитися: %s
mysqli_connect_error()u003d| FROM myCountry ORDER BY Name";if ($stmt u003d mysqli_prepare($link, $query)) {    /* удаляем таблицу */    mysqli_query($link, "DROP TABLE myCountry");    /* выполняем запрос */    mysqli_stmt_execute($stmt );   printf("Помилка:%s.
", mysqli_stmt_error ($stmt));

Результат виконання даних прикладів:

Помилка: Table 'world.myCountry' doesn't exist.

### Дивіться також

- [mysqli_stmt_errno()](mysqli-stmt.errno.md) - Повертає код
помилки виконання останнього запиту
- [mysqli_stmt_sqlstate()](mysqli-stmt.sqlstate.md) - Повертає код
помилки SQLSTATE, викликаної під час виконання останньої операції над
запитом
