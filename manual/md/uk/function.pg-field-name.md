- [« pg_field_is_null](function.pg-field-is-null.md)
- [pg_field_num »](function.pg-field-num.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає найменування поля

#pg_field_name

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_name — Повертає назву поля

### Опис

**pg_field_name**([PgSql\Result](class.pgsql-result.md) `$result`, int
`$field`): string

**pg_field_name()** повертає ім'я поля результату запиту `result` з
порядковим номером `field`. Нумерація полів починається з нуля.

> **Примітка**:
>
> Колишня назва функції: **pg_fieldname()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`field`
Номер поля, починаючи з нуля.

### Значення, що повертаються

Найменування поля.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------|
| 8.1.0 | Параметр `result` тепер чекає на екземпляр [PgSql\Result](class.pgsql-result.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Отримання інформації про поля вибірки**

`<?php  $dbconn u003d pg_connect("dbnameu003dpublisher") or die("Не удалося з'єднатися з базою"); $res u003d pg_query($dbconn, "select * from authors where author u003d 'Orwell'"); $i u003d pg_num_fields($res); for ($j u003d 0; $j < $i; $j++) {      echo "column $j
";      $fieldname u003d pg_field_name($res, $j);     echo "fieldname: $fieldname
";      echo "printed length: " . pg_field_prtlen($res, $fieldname) . "characters
";      echo "storage length: " . pg_field_size($res, $j) . " bytes
";      echo "field type: " . pg_field_type($res, $j) . "

";  }?> `

Результат виконання цього прикладу:

column 0
fieldname: author
printed length: 6 characters
storage length: -1 bytes
field type: varchar

column 1
fieldname: year
printed length: 4 characters
storage length: 2 bytes
field type: int2

column 2
fieldname: title
printed length: 24 characters
storage length: -1 bytes
field type: varchar

### Дивіться також

- [pg_field_num()](function.pg-field-num.md) - Повертає порядковий
номер іменованого поля
