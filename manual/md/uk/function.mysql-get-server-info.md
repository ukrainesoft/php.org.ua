- [« mysql_get_proto_info](function.mysql-get-proto-info.md)
- [mysql_info »](function.mysql-info.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає інформацію про сервер MySQL

# mysql_get_server_info

(PHP 4 u003d 4.0.5, PHP 5)

mysql_get_server_info — Повертає інформацію про сервер MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_get_server_info()](mysqli.get-server-info.md)
- [PDO::getAttribute(PDO::ATTR_SERVER_VERSION)](pdo.getattribute.md)

### Опис

**mysql_get_server_info**(resource `$link_identifier` u003d NULL):
string\|false

Повертає версію MySQL.

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

Повертає версію сервера MySQL у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_get_server_info()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . Mysql_error());}printf("Вер| %s
", mysql_get_server_info());?> `

Результатом виконання цього прикладу буде щось подібне:

Версія сервера MySQL: 4.0.1-alpha

### Дивіться також

- [mysql_get_client_info()](function.mysql-get-client-info.md) -
Повертає дані про MySQL-клієнт
- [mysql_get_host_info()](function.mysql-get-host-info.md) -
Повертає інформацію про з'єднання з MySQL
- [mysql_get_proto_info()](function.mysql-get-proto-info.md) -
Повертає інформацію про протокол MySQL
- [phpversion()](function.phpversion.md) - Отримує поточну версію
PHP
