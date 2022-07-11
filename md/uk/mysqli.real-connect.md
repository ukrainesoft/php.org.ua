- [« mysqli::query](mysqli.query.md)
- [mysqli::real_escape_string »](mysqli.real-escape-string.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Встановлює з'єднання із сервером mysql

# mysqli::real_connect

# mysqli_real_connect

(PHP 5, PHP 7, PHP 8)

mysqli::real_connect -- mysqli_real_connect -- Встановлює з'єднання з
сервером mysql

### Опис

Об'єктно-орієнтований стиль

public **mysqli::real_connect**(
string `$host` u003d ?,
string `$username` u003d ?,
string `$passwd` u003d ?,
string `$dbname` u003d ?,
int `$port` u003d ?,
string `$socket` u003d ?,
int `$flags` u003d ?
): bool

Процедурний стиль

**mysqli_real_connect**(
[mysqli](class.mysqli.md) `$link`,
string `$host` u003d ?,
string `$username` u003d ?,
string `$passwd` u003d ?,
string `$dbname` u003d ?,
int `$port` u003d ?,
string `$socket` u003d ?,
int `$flags` u003d ?
): bool

Встановлює з'єднання із СУБД MySQL.

Ця функція відрізняється від
[mysqli_connect()](function.mysqli-connect.md):

- Для роботи **mysqli_real_connect()** необхідний дійсний
об'єкт, створений функцією [mysqli_init()](mysqli.init.md).

- За допомогою функції [mysqli_options()](mysqli.options.md) можна
встановити різні налаштування підключення.

- Параметр `flags`.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`host`
Може бути ім'ям хоста або IP-адресою. Передача **`null`** або рядки
"localhost" цього параметра означає, що як хост буде
використовуватись локальна машина, на якій запущено скрипт. Якщо є
така можливість будуть використовуватися пайпи замість протоколу TCP/IP.

`username`
Ім'я користувача MySQL.

`passwd`
Якщо не заданий або дорівнює **`null`**, MySQL-сервер насамперед
спробує автентифікувати користувача в принципі того, хто має пароль, а
потім шукатиме серед користувачів, які не мають пароля. Такий
підхід дозволяє одному користувачеві призначати різні права (у
залежно від того, заданий пароль чи ні).

`dbname`
Якщо параметр заданий, його значення буде використовуватись як ім'я
бази даних за замовчуванням під час виконання запитів.

`port`
Порт, до якого буде здійснюватись підключення.

`socket`
Визначає номер порту для підключення до сервера MySQL.

> **Примітка**:
>
> Передача параметра `socket` не явно задаватиме тип з'єднання при
> підключення до сервера MySQL. Як встановлюватиметься з'єднання
> з MySQL-сервером визначається параметром `host`.

`flags`
За допомогою параметра `flags` можна встановити деякі налаштування з'єднання:

| Ім'я Опис |
|------------------------------------------------- |------------------------------------------------- -------------------------------------------------- -----------------------------------|
| **`MYSQLI_CLIENT_COMPRESS`** | Використання протоколу стиснення |
| **`MYSQLI_CLIENT_FOUND_ROWS`** | Повертати кількість рядків, що підійшли умовам вибірки замість кількості порушених запитом рядків |
| **`MYSQLI_CLIENT_IGNORE_SPACE`** | Допускати пробіли після назв функцій. Робить усі імена функцій зарезервованими словами. |
| **`MYSQLI_CLIENT_INTERACTIVE`** | Допускати `interactive_timeout` секунд (замість `wait_timeout`) простою, перш ніж закрити з'єднання |
| **`MYSQLI_CLIENT_SSL`** | Використання SSL (шифрування) |
| **`MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT`** | Аналогічно **`MYSQLI_CLIENT_SSL`**, але забороняє перевірку SSL сертифікату. Працює тільки з MySQL Native Driver та MySQL 5.6 та вище. |

**Підтримувані прапори**

> **Примітка**:
>
> З причин безпеки, прапор **`MULTI_STATEMENT`** не підтримується
> у PHP. Якщо потрібно виконувати мультизапити, використовуйте функцію
> [mysqli_multi_query()](mysqli.multi-query.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::real_connect()****

Об'єктно-орієнтований стиль

` <?php$mysqli u003d mysqli_init();if (!$mysqli) {    die('mysqli_init завершилася провалом');}if (!$mysqli->options(MYSQLI_INIT_COMMAND, '   'Установка MYSQLI_INIT_COMMAND завершилася провалом');}if (!$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {    die('Установка MYSQLI_OPT_CONNECT_TI| ', 'my_password', 'my_db')) {    die('Помилка підключення (' . mysqli_connect_errno() . ')                                                <br><br><br><br><br><br>                   <br><br><br><br>) $ mysqli->host_info. "
";$mysqli->close();?> `

Об'єктно-орієнтований стиль при розширенні класу mysqli

` <?phpclass foo_mysqli extends mysqli {    public function __construct($host, $user, $pass, $db) {        parent::init(); if (!parent::options(MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT u003d 0')) {            die('Установка MYSQLI_INIT_COMMAND'завершилася; }        if (!parent::options(MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {            die('Установка MYSQLI_OPT_CONNECT_TI ') }        if (!parent::real_connect($host, $user, $pass, $db)) {            die('Ошибка подключения (' . mysqli_connect_errno() . ') '                    . mysqli_connect_error()); }    }}$db u003d new foo_mysqli('localhost', 'my_user', 'my_password', 'my_db');echo 'Виконано... ' . $db->host_info . "
";$db->close();?> `

Процедурний стиль

`<?php$link u003d mysqli_init();if (!$link) {    die('mysqli_init завершилася провалом');}if (!mysqli_options($link, MYSQLI_INIT_COMMAND, '   | Установка MYSQLI_INIT_COMMAND завершилась провалом');}if (!mysqli_options($link, MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {    die('Установка MYSQLI_OPT_CONNECT_TIMEOUT завершилась провалом');}if (!mysqli_real_connect($link, 'localhost', 'my_user', ' my_password', 'my_db')) {   die('Помилка підключення (' . mysqli_connect_errno() . ') '              . mysqli'' ми| mysqli_get_host_info($link) . "
"; mysqli_close($link);?> `

Результат виконання даних прикладів:

Виконано... MySQL host info: localhost via TCP/IP

### Примітки

> **Примітка**:
>
> MySQLnd завжди має на увазі кодування, яке використовує по
> За замовчуванням сервер. Це кодування передається під час встановлення
> з'єднання/авторизації, які використовує mysqlnd.
>
> Libmysqlclient за замовчуванням використовує кодування, встановлене в
> `my.cnf` або спеціальним викликом
> [mysqli_options()](mysqli.options.md) до використання
> **mysqli_real_connect()**, але після [mysqli_init()](mysqli.init.md).

### Дивіться також

- [mysqli_connect()](function.mysqli-connect.md) - Псевдонім
mysqli::\_\_construct
- [mysqli_init()](mysqli.init.md) - Ініціалізує MySQLi та
повертає об'єкт для використання у функції mysqli_real_connect()
- [mysqli_options()](mysqli.options.md) - Встановлення установок
- [mysqli_ssl_set()](mysqli.ssl-set.md) - Використовується для
встановлення безпечних з'єднань за допомогою SSL
- [mysqli_close()](mysqli.close.md) - Закриває раніше відкрите
з'єднання з базою даних
