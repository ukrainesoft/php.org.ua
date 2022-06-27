- [«sqlsrv_send_stream_data](function.sqlsrv-send-stream-data.md)
- [Модулі для роботи з датою та часом »](refs.calendar.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Повертає інформацію про сервер

#sqlsrv_server_info

(No version information available, might only be in Git)

sqlsrv_server_info — Повертає інформацію про сервер

### Опис

**sqlsrv_server_info**(resource `$conn`): array

Повертає інформацію про сервер.

### Список параметрів

`conn`
Ресурс підключення, який з'єднує клієнт та сервер.

### Значення, що повертаються

Повертає масив, описаний у таблиці:

| CurrentDatabase | Підключена база даних. |
|------------------|---------------------------|
| SQLServerVersion | Версія SQL Server. |
| SQLServerName | Ім'я сервера. |

**Повертається масив**

### Приклади

**Приклад #1 Приклад використання **sqlsrv_server_info()****

` <?php$serverName u003d "serverName\sqlexpress";$connu003du003dsqlsrv_connect( $serverName);if( $conn u003du003du003du003dfalse ) {     die( print_r(sqlsrv_errors()) $conn);if( $server_info ){    foreach( $server_info as $key u003d> $value) {      echo $key.": ".$value."<br />"; }} else {     die( print_r( sqlsrv_errors(), true));}?> `

### Дивіться також

- [sqlsrv_client_info()](function.sqlsrv-client-info.md) -
Повертає інформацію про клієнта та зазначене підключення
