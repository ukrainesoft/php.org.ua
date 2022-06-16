- [«sqlsrv_connect](function.sqlsrv-connect.md)
- [sqlsrv_execute »](function.sqlsrv-execute.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Повертає інформацію про помилку та попередження останньої
виконаної операції SQLSRV

#sqlsrv_errors

(No version information available, might only be in Git)

sqlsrv_errors — Повертає інформацію про помилку та попередження
останньої виконаної операції SQLSRV

### Опис

**sqlsrv_errors**(int `$errorsOrWarnings` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає інформацію про помилку та попередження останньої виконаної
операції SQLSRV.

### Список параметрів

`errorsOrWarnings`
Визначає, чи повертаються відомості про помилки, попередження чи то
та інше. Якщо параметр не вказано, повертаються як інформація про
помилки, так і інформація про попередження. Підтримуються такі
значення параметра: SQLSRV_ERR_ALL, SQLSRV_ERR_ERRORS,
SQLSRV_ERR_WARNINGS.

### Значення, що повертаються

Якщо при останній операції sqlsrv виникли помилки та/або попередження,
повертається масив масивів, які містять інформацію про помилки. Якщо при
останньої операції sqlsrv не було помилок та/або попереджень,
повертається **`null`**. У наступній таблиці описано структуру
масивів, що повертаються:

| Ключ | Опис |
|----------|-------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------|
| SQLSTATE | Для помилок, які виникають через драйвер ODBC, повертається SQLSTATE, що повертається ODBC. Для помилок, які виникають через драйвери Microsoft для PHP для SQL Server, повертається SQLSTATE IMSSP. Для попереджень, які виникають через драйвери Microsoft для PHP для SQL Server, SQLSTATE повертає значення 01SSP. |
| code | Для помилок, які виникають через SQL Server, повертає власний код SQL Server. Для помилок, що виникають через драйвер ODBC, повертається код помилки, який повертається ODBC. Для помилок, які виникають через драйвери Microsoft для PHP для SQL Server, повертається код помилки Microsoft Drivers для PHP для SQL Server. |
| message | Опис помилки. |

**Масив, що повертається sqlsrv_errors**

### Приклади

**Приклад #1 Приклад використання **functionname()****

` <?php$serverName u003d "serverName/sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true)));}/* Налаштування запиту для вибору| */$sql u003d "SELECT BadColumnName FROM Table_1";/* Виконання запиту завершиться помилкою через неправильного імені стовпця. */$stmt u003d sqlsrv_query( $conn, $sql );if( $stmt u003du003du003d false ) {    if( ($errors u003d sqlsrv_errors() ) !u003d null) {        foreach( $errors as $error ) {            echo " SQLSTATE: ".$error[ 'SQLSTATE']."<br />"; echo "Код: ".$error[ 'code']."<br />"; echo "Повідомлення: ".$error[ 'message']."<br />"; }    }}?> `

### Примітки

За замовчуванням попередження, що генеруються під час виклику будь-якої функції
SQLSRV обробляються як помилки. Це означає, що якщо під час виклику
Функції SQLSRV виникає попередження, функція повертає **`false`**.
Однак попередження, що відповідають значенням SQLSTATE 01000, 01001,
01003 та 01S02, ніколи не розглядаються як помилки. Для отримання
інформації про зміну цієї поведінки дивіться опис функції
[sqlsrv_configure()](function.sqlsrv-configure.md) та параметр
WarningsReturnAsErrors.

### Дивіться також

- [sqlsrv_configure()](function.sqlsrv-configure.md) - Змінює
конфігурацію обробки помилок драйвера та ведення журналу
