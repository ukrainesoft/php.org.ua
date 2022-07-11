- [« pg_send_prepare](function.pg-send-prepare.md)
- [pg_send_query »](function.pg-send-query.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Надсилає параметризований запит на сервер, не чекає
результату, що повертається

#pg_send_query_params

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_send_query_params — Надсилає параметризований запит на сервер, не
чекає на результат, що повертається

### Опис

**pg_send_query_params**([PgSql\Connection](class.pgsql-connection.md)
`$connection`, string `$query`, array `$params`): int\|bool

Відправляє параметризований запит на виконання і не чекає на нього
завершення. Параметри передаються окремо від тексту запиту SQL.

Функція є аналогом [pg_send_query()](function.pg-send-query.md)
за одним винятком: параметри запиту можна передавати окремо від
рядки запиту. Аргументи функції обробляються так само, як і в
[pg_query_params()](function.pg-query-params.md).
[pg_send_query()](function.pg-send-query.md) підтримується на
з'єднання з серверами PostgreSQL версій 7.4 і вище. Функція не буде
працювати із серверами ранніх версій. Також вона підтримує лише одну
SQL-команду у виразі.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

`query`
Параметризований запит SQL. Повинен містити лише один вираз
(кілька виразів розділених крапкою з комою не підтримуються).
Якщо на запит будуть передаватися параметри, вони замінять
псевдозмінні $1, $2 і т.д.

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

**Приклад #1 Приклад використання **pg_send_query_params()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося підключитися"); // Використання параметрів. Варто помітити, що немає потреби укласти в лапки і екранувати параметр. pg_send_query_params($dbconn, 'select count(*) from authors where city u003d $1', array('Perth')); // У порівнянні с pg_send_query $str u003d pg_escape_string('Perth'); pg_send_query($dbconn, "select count(*) from authors where city u003d '${str}'");?> `

### Дивіться також

- [pg_send_query()](function.pg-send-query.md) - Відправляє
асинхронний запит
