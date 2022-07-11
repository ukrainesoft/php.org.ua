- [«pg_select](function.pg-select.md)
- [pg_send_prepare »](function.pg-send-prepare.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Запускає попередньо підготовлений SQL-запит та передає йому
параметри; не чекає результату, що повертається

#pg_send_execute

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_send_execute — Запускає попередньо підготовлений SQL-запит та
передає параметри; не чекає результату, що повертається

### Опис

**pg_send_execute**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, string `$statement_name`, array `$params`): int\|bool

Запускає попередньо підготовлений SQL-запит та передає йому
параметри; не чекає результату, що повертається.

Працює аналогічно до функцій
[pg_send_query_params()](function.pg-send-query-params.md), тільки
замість рядка із запитом приймає ім'я попередньо підготовленого
SQL-запит. Аргументи функції обробляються як і, як і функції
[pg_execute()](function.pg-execute.md). Як і
[pg_execute()](function.pg-execute.md) ця функція не буде працювати
на з'єднаннях із серверами PostgreSQL версій нижче 7.4.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`statement_name`
Ім'я підготовленого для виконання запиту. Якщо передано порожній рядок
"", буде виконано безіменний запит. Ім'я та вміст запиту повинні
бути підготовлені функцією [pg_prepare()](function.pg-prepare.md),
[pg_send_prepare()](function.pg-send-prepare.md) або за допомогою
SQL-команди `PREPARE`.

`params`
Масив значень параметрів запиту для заміни псевдозмінних $1, $2 та
і т.д. у вихідному рядку запиту. Кількість елементів масиву має
точно співпадати з кількістю псевдозмінних.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, **`false`** або `0`
у разі виникнення помилки. Для отримання результату запиту
використовуйте функцію [pg_get_result()](function.pg-get-result.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_send_execute()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Could not connect"); // Підготовка запиту if (!pg_connection_busy($dbconn)) {    pg_send_prepare($dbconn, "my_query", 'SELECT ** FROM shops WHERE name ' $res1 u003d pg_get_result($dbconn); }  // Запуск запиту на виконання. Варто відзначити, що немає потреби екранувати // спецспеку символи в рядку "Joe's Widgets": $res2 u003d pg_get_result($dbconn); }  // Запуск на виконання того ж| $res3 u003d pg_get_result($dbconn); }?> `

### Дивіться також

- [pg_prepare()](function.pg-prepare.md) - Надсилає запит на
створення параметризованого SQL висловлювання і чекає на його завершення
- [pg_send_prepare()](function.pg-send-prepare.md) - Надсилає запит
створення параметризованого SQL-вираження, не чекаючи його
завершення
- [pg_execute()](function.pg-execute.md) - Запускає виконання
раніше підготовленого параметризованого запиту та чекає результат
