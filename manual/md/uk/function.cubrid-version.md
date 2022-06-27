- [« cubrid_set_query_timeout](function.cubrid-set-query-timeout.md)
- [Функції сумісності CUBRID MySQL »](cubridmysql.cubrid.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримати версію модуля CUBRID PHP

#cubrid_version

(PECL CUBRID u003d 8.3.0)

cubrid_version — Отримати версію модуля CUBRID PHP

### Опис

**cubrid_version**(): string

Функція **cubrid_version()** використовується для отримання версії модуля
CUBRID PHP.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Інформація про версію (наприклад, "8.3.1.0001").

### Приклади

**Приклад #1 Приклад використання **cubrid_version()****

` <?phpprintf("%-30s %s
", "CUBRID PHP Version:", cubrid_version());printf("
");$connu003du003dcubrid_connect("localhost", 33088, "demodb", "dba");if (!$conn) {    die('Connect Error ('. cubrid_error_code()_._) .')' . ;}$db_params u003d cubrid_get_db_parameter($conn);while (list($param_name, $param_value) u003d each($db_params)) {    printf("%-30s %s
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

- [cubrid_error_code()](function.cubrid-error-code.md) - Отримати
код помилки
- [cubrid_error_code_facility()](function.cubrid-error-code-facility.md) -
Отримати код рівня, на якому сталася помилка
