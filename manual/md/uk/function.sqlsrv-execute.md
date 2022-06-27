- [«sqlsrv_errors](function.sqlsrv-errors.md)
- [sqlsrv_fetch_array »](function.sqlsrv-fetch-array.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- Виконує запит підготовлений за допомогою sqlsrv_prepare

#sqlsrv_execute

(No version information available, might only be in Git)

sqlsrv_execute — Виконує запит, підготовлений за допомогою
[sqlsrv_prepare()](function.sqlsrv-prepare.md)

### Опис

**sqlsrv_execute**(resource `$stmt`): bool

Виконує запит, підготовлений за допомогою
[sqlsrv_prepare()](function.sqlsrv-prepare.md). Функція ідеальна
підходить для багаторазового виконання підготовленого запиту з різними
значення параметрів.

### Список параметрів

`stmt`
Ресурс оператора, що повертається
[sqlsrv_prepare()](function.sqlsrv-prepare.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_execute()****

У цьому прикладі показано, як підготувати оператор за допомогою
[sqlsrv_prepare()](function.sqlsrv-prepare.md) та повторно виконати
його кілька разів (з різними значеннями параметрів) за допомогою
**sqlsrv_execute()**.

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password");$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false) {    die( print_r( sqlsrv_errors(), true));}$sql u003d "UPDATE Table_1        SET OrderQty u003d ?        WHERE SalesOrderID u003d ?";// Инициализация параметрів і підготовка запиту.// Змінні $qty і $id пов'язані з оператором $stmt.$qty u003d 0; $id u003d 0;$stmt u003d sqlsrv_prepare( $conn, $sql, array( &$qty, &$id));if( !$stmt ) {    die( print_r( sqlsrv_error) Налаштування інформації SalesOrderDetailID і OrderQty.// Цей масив порівняє ідентифікатор замовлення з кількістю замовлення в парах ключ|u003d1u003d3               заказа.foreach( $orders as $id u003d> $qty) {     // Оскільки $id і $qty прив'язані к $stmt1,    // их оновлені | if( sqlsrv_execute( $stmt ) u003du003du003du003dfalse ) {         die( print_r( sqlsrv_errors(), true)); }}?> `

### Примітки

Коли ви підготуєте запит, який використовує змінні в
як параметри, змінні прив'язуються до оператора. Це означає,
що якщо ви оновите значення змінних, наступного разу, коли ви
виконайте запит, він буде працювати з оновленими значеннями
параметрів. Для операторів, які ви плануєте виконати лише один
раз, використовуйте [sqlsrv_query()](function.sqlsrv-query.md).

### Дивіться також

- [sqlsrv_prepare()](function.sqlsrv-prepare.md) - Підготовка
запит до виконання
- [sqlsrv_query()](function.sqlsrv-query.md) - Підготовляє та
виконує запит
