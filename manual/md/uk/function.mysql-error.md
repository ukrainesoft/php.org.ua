- [«mysql_errno](function.mysql-errno.md)
- [mysql_escape_string »](function.mysql-escape-string.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає текст помилки останньої операції з MySQL

# mysql_error

(PHP 4, PHP 5)

mysql_error — Повертає текст помилки останньої операції з MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_error()](mysqli.error.md)
- [PDO::errorInfo()](pdo.errorinfo.md)

### Опис

**mysql_error**(resource `$link_identifier` u003d NULL): string

Повертає текст помилки виконання останньої функції MySQL. Помилки
роботи з MySQL більше не викликають повідомлень у PHP. Замість цього
використовуйте функцію **mysql_error()**, для отримання повідомлення про
помилки. Врахуйте, що функція повертає текст помилки лише останньої
виконаної функції MySQL (крім **mysql_error()** та
[mysql_errno()](function.mysql-errno.md)), тому переконайтеся, що ви
Викликаєте цю функцію до виклику наступної функції MySQL.

### Список параметрів

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Повертає текст помилки виконання останньої функції MySQL, або ````
(порожній рядок), якщо операцію виконано успішно.

### Приклади

**Приклад #1 Приклад використання **mysql_error()****

` <?php$link u003d mysql_connect("localhost", "mysql_user", "mysql_password"); mysql_select_db("nonexistentdb", $link);echo mysql_errno($link) . ": " . mysql_error($link). "
";mysql_select_db("kossu", $link);mysql_query("SELECT * FROM nonexistenttable", $link);echo mysql_errno($link) . ": " . mysql_error($link) . "
";?> `

Результатом виконання цього прикладу буде щось подібне:

1049: Unknown database 'nonexistentdb'
1146: Table 'kossu.nonexistenttable' doesn't exist

### Дивіться також

- [mysql_errno()](function.mysql-errno.md) - Повертає чисельний
код помилки виконання останньої операції з MySQL
- [» Коди помилок
MySQL](http://dev.mysql.com/doc/mysql/en/error-handling.md)
