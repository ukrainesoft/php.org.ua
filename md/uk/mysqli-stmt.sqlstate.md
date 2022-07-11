- [« mysqli_stmt::send_long_data](mysqli-stmt.send-long-data.md)
- [mysqli_stmt::store_result »](mysqli-stmt.store-result.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає код помилки SQLSTATE, викликаної під час виконання
останньої операції над запитом

# mysqli_stmt::$sqlstate

# mysqli_stmt_sqlstate

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$sqlstate -- mysqli_stmt_sqlstate -- Повертає код помилки
SQLSTATE, викликаної під час виконання останньої операції над запитом

### Опис

Об'єктно-орієнтований стиль

string `$mysqli_stmt->sqlstate`;

Процедурний стиль

**mysqli_stmt_sqlstate**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): string

Повертає рядок, що містить код SQLSTATE помилки, викликаної в результаті
виконання останньої операції над запитом, що може завершуватися
успішно чи неуспішно. Цей код складається із п'яти символів. '00000'
означає відсутність помилок. Значення цього коду визначено у стандарті
ANSI SQL, а також ODBC. Повний список можливих кодів можна переглянути
на сторінці
[»http://dev.mysql.com/doc/mysql/en/error-handling.md](http://dev.mysql.com/doc/mysql/en/error-handling.md).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає рядок, що містить код помилки SQLSTATE останньої досконалої
операції. Цей код складається із п'яти символів. '00000' означає
відсутність помилок.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* Відкриваємо з'єднання */$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Перевіряємо з'єднання */if (mysqli_connect_err вдалося підключитися: %s
", mysqli_connect_error());   exit();}$mysqli->query("CREATE TABLE myCountry LIKE Country");$mysqli->query("INSERT INTO myCountry SELECT * FROM  , Code FROM myCountry ORDER BY Name";if ($stmt u003d $mysqli->prepare($query)) {    /* удаляємо таблицю */     $mysqli-> y $stmt->execute();   printf("Помилка:%s.
", $stmt->sqlstate);    /* закриваємо запит */   $stmt->close();}/* закриваємо з'єднання*/$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php/* Відкриваємо з'єднання */$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* Перевіряємо з'єднання */if (mysqli_connect_errno()             підключитися: %s
mysqli_connect_error()u003d| FROM myCountry ORDER BY Name";if ($stmt u003d mysqli_prepare($link, $query)) {    /* удаляем таблицу */    mysqli_query($link, "DROP TABLE myCountry");    /* выполняем запрос */    mysqli_stmt_execute($stmt );   printf("Помилка:%s.
", mysqli_stmt_sqlstate($stmt));   /* закриваємо запрос */   mysqli_stmt_close($stmt);}/* закриваємо з'єднання**/mysqli_close($link);

Результат виконання даних прикладів:

Помилка: 42S02.

### Примітки

> **Примітка**:
>
> Слід зазначити, що не всі помилки MySQL мають свій відбиток у кодах
> SQLSTATE. Для таких помилок використовується загальний код HY000 (загальна
> помилка).

### Дивіться також

- [mysqli_stmt_errno()](mysqli-stmt.errno.md) - Повертає код
помилки виконання останнього запиту
- [mysqli_stmt_error()](mysqli-stmt.error.md) - Повертає рядок з
поясненням останньої помилки під час виконання запиту
