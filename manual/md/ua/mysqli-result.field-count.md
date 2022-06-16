- [« mysqli_result::fetch_row](mysqli-result.fetch-row.md)
- [mysqli_result::field_seek »](mysqli-result.field-seek.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Отримує кількість полів у наборі результатів

# mysqli_result::$field_count

# mysqli_num_fields

(PHP 5, PHP 7, PHP 8)

mysqli_result::$field_count -- mysqli_num_fields — Отримує кількість
полів у наборі результатів

### Опис

Об'єктно-орієнтований стиль

int `$mysqli_result->field_count`;

Процедурний стиль

**mysqli_num_fields**([mysqli_result](class.mysqli-result.md)
`$result`): int

Повертає кількість полів у наборі результатів.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Значення, що повертаються

Ціле число (int), що становить кількість полів.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$result u003d $mysqli Population FROM City ORDER BYID LIMIT 1");/* Отримання|кількості полів в набір результатів */$field_cnt u003d $result->field_count;printf("Отримано %d 
", $field_cnt); `

**Приклад #2 Процедурний стиль**

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d Mysqli_connect("localhost", "my_user", "my_password", "world"); City ORDER BYIDID LIMIT 1");/* Отримання кількості полів в наборі результатів */$field_cnt u003d mysqli_num_fields($result);printf("Отримано %d полів.
", $field_cnt); `

Результат виконання даних прикладів:

Отримано 4 поля.

### Дивіться також

- [mysqli_fetch_field()](mysqli-result.fetch-field.md) - Повертає
наступне поле результуючого набору
