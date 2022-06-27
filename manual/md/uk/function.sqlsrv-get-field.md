- [«sqlsrv_get_config](function.sqlsrv-get-config.md)
- [sqlsrv_has_rows »](function.sqlsrv-has-rows.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Отримує дані поля з поточного вибраного рядка

#sqlsrv_get_field

(No version information available, might only be in Git)

sqlsrv_get_field — Отримує дані поля з поточного вибраного рядка

### Опис

**sqlsrv_get_field**(resource `$stmt`, int `$fieldIndex`, int
`$getAsType` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує дані поля з поточного вибраного рядка. Доступ до полів повинен
здійснюватись по порядку. Індекси полів починаються з 0.

### Список параметрів

`stmt`
Ресурс оператора, що повертається
[sqlsrv_query()](function.sqlsrv-query.md) або
[sqlsrv_execute()](function.sqlsrv-execute.md).

`fieldIndex`
Індекс поля, яке необхідно отримати. Індекси полів починаються з 0. До
Полям потрібно звертатися по порядку. тобто. якщо ви звертаєтеся до поля з
індексом 1, індекс поля 0 буде недоступний.

`getAsType`
Тип даних PHP для даних поля, що повертаються. Якщо цей параметр не
встановлений, дані поля будуть повернуті як тип даних PHP за
замовчуванням. Для отримання інформації про типи даних PHP за замовчуванням
дивіться [» Типи даних PHP по
замовчуванням](http://msdn.microsoft.com/en-us/library/cc296193.aspx) в
Microsoft SQLSRV документації.

### Значення, що повертаються

У разі успішного виконання повертає дані із вказаного поля.
Повертає **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_get_field()****

У наступному прикладі показано, як отримати рядок за допомогою
[sqlsrv_fetch()](function.sqlsrv-fetch.md) і отримати поля рядки з
за допомогою **sqlsrv_get_field()**.

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}$sql u003d "SELECT Name, Comment        FROM Table_1        WHERE ReviewIDu003d1";$stmt u003d sqlsrv_query( $conn, $sql);if( $stmt u003du003du003d false ) {    die( print_r( sqlsrv_errors(), true));}// Зробіть на на а  if( sqlsrv_fetch( $stmt ) u003du003du003du003dfalse) {     die( print_r( sqlsrv_errors(), true));}// Отримайте поля. Индексы полей начинаются с 0 и должны извлекаться по порядку.// Получение полей строки по имени не поддерживается sqlsrv_get_field.$name u003d sqlsrv_get_field( $stmt, 0);echo "$name: ";$comment u003d sqlsrv_get_field( $stmt, 1) ;echo $comment;?> `

### Дивіться також

- [sqlsrv_fetch()](function.sqlsrv-fetch.md) - Робить таку
рядок у наборі результатів доступного для читання
- [sqlsrv_fetch_array()](function.sqlsrv-fetch-array.md) -
Повертає рядок як масив
- [sqlsrv_fetch_object()](function.sqlsrv-fetch-object.md) -
Отримує наступний рядок даних у наборі результатів як об'єкт
