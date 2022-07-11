- [« pg_field_type_oid](function.pg-field-type-oid.md)
- [pg_flush »](function.pg-flush.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає ім'я типу заданого поля

#pg_field_type

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_type — Повертає ім'я типу заданого поля

### Опис

**pg_field_type**([PgSql\Result](class.pgsql-result.md) `$result`, int
`$field`): string

**pg_field_type()** повертає рядок, який містить ім'я базового типу
значень колонки результату запиту `result` з номером `field`.

> **Примітка**:
>
> Якщо тип значень використовується PostgreSQL домен (замість
> базового типу), функція поверне ім'я типу всередині домену, а чи не ім'я самого
> домену.

> **Примітка**:
>
> Колишня назва функції: **pg_fieldtype()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`field`
Порядковий номер поля, починаючи з нуля.

### Значення, що повертаються

Рядок, що містить ім'я базового типу значень поля.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Отримання інформації про поле вибірки**

`<?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися з базою"); // Покладемо, 'title' має тип varchar $res u003d pg_query($dbconn, "select title from authors where author u003d 'Orwell'"); echo "Title field type: ", pg_field_type($res, 0);?> `

Результат виконання цього прикладу:

Title field type: varchar

### Дивіться також

- [pg_field_prtlen()](function.pg-field-prtlen.md) - Повертає
кількість друкованих символів
- [pg_field_name()](function.pg-field-name.md) - Повертає
найменування поля
- [pg_field_type_oid()](function.pg-field-type-oid.md) - Повертає
ідентифікатор типу заданого поля
