- [«sqlsrv_execute](function.sqlsrv-execute.md)
- [sqlsrv_fetch_object »](function.sqlsrv-fetch-object.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Повертає рядок як масив

#sqlsrv_fetch_array

(No version information available, might only be in Git)

sqlsrv_fetch_array — Повертає рядок як масив

### Опис

**sqlsrv_fetch_array**(
resource `$stmt`,
int `$fetchType` u003d ?,
int `$row` u003d ?,
int `$offset` u003d ?
): array

Повертає наступний доступний рядок даних у вигляді асоціативного
масиву, числового масиву або того й іншого (за замовчуванням).

### Список параметрів

`stmt`
Ресурс оператора, який повертається sqlsrv_query або sqlsrv_prepare.

`fetchType`
Обумовлена константа, що вказує тип масиву, що повертається.
Можливі значення: **`SQLSRV_FETCH_ASSOC`**, **`SQLSRV_FETCH_NUMERIC`**
або **`SQLSRV_FETCH_BOTH`** (за замовчуванням).

Тип вибірки SQLSRV_FETCH_ASSOC не слід використовувати під час використання
набору результатів з кількома шпальтами з однаковим ім'ям.

`row`
Задає рядок для доступу до результуючого набору, в якому
використовується курсор, що прокручується. Можливі значення:
**`SQLSRV_SCROLL_NEXT`**, **`SQLSRV_SCROLL_PRIOR`**,
**`SQLSRV_SCROLL_FIRST`**, **`SQLSRV_SCROLL_LAST`**,
**`SQLSRV_SCROLL_ABSOLUTE`** та **`SQLSRV_SCROLL_RELATIVE`** (за
замовчуванням). Якщо цей параметр вказано, `fetchType` має бути явно
визначено.

`offset`
Вказує рядок, до якого буде здійснюватися доступ, якщо для
параметра рядка встановлено значення **`SQLSRV_SCROLL_ABSOLUTE`** або
**`SQLSRV_SCROLL_RELATIVE`**. Зверніть увагу, що перший рядок у
Набір результатів має індекс 0.

### Значення, що повертаються

У разі успішного виконання повертає масив, **`null`**, якщо в
наборі результатів більше немає рядків і **`false`** у разі виникнення
помилки.

### Приклади

**Приклад #1 Отримання асоціативного масиву.**

` <?php$serverName u003d "serverName\instanceName";$connectionInfou003du003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo );if( $conn u003du003du003d false ) {    die( print_r( sqlsrv_errors(), true)));}$sql u003d "SELECT FirstName, T| , $sql );if( $stmt u003du003du003d false) {    die( print_r( sqlsrv_errors(), true) );}while( $row u003d sqlsrv_fetch_array( $        ) .", ".$row['FirstName']."<br />";}sqlsrv_free_stmt( $stmt);?> `

**Приклад #2 Отримання числового масиву.**

` <?php$serverName u003d "serverName\instanceName";$connectionInfou003du003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo );if( $conn u003du003du003d false ) {    die( print_r( sqlsrv_errors(), true)));}$sql u003d "SELECT FirstName, T| , $sql );if( $stmt u003du003du003d false) {    die( print_r( sqlsrv_errors(), true) );}while( $row u003d sqlsrv_fetch_array( $         ) , ".$row[1]."<br />";}sqlsrv_free_stmt( $stmt);?> `

### Примітки

Не вказано `fetchType` або явне використання константи
**`SQLSRV_FETCH_TYPE`** у наведених вище прикладах поверне масив, у
якого ключі будуть як асоціативні, і числові.

Якщо більше одного стовпця повертається з тим самим ім'ям,
останній стовпець матиме пріоритет. Щоб уникнути конфліктів імен
полів, використовуйте псевдоніми.

Якщо стовпець повертається без імені, асоціативний ключ для елемента
масиву буде порожнім рядком ("").

### Дивіться також

- [sqlsrv_connect()](function.sqlsrv-connect.md) - Відкриває
з'єднання з базою даних Microsoft SQL Server
- [sqlsrv_query()](function.sqlsrv-query.md) - Підготовляє та
виконує запит
- [sqlsrv_errors()](function.sqlsrv-errors.md) - Повертає
інформацію про помилку та попередження останньої виконаної операції
SQLSRV
- [sqlsrv_fetch()](function.sqlsrv-fetch.md) - Робить таку
рядок у наборі результатів доступного для читання
