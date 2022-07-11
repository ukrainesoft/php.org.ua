- [« cubrid_get_query_timeout](function.cubrid-get-query-timeout.md)
- [cubrid_get»] (function.cubrid-get.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повертає версію сервера CUBRID

#cubrid_get_server_info

(PECL CUBRID u003d 8.3.0)

cubrid_get_server_info — Повертає версію сервера CUBRID

### Опис

**cubrid_get_server_info**(resource `$conn_identifier`): string

Функція повертає рядок, який представляє версію сервера CUBRID.

### Список параметрів

`conn_identifier`
З'єднання CUBRID.

### Значення, що повертаються

Рядок, що представляє версію сервера CUBRID у разі успішного
виконання, або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_get_server_info()****

` <?phpprintf("%-30s %s
", "Версія CUBRID PHP:", cubrid_version());printf("
");$conn u003d cubrid_connect("localhost", 33088, "demodb");if (!$conn) {    die('Помилка підключення ('. cubrid_error_code() .))_$; u003d cubrid_get_db_parameter($conn);while (list($param_name, $param_value) u003d each($db_params)) {    printf("%-30s %s
", $param_name, $param_value);}printf("
");$server_info u003d cubrid_get_server_info($conn);$client_info u003d cubrid_get_client_info();printf("%-30s %s
", "Інформація про сервері:", $server_info);printf("%-30s %s
", "Інформація про клієнт:", $client_info);printf("
");$charset u003d cubrid_get_charset($conn);printf("%-30s %s
", "Кодування CUBRID:", $charset);cubrid_disconnect($conn);?> `

Результат виконання цього прикладу:

Версія CUBRID PHP: 9.1.0.0001

PARAM_ISOLATION_LEVEL 3
LOCK_TIMEOUT -1
MAX_STRING_LENGTH 1073741823
PARAM_AUTO_COMMIT 1

Інформація про сервер: 9.1.0.0212
Інформація про клієнта: 9.1.0

Кодування CUBRID: iso8859-1
