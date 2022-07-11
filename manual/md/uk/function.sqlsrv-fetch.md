- [«sqlsrv_fetch_object](function.sqlsrv-fetch-object.md)
- [sqlsrv_field_metadata »](function.sqlsrv-field-metadata.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Робить наступний рядок у наборі результатів доступного для читання

#sqlsrv_fetch

(No version information available, might only be in Git)

sqlsrv_fetch — Робить наступний рядок у наборі результатів.
для читання

### Опис

**sqlsrv_fetch**(resource `$stmt`, int `$row` u003d ?, int `$offset` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Робить наступний рядок у наборі результатів, доступних для читання.
Використовуйте [sqlsrv_get_field()](function.sqlsrv-get-field.md) для
читання полів рядка.

### Список параметрів

`stmt`
Ресурс оператора, що повертається
[sqlsrv_query()](function.sqlsrv-query.md) або
[sqlsrv_execute()](function.sqlsrv-execute.md).

`row`
Рядок, до якого потрібно отримати доступ. Параметр можна використовувати
тільки в тому випадку, якщо вказаний оператор був підготовлений за допомогою
курсора з можливістю прокручування. У цьому випадку параметр може приймати
одне з наступних значень:

- SQLSRV_SCROLL_NEXT
- SQLSRV_SCROLL_PRIOR
- SQLSRV_SCROLL_FIRST
- SQLSRV_SCROLL_LAST
- SQLSRV_SCROLL_ABSOLUTE
- SQLSRV_SCROLL_RELATIVE

`offset`
Вказує рядок, до якого буде здійснюватися доступ, якщо для
параметра рядка встановлено значення **`SQLSRV_SCROLL_ABSOLUTE`** або
**`SQLSRV_SCROLL_RELATIVE`**. Зверніть увагу, що перший рядок у
Набір результатів має індекс 0.

### Значення, що повертаються

Повертає **`true`**, якщо наступний рядок набору результатів був
успішно отримана, **`false`** у разі виникнення помилки та
**`null`**, якщо у наборі результатів більше немає рядків.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_fetch()****

У наступному прикладі показано, як отримати рядок за допомогою
**sqlsrv_fetch()** і отримати поля рядки за допомогою
[sqlsrv_get_field()](function.sqlsrv-get-field.md).

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}$sql u003d "SELECT Name, Comment        FROM Table_1        WHERE ReviewIDu003d1";$stmt u003d sqlsrv_query( $conn, $sql);if( $stmt u003du003du003d false ) {    die( print_r( sqlsrv_errors(), true));}// Зробіть на на а  if( sqlsrv_fetch( $stmt ) u003du003du003du003dfalse) {     die( print_r( sqlsrv_errors(), true));}// Отримайте поля. Индексы полей начинаются с 0 и должны извлекаться по порядку.// Получение полей строки по имени не поддерживается sqlsrv_get_field.$name u003d sqlsrv_get_field( $stmt, 0);echo "$name: ";$comment u003d sqlsrv_get_field( $stmt, 1) ;echo $comment;?> `

### Дивіться також

- [sqlsrv_get_field()](function.sqlsrv-get-field.md) - Отримує
дані поля з поточного вибраного рядка
- [sqlsrv_fetch_array()](function.sqlsrv-fetch-array.md) -
Повертає рядок як масив
- [sqlsrv_fetch_object()](function.sqlsrv-fetch-object.md) -
Отримує наступний рядок даних у наборі результатів як об'єкт
