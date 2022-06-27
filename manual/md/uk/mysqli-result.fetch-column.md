- [« mysqli_result::fetch_assoc](mysqli-result.fetch-assoc.md)
- [mysqli_result::fetch_field_direct
»](mysqli-result.fetch-field-direct.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- отримує один стовпець з наступного рядка набору результатів

# mysqli_result::fetch_column

# mysqli_fetch_column

(PHP 8 \>u003d 8.1.0)

mysqli_result::fetch_column -- mysqli_fetch_column — Отримує один
стовпець з наступного рядка набору результатів

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_column**(int `$column` u003d 0):
null\|int\|float\|string\|false

Процедурний стиль

**mysqli_fetch_column**([mysqli_result](class.mysqli-result.md)
`$result`, int `$column` u003d 0): null\|int\|float\|string\|false

Вибирає один рядок даних із набору результатів та повертає стовпець з
вказаним індексом, починаючи з 0. Кожен наступний виклик цієї функції
буде повертати значення з наступного рядка в наборі результатів або
**`false`**, якщо рядків більше немає.

> **Примітка**: Ця функція встановлює NULL-поля у значення
> **`null`** PHP.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

`column`
Номер стовпця, починаючи з 0, який потрібно витягти з рядка. Якщо
значення не вказано, буде повернено перший стовпець.

### Значення, що повертаються

Повертає один стовпець з наступного рядка набору результатів або
**`false`**, якщо рядків більше немає.

**Увага**

Неможливо повернути інший стовпець з того ж рядка, якщо ви використовуєте
цю функцію для отримання даних.

### Приклади

**Приклад #1 Приклад використання **mysqli_result::fetch_column()****

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d| ;$result u003d $mysqli->query($query);/* отримання значення з другого стовпця */while ($Name u003d $result->fetch_column(1)) {    printf("%s
", $Name);} `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "S C  $result u003d mysqli_query($mysqli, $query);/* отримання значення з другого стовпця */while ($Name u003d mysqli_fetch_column($result, 1)) {    printf("
", $Name);} `

Результатом виконання даних прикладів буде щось подібне:

Rafah
Nablus
Jabaliya
Hebron
Khan Yunis

### Дивіться також

- [mysqli_fetch_all()](mysqli-result.fetch-all.md) - Вибирає все
рядки з результуючого набору та поміщає їх в асоціативний
масив, звичайний масив або в обидва
- [mysqli_fetch_array()](mysqli-result.fetch-array.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив, звичайний масив або в обидва
- [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив
- [mysqli_fetch_object()](mysqli-result.fetch-object.md) - Вибирає
наступний рядок із набору результатів у вигляді об'єкта
- [mysqli_fetch_row()](mysqli-result.fetch-row.md) - Вибирає
наступний рядок з набору результатів та поміщає її у звичайний
масив
- [mysqli_data_seek()](mysqli-result.data-seek.md) - Переміщує
покажчик результату на вибраний рядок
