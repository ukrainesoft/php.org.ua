- [«sqlsrv_prepare](function.sqlsrv-prepare.md)
- [sqlsrv_rollback »](function.sqlsrv-rollback.md)

- [PHP Manual](index.md)
- [Функції SQLSRV](ref.sqlsrv.md)
- готує та виконує запит

#sqlsrv_query

(No version information available, might only be in Git)

sqlsrv_query — Підготовка та виконання запиту

### Опис

**sqlsrv_query**(
resource `$conn`,
string `$sql`,
array `$params` u003d ?,
array `$options` u003d ?
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Підготовляє та виконує запит.

### Список параметрів

`conn`
Ресурс підключення, що повертається
[sqlsrv_connect()](function.sqlsrv-connect.md).

`sql`
Рядок, що визначає запит, який потрібно підготувати та виконати.

`params`
Масив, що визначає інформацію про параметри під час виконання
параметризованого запиту. Елементи масиву можуть бути будь-якими
наступних:

- Строкового значення
- змінної PHP
- Масиву з наступною структурою: array($value \[, $direction \[,
$phpType \[, $sqlType\]\]\])

У наступній таблиці описані елементи у структурі масиву вище:

| Елемент Опис |
|-----------------------|------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------|
| $value | Рядкове значення, змінна PHP або змінна PHP, передана за посиланням. |
| $direction (optional) | Одна з наступних констант SQLSRV, які використовуються для вказівки напряму параметра: SQLSRV_PARAM_IN, SQLSRV_PARAM_OUT, SQLSRV_PARAM_INOUT. Значення за промовчанням - SQLSRV_PARAM_IN. |
| $phpType (optional) | Константа SQLSRV_PHPTYPE\_\*, що вказує тип даних PHP значення, що повертається. |
| $sqlType (optional) | Константа SQLSRV_SQLTYPE\_\*, яка вказує тип даних SQL Server вхідного значення. |

**Структура масиву**

`options`
Масив, визначальний параметри властивостей запиту. Підтримувані ключі
описані в наступній таблиці:

| Ключ | Значення | Опис |
|------------------------|------------------------ -------------------------------------------------- --------------------|----------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------|
| QueryTimeout | Позитивне ціле значення. | Встановлює час очікування на запит у секундах. За замовчуванням драйвер чекатиме на результати нескінченно. |
| SendStreamParamsAtExec | **`true`** або **`false`** (за замовчуванням **`true`**) | Налаштовує драйвер для надсилання всіх даних потоку під час виконання (**`true`**) або для надсилання даних потоку частинами (**`false`**). За замовчуванням встановлено значення **true**. Для отримання додаткової інформації дивіться [sqlsrv_send_stream_data()](function.sqlsrv-send-stream-data.md). |
| Scrollable | SQLSRV_CURSOR_FORWARD, SQLSRV_CURSOR_STATIC, SQLSRV_CURSOR_DYNAMIC, або SQLSRV_CURSOR_KEYSET | Дивіться [»Вказівка типу курсору та вибір рядків](http://msdn.microsoft.com/en-us/library/ee376927.aspx) у документації Microsoft SQLSRV. |

**Властивості запиту**

### Значення, що повертаються

Повертає ресурс виразу у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **sqlsrv_query()****

` <?php$serverName u003d "serverName\sqlexpress";$connectionInfo u003d array( "Database"u003d>"dbName", "UID"u003d>"username", "PWD"u003d>"password" );$conn u003d sqlsrv_connect ( $serverName, $connectionInfo);if( $conn u003du003du003d false ) {     die( print_r( sqlsrv_errors(), true));}$sql u003d "INSERT INTO Table_1  ;$params u003d array(1, "some data");$stmt u003d sqlsrv_query( $conn, $sql, $params);if( $stmt u003du003du003d false ) {         ;}?> `

### Примітки

Для операторів, які ви плануєте виконати лише один раз,
використовуйте **sqlsrv_query()**. Якщо ви маєте намір повторно виконати
вираз з іншими значеннями параметрів, використовуйте комбінацію
[sqlsrv_prepare()](function.sqlsrv-prepare.md) та
[sqlsrv_execute()](function.sqlsrv-execute.md).

### Дивіться також

- [sqlsrv_prepare()](function.sqlsrv-prepare.md) - Підготовка
запит до виконання
- [sqlsrv_execute()](function.sqlsrv-execute.md) - Виконує запит,
підготовлений за допомогою sqlsrv_prepare
