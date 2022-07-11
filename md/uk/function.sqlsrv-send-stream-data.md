- [«sqlsrv_rows_affected](function.sqlsrv-rows-affected.md)
- [sqlsrv_server_info »](function.sqlsrv-server-info.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Надсилає дані з потоків параметрів на сервер

#sqlsrv_send_stream_data

(No version information available, might only be in Git)

sqlsrv_send_stream_data — Надсилає дані з потоків параметрів на
сервер

### Опис

**sqlsrv_send_stream_data**(resource `$stmt`): bool

Надсилати дані із потоків параметрів на сервер. При кожному дзвінку
надсилається до 8 КБ даних.

### Список параметрів

`stmt`
Ресурс виразу, що повертається
[sqlsrv_query()](function.sqlsrv-query.md) або
[sqlsrv_execute()](function.sqlsrv-execute.md).

### Значення, що повертаються

Повертає **`true`**, якщо є ще дані для відправки та **`false`**,
якщо ні.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_send_stream_data()****

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password" );$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}$sql u003d "UPDATE Table_1 SET  | / Відкрийте дані параметрів як потік і помістіть их в масив $params.$data u003d fopen( "data://text/plain,[ Lengthy content here. ]" "r")$| ;// Підготуйте вираз. Використовуйте масив $options, щоб// відключити поведінку за замовчуванням, заключається в відправці всіх даних// потоку во час виконання запиту.$options , $params, $options);sqlsrv_execute( $stmt);// Отправляйте до 8 КБ данных параметров на сервер// при каждом вызове sqlsrv_send_stream_data.$i u003d 1;while( sqlsrv_send_stream_data( $stmt)) {      $i++;}echo "$i дзвінків було зроблено.";?> `

### Дивіться також

- [sqlsrv_prepare()](function.sqlsrv-prepare.md) - Підготовка
запит до виконання
- [sqlsrv_query()](function.sqlsrv-query.md) - Підготовляє та
виконує запит
