- [« pg_send_execute](function.pg-send-execute.md)
- [pg_send_query_params »](function.pg-send-query-params.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Надсилає запит на створення параметризованого SQL-вираження, не
чекаючи його завершення

#pg_send_prepare

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_send_prepare — Надсилає запит на створення параметризованого
SQL-вирази, не чекаючи його завершення

### Опис

**pg_send_prepare**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, string `$statement_name`, string `$query`): int\|bool

Надсилає запит на створення параметризованого SQL висловлювання і не чекає
його завершення.

Це асинхронна версія функції [pg_prepare()](function.pg-prepare.md):
вона повертає **`true`**, якщо вдалося відправити запит, **`false`** в
інакше. Після успішного надсилання, скористайтеся функцією
[pg_get_result()](function.pg-get-result.md), щоб дізнатися, створилося
чи необхідне SQL вираз. Аргументи функції обробляються так само, як
в [pg_prepare()](function.pg-prepare.md). Функція не буде працювати з
серверами PostgreSQL версій нижче 7.4.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`statement_name`
Ім'я заготовки, що створюється. Має бути унікальним у межах сесії.
Якщо встановлено порожній рядок, буде створено безіменний SQL вираз. При
цьому воно перезапише вже існуючий безіменний вираз, визначений
раніше.

`query`
Параметризований запит SQL. Повинен містити лише один вираз
(кілька виразів розділених крапкою з комою не підтримуються).
Якщо на запит будуть передаватися параметри, вони замінять
псевдозмінні $1, $2 і т.д.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання, **`false`** або `0`
у разі виникнення помилки. Для отримання результату запиту
використовуйте функцію [pg_get_result()](function.pg-get-result.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_send_prepare()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Could not connect"); // Підготовка запиту if (!pg_connection_busy($dbconn)) {    pg_send_prepare($dbconn, "my_query", 'SELECT ** FROM shops WHERE name ' $res1 u003d pg_get_result($dbconn); }  // Запуск запиту на виконання. Варто відзначити, що немає потреби екранувати // спецспеку символи в рядку "Joe's Widgets": $res2 u003d pg_get_result($dbconn); }  // Запуск на виконання того ж| $res3 u003d pg_get_result($dbconn); }?> `

### Дивіться також

- [pg_connect()](function.pg-connect.md) - Відкриває з'єднання з
базою даних PostgreSQL
- [pg_pconnect()](function.pg-pconnect.md) - Відкриває постійне
з'єднання з сервером PostgreSQL
- [pg_execute()](function.pg-execute.md) - Запускає виконання
раніше підготовленого параметризованого запиту та чекає результат
- [pg_send_execute()](function.pg-send-execute.md) - Запускає
попередньо підготовлений SQL-запит та передає йому параметри;
не чекає результату, що повертається
- [pg_send_query_params()](function.pg-send-query-params.md) -
Надсилає параметризований запит на сервер, не чекає
результату, що повертається
