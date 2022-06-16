- [« cubrid_connect_with_url](function.cubrid-connect-with-url.md)
- [cubrid_current_oid »](function.cubrid-current-oid.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Відкриває з'єднання з сервером CUBRID

#cubrid_connect

(PECL CUBRID u003d 8.3.1)

cubrid_connect — Відкриває з'єднання з сервером CUBRID

### Опис

**cubrid_connect**(
string `$host`,
int `$port`,
string `$dbname`,
string `$userid` u003d ?,
string `$passwd` u003d ?,
bool `$new_link` u003d **`false`**
): resource

Функція **cubrid_connect()** використовується для створення з'єднання з
сервером, використовуючи його адресу, порт, ім'я бази даних, ім'я користувача
та пароля. Якщо логін та пароль не задані, то за замовчуванням буде
використовувати з'єднання "PUBLIC".

### Список параметрів

`host`
Ім'я хоста або IP-адреса сервера CUBRID CAS.

`port`
Порт сервера CUBRID CAS (BROKER_PORT у $CUBRID/conf/cubrid_broker.conf).

`dbname`
Назва бази даних.

`userid`
Ім'я користувача. Якщо не задано, то буде використано стандартне ім'я
"Публік".

`passwd`
Пароль. Якщо не заданий, то використовуватиметься "".

`new_link`
Якщо функція
[cubrid_connect_with_url()](function.cubrid-connect-with-url.md) була
викликана повторно з такими ж аргументами, нове з'єднання не буде
створено, замість нього буде повернено ідентифікатор існуючого
підключення. Параметр `new_link` змінює таку поведінку та змушує
[cubrid_connect_with_url()](function.cubrid-connect-with-url.md) в
у будь-якому випадку створити нове з'єднання, навіть якщо функція
[cubrid_connect_with_url()](function.cubrid-connect-with-url.md) раніше
була викликана з такими самими аргументами.

### Значення, що повертаються

Ідентифікатор підключення у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_connect()****

` <?phpprintf("%-30s %s
", "CUBRID PHP Version:", cubrid_version());printf("
");$connu003du003dcubrid_connect("localhost", 33000, "demodb", "dba");if (!$conn) {    die('Connect Error ('. cubrid_error_code()_._) .')' . ;}$db_params u003d cubrid_get_db_parameter($conn);while (list($param_name, $param_value) u003d each($db_params)) {    printf("%-30s %s
", $param_name, $param_value);}printf("
");$server_info u003d cubrid_get_server_info($conn);$client_info u003d cubrid_get_client_info();printf("%-30s %s
", "Server Info:", $server_info);printf("%-30s %s
", "Client Info:", $client_info);printf("
");$charset u003d cubrid_get_charset($conn);printf("%-30s %s
", "CUBRID Charset:", $charset);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

CUBRID PHP Version: 9.1.0.0001

PARAM_ISOLATION_LEVEL 3
LOCK_TIMEOUT -1
MAX_STRING_LENGTH 1073741823
PARAM_AUTO_COMMIT 1

Server Info: 9.1.0.0212
Client Info: 9.1.0

CUBRID Charset: iso8859-1

### Дивіться також

- [cubrid_pconnect()](function.cubrid-pconnect.md) - Відкриває
постійне з'єднання із сервером CUBRID
- [cubrid_connect_with_url()](function.cubrid-connect-with-url.md) -
Створює оточення для з'єднання із сервером CUBRID
- [cubrid_pconnect_with_url()](function.cubrid-pconnect-with-url.md) -
Відкриває постійне з'єднання із сервером CUBRID
- [cubrid_disconnect()](function.cubrid-disconnect.md) - Закриває
з'єднання з базою даних
- [cubrid_close()](function.cubrid-close.md) - Закриває з'єднання
з базою даних
