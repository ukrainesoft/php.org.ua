- [«pg_socket](function.pg-socket.md)
- [pg_transaction_status »](function.pg-transaction-status.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Включає трасування підключення PostgreSQL

#pg_trace

(PHP 4 \>u003d 4.0.1, PHP 5, PHP 7, PHP 8)

pg_trace — Включає трасування підключення PostgreSQL

### Опис

**pg_trace**(string `$filename`, string `$mode` u003d "w",
?[PgSql\Connection](class.pgsql-connection.md) `$connection` u003d
**`null`**): bool

**pg_trace()** включає трасування з'єднання з PostgreSQL сервером у
зовнішній файл. Щоб розуміти вміст таких файлів, потрібно добре
розбиратися у внутрішньому пристрої клієнт-серверної взаємодії.

Для тих, хто не володіє подібними навичками, трасування все ж таки може
виявитися корисною для пошуку помилок при надсиланні запитів на сервер.
Наприклад, можна виконати команду **grep '^To backend' trace.log** та
переглянути, які запити реально надіслані на сервер. Додаткову
інформацію можна отримати з [» документації
PostgreSQL](http://www.postgresql.org/docs/current/interactive/).

### Список параметрів

`filename`
Повний шлях та ім'я файлу для запису журналу трасування. Аналогічно
[fopen()](function.fopen.md).

`mode`
Необов'язковий аргумент. Режим доступу до файлу. Аналогічно
[fopen()](function.fopen.md).

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md). Якщо параметр
`connection` вказано **`null`**, використовується з'єднання за замовчуванням.
З'єднання за замовчуванням - це останнє з'єднання, виконане з
за допомогою функцій [pg_connect()](function.pg-connect.md) або
[pg_pconnect()](function.pg-pconnect.md).

**Увага**
Починаючи з версії PHP 8.1.0, використання стандартного з'єднання
застаріло.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
| 8.0.0 | `connection` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **pg_trace()****

` <?php$pgsql_conn u003d pg_connect("dbnameu003dmark hostu003dlocalhost");if ($pgsql_conn) {   pg_trace('/tmp/trace.log', 'w', $pgsql_conn); pg_query("SELECT 1"); pg_untrace($pgsql_conn); // Тепер /tmp/trace.log зберігати інформацію про взаємодію з сервером} else {   print pg_last_error($pgsql_conn); exit;}?> `

### Дивіться також

- [fopen()](function.fopen.md) - Відкриває файл або URL
- [pg_untrace()](function.pg-untrace.md) - Вимикає трасування
з'єднання з PostgreSQL
