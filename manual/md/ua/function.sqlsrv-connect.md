- [«sqlsrv_configure](function.sqlsrv-configure.md)
- [sqlsrv_errors »](function.sqlsrv-errors.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Відкриває з'єднання з базою даних Microsoft SQL Server

#sqlsrv_connect

(No version information available, might only be in Git)

sqlsrv_connect — Відкриває з'єднання з базою даних Microsoft SQL
Server

### Опис

**sqlsrv_connect**(string `$serverName`, array `$connectionInfo` u003d ?):
resource

Відкриває підключення до бази даних Microsoft SQL Server. За замовчуванням
спроба підключення виконується за допомогою автентифікації
Windows. Щоб підключитися за допомогою автентифікації SQL
Server, увімкніть "UID" та "PWD" в масив параметрів підключення.

### Список параметрів

`serverName`
Ім'я сервера, якого встановлюється з'єднання. Щоб підключитися до
певному екземпляру, після імені сервера вкажіть зворотну косу
рису та ім'я екземпляра (наприклад, serverName\sqlexpress).

`connectionInfo`
Асоціативний масив, який визначає параметри підключення до сервера. Якщо
значення для ключів UID і PWD не вказані, буде зроблено спробу
підключення за допомогою автентифікації Windows. Повний список
підтримуваних ключів дивіться у розділі [» Параметри підключення
SQLSRV](http://msdn.microsoft.com/en-us/library/ff628167.aspx).

### Значення, що повертаються

Ресурс підключення. Якщо з'єднання не може бути відкрито, повертається
**`false`**.

### Приклади

**Приклад #1 Підключення за допомогою автентифікації Windows.**

` <?php$serverName u003d "serverName\sqlexpress"; //serverName\instanceName//Оскільки UID і PWD не вказані в масиві $connectionInfo,// буде прийнято спроба підключення з focus| $serverName, $connectionInfo);if( $conn ) {    echo "З'єднання встановлено.<br />";}else{    echo "З'єднання не встановлено.<br /> die( print_r( sqlsrv_errors(), true));}?> `

**Приклад #2 Підключення за допомогою імені користувача та пароля.**

` <?php$serverName u003d "serverName\sqlexpress"; //serverName\instanceName$connectionInfou003du003darray( "Database"u003d>"dbName", "UID"u003d>"userName", "PWD"u003d>"password");$conn u003d sqlsrv_connect( $serverName, $connectionInfo); if( $conn ) {     echo "З'єднання встановлено.<br />";}else{     echo "З'єднання не встановлено.<br />"; die( print_r( sqlsrv_errors(), true));}?> `

**Приклад #3 Підключення за допомогою порту.**

` <?php$serverName u003d "serverName\sqlexpress, 1542"; //serverName\instanceName, portNumber (за замовчуванням 1433)$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"userName", "PWD"u003d>"password");$conn u003d sql $serverName, $connectionInfo);if( $conn ) {    echo "З'єднання встановлено.<br />";}else{    echo "З'єднання не встановлено.<br /> die( print_r( sqlsrv_errors(), true));}?> `

### Примітки

За замовчуванням **sqlsrv_connect()** використовує пул з'єднань для
підвищення продуктивності з'єднання. Щоб вимкнути пул з'єднань
(тобто примусово встановлювати нове з'єднання кожного виклику),
встановіть для параметра "ConnectionPooling" у масиві
$connectionOptions значення 0 (або **`false`**). Для отримання
додаткову інформацію дивіться розділ [» Пул з'єднань
SQLSRV](http://msdn.microsoft.com/en-us/library/cc644930.aspx).

Модуль SQLSRV не має спеціальної функції для зміни бази даних після
підключення. Цільова база даних вказується в масиві
$connectionOptions, який передається до sqlsrv_connect. Щоб змінити
базу даних при відкритому з'єднанні, виконайте наступний запит USE
dbName" (наприклад, sqlsrv_query($conn, "USE dbName")).

### Дивіться також

- [sqlsrv_close()](function.sqlsrv-close.md) - Закриває відкрите
з'єднання та звільняє ресурси, пов'язані з цим з'єднанням
- [sqlsrv_errors()](function.sqlsrv-errors.md) - Повертає
інформацію про помилку та попередження останньої виконаної операції
SQLSRV
- [sqlsrv_query()](function.sqlsrv-query.md) - Підготовляє та
виконує запит
