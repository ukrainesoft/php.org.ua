- [« mysql_free_result](function.mysql-free-result.md)
- [mysql_get_host_info »](function.mysql-get-host-info.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає дані про MySQL-клієнт

# mysql_get_client_info

(PHP 4 u003d 4.0.5, PHP 5)

mysql_get_client_info — Повертає дані про MySQL-клієнт

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_get_client_info()](mysqli.get-client-info.md)
- [PDO::getAttribute(PDO::ATTR_CLIENT_VERSION)](pdo.getattribute.md)

### Опис

**mysql_get_client_info**(): string

**mysql_get_client_info()** повертає рядок, що містить версію
клієнтської бібліотеки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Версія клієнтської бібліотеки MySQL.

### Приклади

**Приклад #1 Приклад використання **mysql_get_client_info()****

` <?phpprintf("Версія клієнтської бібліотеки MySQL: %s
", mysql_get_client_info());?> `

Результатом виконання цього прикладу буде щось подібне:

Версія клієнтської бібліотеки MySQL: 3.23.39

### Дивіться також

- [mysql_get_host_info()](function.mysql-get-host-info.md) -
Повертає інформацію про з'єднання з MySQL
- [mysql_get_proto_info()](function.mysql-get-proto-info.md) -
Повертає інформацію про протокол MySQL
- [mysql_get_server_info()](function.mysql-get-server-info.md) -
Повертає інформацію про сервер MySQL
