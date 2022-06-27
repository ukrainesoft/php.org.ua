- [« mysql_list_fields](function.mysql-list-fields.md)
- [mysql_list_tables »](function.mysql-list-tables.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає список процесів MySQL

# mysql_list_processes

(PHP 4 u003d 4.3.0, PHP 5)

mysql_list_processes — Повертає список процесів MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_thread_id()](mysqli.thread-id.md)

### Опис

**mysql_list_processes**(resource `$link_identifier` u003d NULL):
resource\|false

Повертає перелік поточних процесів на сервері MySQL.

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

Дескриптор результату (resource) у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_list_processes()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');$result u003d mysql_list_processes($link);while ($row u003d mysql_fetch_assoc($result)){    %s%s%s
", $row["Id"], $row["Host"], $row["db"],        $row["Command"], $row["Time"]);}mysql_free_result($result); ?> `

Результатом виконання цього прикладу буде щось подібне:

1 localhost test Processlist 0
4 localhost mysql sleep 5

### Дивіться також

- [mysql_thread_id()](function.mysql-thread-id.md) - Повертає
ідентифікатор потоку
- [mysql_stat()](function.mysql-stat.md) - Повертає поточний статус
сервера
