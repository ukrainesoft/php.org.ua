- [« mysql_get_client_info](function.mysql-get-client-info.md)
- [mysql_get_proto_info »](function.mysql-get-proto-info.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає інформацію про з'єднання з MySQL

# mysql_get_host_info

(PHP 4 u003d 4.0.5, PHP 5)

mysql_get_host_info — Повертає інформацію про з'єднання з MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_get_host_info()](mysqli.get-host-info.md)
- [PDO::getAttribute(PDO::ATTR_CONNECTION_STATUS)](pdo.getattribute.md)

### Опис

**mysql_get_host_info**(resource `$link_identifier` u003d NULL):
string\|false

Описує тип використовуваного з'єднання, вказаного переданим
дескриптором з'єднання, включаючи ім'я хоста.

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

Повертає рядок, що описує тип використовуваної сполуки, вказаної
переданим дескриптором з'єднання або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_get_host_info()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . Mysql_error());}printf("Т| : %s
", mysql_get_host_info());?> `

Результатом виконання цього прикладу буде щось подібне:

Тип з'єднання з MySQL: Localhost via UNIX socket

### Дивіться також

- [mysql_get_client_info()](function.mysql-get-client-info.md) -
Повертає дані про MySQL-клієнт
- [mysql_get_proto_info()](function.mysql-get-proto-info.md) -
Повертає інформацію про протокол MySQL
- [mysql_get_server_info()](function.mysql-get-server-info.md) -
Повертає інформацію про сервер MySQL
