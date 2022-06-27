- [«sqlsrv_field_metadata](function.sqlsrv-field-metadata.md)
- [sqlsrv_get_config »](function.sqlsrv-get-config.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- звільняє всі ресурси для вказаного оператора

#sqlsrv_free_stmt

(No version information available, might only be in Git)

sqlsrv_free_stmt — Визволяє всі ресурси для вказаного оператора

### Опис

**sqlsrv_free_stmt**(resource `$stmt`): bool

Визволяє всі ресурси для вказаного оператора. Оператор не можна
використовувати після того, як для нього була викликана функція
**sqlsrv_free_stmt()**. Якщо **sqlsrv_free_stmt()** викликається в
оператор, який змінює стан сервера, виконується
оператора припиняється та оператор відкочується.

### Список параметрів

`stmt`
Оператор, ресурси якого потрібно звільнити. Зверніть увагу, що
**`null`** - допустиме значення параметра. Це дозволяє викликати
функцію у скрипті кілька разів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_free_stmt()****

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}$stmt u003d sqlsrv_query( $ F| stmt u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}/*---------------------------- ---     |Тут можна обробити результати запиту.-------------------------------*//* Звільніть ресурси для оператора */ sqlsrv_free_stmt($stmt);?> `

### Примітки

Основна відмінність між **sqlsrv_free_stmt()** та
[sqlsrv_cancel()](function.sqlsrv-cancel.md) полягає в тому, що
ресурс оператора, скасований за допомогою
[sqlsrv_cancel()](function.sqlsrv-cancel.md), може бути повторно
виконаний, якщо він був створений за допомогою
[sqlsrv_prepare()](function.sqlsrv-prepare.md). Ресурс оператора
скасований за допомогою **sqlsrv_free_statement()**, не може бути повторно
виконаний.

### Дивіться також

- [sqlsrv_cancel()](function.sqlsrv-cancel.md) - Скасує оператор
