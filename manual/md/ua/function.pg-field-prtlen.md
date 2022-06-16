- [«pg_field_num](function.pg-field-num.md)
- [pg_field_size »](function.pg-field-size.md)

- [PHP Manual](index.md)
- [Функції PostgreSQL](ref.pgsql.md)
- Повертає кількість друкованих символів

#pg_field_prtlen

(PHP 4 \>u003d 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_prtlen — Повертає кількість символів, що друкуються.

### Опис

**pg_field_prtlen**([PgSql\Result](class.pgsql-result.md) `$result`,
int `$row_number`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field_name_or_number`): int

**pg_field_prtlen**([PgSql\Result](class.pgsql-result.md) `$result`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$field_name_or_number`): int

**pg_field_prtlen()** повертає довжину рядка (кількість символів)
значення поля під час виведення результату `result`. Рядки нумеруються з нуля.
Функція поверне **`false`** у разі виникнення помилки.

`field_name_or_number` Номер або ім'я вибраного поля. Може передаватись
або як int, або як string. Якщо передається значення типу int, PHP
розпізнає його як номер, інакше як найменування поля.

Ознайомтеся з прикладами на сторінці з описом функції
[pg_field_name()](function.pg-field-name.md).

> **Примітка**:
>
> Колишня назва функції: pg_fieldprtlen()**.

### Список параметрів

`result`
Примірник [PgSql\Result](class.pgsql-result.md), що повертається
функціями [pg_query()](function.pg-query.md),
[pg_query_params()](function.pg-query-params.md) або
[pg_execute()](function.pg-execute.md) (серед іншого).

`row`
Номер рядка результату запиту з полем. Нумерація рядків
починається з нуля. Якщо аргумент не заданий, буде вибрано поточний рядок.

### Значення, що повертаються

Довжина рядка під час виведення значення поля.

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

- [pg_field_size()](function.pg-field-size.md) - Повертає розмір
поля
