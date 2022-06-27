- [«mysql_drop_db](function.mysql-drop-db.md)
- [mysql_error »](function.mysql-error.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає чисельний код помилки виконання останньої операції з
MySQL

# mysql_errno

(PHP 4, PHP 5)

mysql_errno - Повертає чисельний код помилки виконання останньої
операції з MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_errno()](mysqli.errno.md)
- [PDO::errorCode()](pdo.errorcode.md)

### Опис

**mysql_errno**(resource `$link_identifier` u003d NULL): int

Повертає код помилки останньої функції роботи з MySQL.

Помилки роботи з MySQL більше не викликають повідомлень у PHP. Замість цього
використовуйте функцію **mysql_errno()**, щоб отримати код помилки.
Врахуйте, що функція повертає код помилки лише останньої виконаної
функції (за винятком [mysql_error()](function.mysql-error.md) та
**mysql_errno()**). Перевірте результат роботи функції перед викликом
наступною.

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

Повертає код помилки останньої функції роботи з MySQL, або `0` (нуль),
якщо операцію виконано успішно.

### Приклади

**Приклад #1 Приклад використання **mysql_errno()****

` <?php$link u003d mysql_connect("localhost", "mysql_user", "mysql_password");if (!mysql_select_db("nonexistentdb", $link)) {    echo mysql_errno($link) . ": " . mysql_error($link). "
";}mysql_select_db("kossu", $link);if (!mysql_query("SELECT * FROM nonexistenttable", $link)) {   echo mysql_errno($link) . ": " . .
";}?> `

Результатом виконання цього прикладу буде щось подібне:

1049: Unknown database 'nonexistentdb'
1146: Table 'kossu.nonexistenttable' doesn't exist

### Дивіться також

- [mysql_error()](function.mysql-error.md) - Повертає текст помилки
останньої операції з MySQL
- [» Коди помилок
MySQL](http://dev.mysql.com/doc/mysql/en/error-handling.md)
