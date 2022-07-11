- [« mysql_num_rows](function.mysql-num-rows.md)
- [mysql_ping»] (function.mysql-ping.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Встановлює постійне з'єднання із сервером MySQL

# mysql_pconnect

(PHP 4, PHP 5)

mysql_pconnect — Встановлює постійне з'єднання із сервером MySQL

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_connect()](function.mysqli-connect.md) з `p:` префіксом
хоста
- [PDO::\_\_construct()](pdo.construct.md) з опцією драйвера
**`PDO::ATTR_PERSISTENT`**

### Опис

**mysql_pconnect**(
string `$server` u003d ini_get("mysql.default_host"),
string `$username` u003d ini_get("mysql.default_user"),
string `$password` u003d ini_get("mysql.default_password"),
int `$client_flags` u003d 0
): resource

Встановлює постійне з'єднання із сервером MySQL.

**mysql_pconnect()** працює аналогічно
[mysql_connect()](function.mysql-connect.md) з двома важливими
відмінностями.

По-перше, при з'єднанні функція намагається знайти відкритий
(постійний) покажчик на той самий сервер з тим самим користувачем і
паролем. Якщо він знайдений, повернутий функцією буде саме він, натомість
відкриття нового з'єднання.

По-друге, з'єднання з SQL-сервером не буде закрито, коли робота
скрипт закінчиться. Натомість, воно залишиться робочим для майбутнього
використання ([mysql_close()](function.mysql-close.md) також не
закриває постійні з'єднання, відкриті mysql_pconnect()**).

З'єднання такого типу називають "постійними".

### Список параметрів

`server`
Сервер MySQL. Може також включати номер порту, наприклад,
"hostname:port" або шлях до локального сокету, наприклад,
":/path/to/socket" для локального хоста.

Якщо директива
[mysql.default_host](mysql.configuration.md#ini.mysql.default-host) не
визначено (за замовчуванням), то за замовчуванням використовується значення
'localhost:3306'

`username`
Ім'я користувача. За замовчуванням використовується ім'я користувача
серверним процесом.

`password`
Пароль. За промовчанням використовується порожній рядок.

`client_flags`
Параметр `client_flags` може бути комбінацією наступних констант: 128
(включає обробку `LOAD DATA LOCAL`), **`MYSQL_CLIENT_SSL`**,
**`MYSQL_CLIENT_COMPRESS`**, **`MYSQL_CLIENT_IGNORE_SPACE`** та
**`MYSQL_CLIENT_INTERACTIVE`**.

### Значення, що повертаються

Повертає дескриптор постійного з'єднання MySQL у разі успішного
виконання, і **`false`** у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Зверніть увагу, що з'єднання такого типу працюють тільки, якщо PHP
> встановлений як модуль. За додатковою інформацією звертайтесь до
> розділу "[Постійні з'єднання з базами
> даних](features.persistent-connections.md)".

**Увага**

Використання постійних з'єднань може вимагати деякої
налаштування Apache та MySQL. Переконайтеся, що ви не перевищите максимального
число дозволених сполук MySQL.

### Дивіться також

- [mysql_connect()](function.mysql-connect.md) - Відкриває
з'єднання з сервером MySQL
- "[Постійні з'єднання з базами
даних](features.persistent-connections.md)"
