- [« cubrid_pconnect_with_url](function.cubrid-pconnect-with-url.md)
- [cubrid_prepare »](function.cubrid-prepare.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Відкриває постійне з'єднання із сервером CUBRID

#cubrid_pconnect

(PECL CUBRID u003d 8.3.1)

cubrid_pconnect — Відкриває постійне з'єднання із сервером CUBRID

### Опис

**cubrid_pconnect**(
string `$host`,
int `$port`,
string `$dbname`,
string `$userid` u003d ?,
string `$passwd` u003d ?
): resource

Встановлює постійне з'єднання із сервером CUBRID.

**cubrid_pconnect()** діє дуже схоже на
[cubrid_connect()](function.cubrid-connect.md) з двома основними
відмінностями:

По-перше, при підключенні функція спочатку намагатиметься знайти (постійну)
посилання, яке вже відкрито з тим самим хостом, портом, ім'ям бази даних
та ідентифікатором користувача. Якщо з'єднання буде знайдено, замість
відкриття нового буде повернуто його ідентифікатор.

По-друге, з'єднання з SQL-сервером не буде закрито після закінчення
виконання скрипту. Замість цього посилання залишиться відкритим для
використання у майбутньому ([cubrid_close()](function.cubrid-close.md)
або [cubrid_disconnect()](function.cubrid-disconnect.md) не закриє
посилання, встановлені **cubrid_pconnect()**).

Тому цей тип посилання називається "постійним".

### Список параметрів

`host`
Ім'я хоста або IP-адреса сервера CUBRID CAS.

`port`
Номер порту CUBRID CAS-сервера (BROKER_PORT налаштований на
$CUBRID/conf/cubrid_broker.conf).

`dbname`
Назва бази даних.

`userid`
Ім'я користувача бази даних.

`passwd`
Пароль користувача.

### Значення, що повертаються

Ідентифікатор з'єднання у разі успішного виконання процесу або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання
[cubrid_connect()](function.cubrid-connect.md)**

` <?phpprintf("%-30s %s
", "Версія PHP CUBRID:", cubrid_version());printf("
");$connu003du003dcubrid_pconnect("localhost", 33000, "demodb", "dba");if (!$conn) {    die('Помилка з'єднання ('. cubrid_error_code()      ) ;}$db_params u003d cubrid_get_db_parameter($conn);while (list($param_name, $param_value) u003d each($db_params)) {    printf("%-30s %s
", $param_name, $param_value);}printf("
");$server_info u003d cubrid_get_server_info($conn);$client_info u003d cubrid_get_client_info();printf("%-30s %s
", "Інформація про сервері:", $server_info);printf("%-30s %s
", "Інформація про клієнт:", $client_info);printf("
");$charset u003d cubrid_get_charset($conn);printf("%-30s %s
", "Кодування CUBRID:", $charset);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Версія PHP CUBRID: 9.1.0.0001

PARAM_ISOLATION_LEVEL 3
LOCK_TIMEOUT -1
MAX_STRING_LENGTH 1073741823
PARAM_AUTO_COMMIT 1

Інформація про сервер: 9.1.0.0212
Інформація про клієнта: 9.1.0

Кодування CUBRID: iso8859-1

### Дивіться також

- [cubrid_connect()](function.cubrid-connect.md) - Відкриває
з'єднання з сервером CUBRID
- [cubrid_connect_with_url()](function.cubrid-connect-with-url.md) -
Створює оточення для з'єднання із сервером CUBRID
- [cubrid_pconnect_with_url()](function.cubrid-pconnect-with-url.md) -
Відкриває постійне з'єднання із сервером CUBRID
- [cubrid_disconnect()](function.cubrid-disconnect.md) - Закриває
з'єднання з базою даних
- [cubrid_close()](function.cubrid-close.md) - Закриває з'єднання
з базою даних
