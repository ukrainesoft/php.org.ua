- [«sqlsrv_begin_transaction](function.sqlsrv-begin-transaction.md)
- [sqlsrv_client_info »](function.sqlsrv-client-info.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- скасовує оператор

#sqlsrv_cancel

(No version information available, might only be in Git)

sqlsrv_cancel — скасовує оператор

### Опис

**sqlsrv_cancel**(resource `$stmt`): bool

Скасує оператор. Усі невикористані результати, пов'язані з
оператором, видаляються. Після виклику **sqlsrv_cancel()** вказаний
оператор може бути виконаний повторно, якщо він був створений за допомогою
[sqlsrv_prepare()](function.sqlsrv-prepare.md). Виклик
**sqlsrv_cancel()** не потрібно, якщо всі результати, пов'язані з
оператором були використані.

### Список параметрів

`stmt`
Ресурс оператора, який потрібно скасувати.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_cancel()****

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true)));}$sql u003d "SELECT Sales FROM$$ sql);if( $stmt u003du003du003d false ) {    die( print_r( sqlsrv_errors(), true));}if( sqlsrv_execute( $stmt ) u003du003du003d false)  ;}$salesTotal u003d 0;$count u003d 0;while( ($row u003d sqlsrv_fetch_array( $stmt)) && $salesTotal <u003d100000){     $qty u003d;| $priceu003du003d$row[1]; $salesTotal+u003du003d($price**$qty); $count++;}echo "$count продаж склали перший $$salesTotal виручки.<br />";// Скасувати очікуючі результати. Оператор можна використовувати повторно.sqlsrv_cancel( $stmt);?> `

### Примітки

Основна відмінність між
[sqlsrv_free_stmt()](function.sqlsrv-free-stmt.md) та
**sqlsrv_cancel()** полягає в тому, що ресурс оператора, скасований
за допомогою **sqlsrv_cancel()**, може бути повторно виконаний, якщо він був
створено за допомогою [sqlsrv_prepare()](function.sqlsrv-prepare.md).
Ресурс оператора, скасований за допомогою **sqlsrv_free_statement()**, не
може бути повторно виконано.

### Дивіться також

- [sqlsrv_free_stmt()](function.sqlsrv-free-stmt.md) - Звільняє
всі ресурси для вказаного оператора
- [sqlsrv_prepare()](function.sqlsrv-prepare.md) - Підготовка
запит до виконання
