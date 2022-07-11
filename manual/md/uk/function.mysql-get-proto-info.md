- [« mysql_get_host_info](function.mysql-get-host-info.md)
- [mysql_get_server_info »](function.mysql-get-server-info.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає інформацію про протокол MySQL

# mysql_get_proto_info

(PHP 4 u003d 4.0.5, PHP 5)

mysql_get_proto_info — Повертає інформацію про протокол MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_get_proto_info()](mysqli.get-proto-info.md)

### Опис

**mysql_get_proto_info**(resource `$link_identifier` u003d NULL): int\|false

Повертає інформацію про протокол MySQL.

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

Повертає використовуваний протокол MySQL у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_get_proto_info()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}printf("В| %s
", mysql_get_proto_info());?> `

Результатом виконання цього прикладу буде щось подібне:

Версія протоколу MySQL: 10

### Дивіться також

- [mysql_get_client_info()](function.mysql-get-client-info.md) -
Повертає дані про MySQL-клієнт
- [mysql_get_host_info()](function.mysql-get-host-info.md) -
Повертає інформацію про з'єднання з MySQL
- [mysql_get_server_info()](function.mysql-get-server-info.md) -
Повертає інформацію про сервер MySQL
