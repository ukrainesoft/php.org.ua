- [« pg_last_notice](function.pg-last-notice.md)
- [pg_lo_close »](function.pg-lo-close.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає OID останнього доданого до бази рядка

#pg_last_oid

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_last_oid — Повертає OID останнього доданого до бази рядка

### Опис

**pg_last_oid**([PgSql\Result](class.pgsql-result.md) `$result`):
string\|int\|false

**pg_last_oid()** використовується для визначення `OID`, що відповідає
вставленому в таблицю рядку.

Поле OID таблиць баз даних стало необов'язковим, починаючи з версії
PostgreSQL 7.2, а з версії 8.1 перестане додаватися до таблиць
замовчуванням. Якщо поле OID таблиці не встановлено, використовуйте функцію
[pg_result_status()](function.pg-result-status.md) для перевірки
успішності вставки записів у таблицю.

Щоб отримати значення `SERIAL` поля після вставки рядка в таблицю,
використовуйте функцію PostgreSQL `CURRVAL`, передавши їй ім'я
послідовності, значення якої необхідно отримати. Щоб дізнатися ім'я
послідовності необхідно використовувати функцію
`pg_get_serial_sequence` (PostgreSQL 8.0).

У PostgreSQL 8.1 є функція `LASTVAL`, що повертає значення найбільш
часто використовується за сесію послідовності. Так можна уникнути
необхідність задавати назву послідовності, таблиці чи колонки.

> **Примітка**:
>
> Колишня назва функції: **pg_getlastoid()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

### Значення, що повертаються

Ціле число (int) або рядок (string), що містить OID останньої
вставленого рядка на з'єднанні `connection`, або **`false`**, якщо
помилка або поле OID недоступне.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **pg_last_oid()****

`<?php  // Підключення к базі даних  pg_connect("dbnameu003dmark hostu003dlocalhost"); // Створення тестової таблиці pg_query("CREATE TABLE test (a INTEGER) WITH OIDS"); // Вставка даних в таблицю  $res u003d pg_query("INSERT INTO test VALUES (1)"); $oidu003d pg_last_oid($res);?> `

### Дивіться також

- [pg_query()](function.pg-query.md) - Виконує запит
- [pg_result_status()](function.pg-result-status.md) - Повертає
стан результату запиту
