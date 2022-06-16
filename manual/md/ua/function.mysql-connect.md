- [«mysql_close](function.mysql-close.md)
- [mysql_create_db »] (function.mysql-create-db.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Відкриває з'єднання із сервером MySQL

# mysql_connect

(PHP 4, PHP 5)

mysql_connect — Відкриває з'єднання із сервером MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_connect()](function.mysqli-connect.md)
- [PDO::\_\_construct()](pdo.construct.md)

### Опис

**mysql_connect**(
string `$server` u003d ini_get("mysql.default_host"),
string `$username` u003d ini_get("mysql.default_user"),
string `$password` u003d ini_get("mysql.default_password"),
bool `$new_link` u003d **`false`**,
int `$client_flags` u003d 0
): resource \ | false

Відкриває нове з'єднання з сервером MySQL або використовує вже
існуюче.

### Список параметрів

`server`
Сервер MySQL. Може також включати номер порту, наприклад,
"hostname:port" або шлях до локального сокету, наприклад,
":/path/to/socket" для локального сервера.

Якщо PHP-директива
[mysql.default_host](mysql.configuration.md#ini.mysql.default-host) не
визначено (за замовчуванням), то значенням за замовчуванням є
'localhost:3306'. В [SQL safe mode](ini.core.md#ini.sql.safe-mode)
цей параметр ігнорується і завжди використовується значення
'localhost:3306'.

`username`
Ім'я користувача. Значення за умовчанням визначається директивою
[mysql.default_user](mysql.configuration.md#ini.mysql.default-user). В
[SQL safe mode](ini.core.md#ini.sql.safe-mode) цей параметр буде
проігнорований і буде використаний користувач, який володіє процесом
сервера.

`password`
Пароль. Значення за умовчанням визначається директивою
[mysql.default_password](mysql.configuration.md#ini.mysql.default-password).
У [SQL safe mode](ini.core.md#ini.sql.safe-mode) цей параметр буде
проігнорований і як пароль буде використаний порожній рядок.

`new_link`
Якщо другий виклик функції **mysql_connect()** стався з тими ж
аргументами, то нове з'єднання нічого очікувати встановлено. Замість цього
функція поверне посилання вже встановлене з'єднання. Параметр
`new_link` може змусити функцію **mysql_connect()** відкрити ще одне
з'єднання, навіть якщо з'єднання з аналогічними параметрами вже відкрито.
У [SQL safe mode](ini.core.md#ini.sql.safe-mode) цей параметр
ігнорується.

`client_flags`
Параметр `client_flags` має бути комбінацією з наступних констант:
128 (включає обробку `LOAD DATA LOCAL`), **`MYSQL_CLIENT_SSL`**,
**`MYSQL_CLIENT_COMPRESS`**, **`MYSQL_CLIENT_IGNORE_SPACE`** or
**`MYSQL_CLIENT_INTERACTIVE`**. Докладніше читайте в розділі [Клієнтські
константи MySQL](mysql.constants.md#mysql.client-flags). У [SQL safe
mode](ini.core.md#ini.sql.safe-mode) цей параметр ігнорується.

### Значення, що повертаються

Повертає дескриптор з'єднання з MySQL у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysql_connect()****

` <?php$link u003d mysql_connect('localhost', 'mysql_user', 'mysql_password');if (!$link) {    die('Помилка з'єднання: ' . mysql_error());}echo ' ($link);?> `

**Приклад #2 Приклад використання **mysql_connect()** із синтаксисом
`hostname:port`**

` <?php// з'єднуємося з example.com на порту 3307$link u003d mysql_connect('example.com:3307', 'mysql_user', 'mysql_password');if (!$link) { '   . mysql_error());}echo 'Успішно з'єдналися';mysql_close($link);// з'єднуємось з localhost на порту 3307$link u003d mysql_connect('127.0.0.1:3307',''pass (!$link) {   die('Помилка з'єднання: ' . mysql_error());}echo 'Успішно з'єдналися';mysql_close($link);?> `

**Приклад #3 Приклад використання **mysql_connect()** із синтаксисом
":/path/to/socket"**

`<?php// з'єднуємося до localhost по сокету, т.е. /tmp/mysql.sock// варіант 1: не вказуємо localhost$link u003d mysql_connect(':/tmp/mysql', 'mysql_user', 'mysql_password');if (!$link) { 'є|'' . mysql_error());}echo 'Успішно з'єдналися';mysql_close($link);// варіант 2: вказуємо localhost$link u003d mysql_connect('localhost:/tmp/mysql.sock', 'mysql_user', 'mysql_user', ;if (!$link) {   die('Помилка з'єднання: ' . mysql_error());}echo ''Успішно з'єдналися';mysql_close($link);?> `

### Примітки

> **Примітка**:
>
> При вказівці параметра `server` значення "localhost" або
> "localhost:port" клієнтська бібліотека MySQL намагатиметься
> з'єднатися із локальним сокетом. Якщо ви все ж таки хочете використовувати
> TCP/IP, використовуйте адресу "127.0.0.1" замість "localhost". Якщо
> клієнтська бібліотека намагається підключитися не до того локального
> сокету, правильний шлях має бути встановлений через вказівку
> директиви `php.ini`
> [mysql.default_host](mysql.configuration.md#ini.mysql.default-host)
> в `php.ini`, після чого можна залишати параметр `server` порожнім.

> **Примітка**:
>
> З'єднання з сервером буде закрито після завершення виконання скрипта,
> якщо до цього воно не було закрито за допомогою функції
> [mysql_close()](function.mysql-close.md).

> **Примітка**:
>
> Помилка "Can't create TCP/IP socket (10106)" (Неможливо створити сокет
> TCP/IP) зазвичай означає, що конфігураційна директива
> [variables_order](ini.core.md#ini.variables-order) не містить
> Символ `E`. У Windows, якщо оточення не буде скопійовано
> змінна оточення `SYSTEMROOT`, то PHP відчуватиме проблеми
> під час завантаження Winsock.

### Дивіться також

- [mysql_pconnect()](function.mysql-pconnect.md) - Встановлює
постійне з'єднання з сервером MySQL
- [mysql_close()](function.mysql-close.md) - Закриває з'єднання з
сервером MySQL
