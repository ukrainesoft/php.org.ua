- [«pg_trace](function.pg-trace.md)
- [pg_tty »](function.pg-tty.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає поточний стан транзакції на сервері

#pg_transaction_status

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

pg_transaction_status — Повертає поточний стан транзакції на
сервері

### Опис

**pg_transaction_status**([PgSql\Connection](class.pgsql-connection.md)
`$connection`): int

Повертає стан транзакції на сервері.

**Застереження**

**pg_transaction_status()** видає некоректний результат під час роботи з
сервером PostgreSQL 7.3, на якому вимкнено опцію `autocommit`.
Автоматичне завершення транзакцій на стороні сервера застаріло
використовується у пізніших версіях.

### Список параметрів

`connection`
Примірник [PgSql\Connection](class.pgsql-connection.md).

### Значення, що повертаються

Список можливих станів: **`PGSQL_TRANSACTION_IDLE`** (сервер
не діє), **`PGSQL_TRANSACTION_ACTIVE`** (виконується запит),
**`PGSQL_TRANSACTION_INTRANS`** (сервер не діє, робота в режимі
транзакції), або **`PGSQL_TRANSACTION_INERROR`** (сервер не діє,
транзакція зазнала невдачі). **`PGSQL_TRANSACTION_UNKNOWN`** - помилка
підключення. **`PGSQL_TRANSACTION_ACTIVE`** повертається тільки коли
запит вже надіслано на сервер, але ще не оброблено.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| 8.1.0 | Параметр `connection` тепер чекає на екземпляр [PgSql\Connection](class.pgsql-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_transaction_status()****

` <?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Підключитися не вдалося"); $stat u003d pg_transaction_status($dbconn); if ($stat u003du003du003d PGSQL_TRANSACTION_UNKNOWN) {      echo 'З'єднання не удалося'; } else if ($stat u003du003du003d PGSQL_TRANSACTION_IDLE) {     echo 'Сполука вільно і простує'; } else {      echo 'З'єднання в режимі транзакції'; }?> `
