- [« pg_field_name](function.pg-field-name.md)
- [pg_field_prtlen »](function.pg-field-prtlen.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає порядковий номер іменованого поля

#pg_field_num

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_num - Повертає порядковий номер іменованого поля

### Опис

**pg_field_num**([PgSql\Result](class.pgsql-result.md) `$result`,
string `$field`): int

**pg_field_num()** поверне порядковий номер поля з ім'ям `field` у
в результаті запиту `result`.

> **Примітка**:
>
> Колишня назва функції: pg_fieldnum()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`field`
Найменування поля. Це ім'я обробляється як ідентифікатор у
SQL-команді, тобто воно переводиться в нижній регістр, якщо воно не
укладено у подвійні лапки.

### Значення, що повертаються

Номер поля (починаючи з нуля) або -1 у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Отримання інформації про поля вибірки**

`<?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися з базою"); $res u003d pg_query($dbconn, "select author, year, title from authors where author u003d'Orwell'"); echo "Стовпець 'title' - це поле з номером: ", pg_field_num($res, 'title');?> `

Результат виконання цього прикладу:

Стовпець 'title' - це поле з номером: 2

### Дивіться також

- [pg_field_name()](function.pg-field-name.md) - Повертає
найменування поля
