- [« mysqli_result::fetch_object](mysqli-result.fetch-object.md)
- [mysqli_result::$field_count »](mysqli-result.field-count.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Вибирає наступний рядок з набору результатів та поміщає його в
звичайний масив

# mysqli_result::fetch_row

# mysqli_fetch_row

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_row -- mysqli_fetch_row — Вибирає наступний рядок
з набору результатів і поміщає їх у звичайний масив

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_row**(): array\|null\|false

Процедурний стиль

**mysqli_fetch_row**([mysqli_result](class.mysqli-result.md)
`$result`): array\|null\|false

Вибирає один рядок даних із результуючого набору та повертає її в
вигляді масиву, в якому індекси елементів відповідають номерам стовпців
(починаючи з 0). Кожен наступний виклик функції повертатиме масив
з даними наступного рядка набору або **`null`**, якщо рядки
закінчилися.

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

### Значення, що повертаються

Повертає нумерований масив, що представляє обраний рядок,
**`null`**, якщо в наборі результатів більше немає рядків або **`false`** в
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli_result::fetch_row()****

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d C| resultu003du003d $mysqli->query($query);/* отримання масиву об'єктів */while ($row u003d $result->fetch_row()) {    printf("%s (%s)
", $row[0], $row[1]);} `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d SELECT u003d mysqli_query($mysqli, $query);/* отримання асоціативного масиву */while ($row u003d mysqli_fetch_row($result)) {    printf("%s (%s)
", $row[0], $row[1]);} `

Результат виконання даних прикладів:

Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Санта-Клара (USA)

### Дивіться також

- [mysqli_fetch_array()](mysqli-result.fetch-array.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив, звичайний масив або в обидва
- [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив
- [mysqli_fetch_column()](mysqli-result.fetch-column.md) - Отримує
один стовпець з наступного рядка набору результатів
- [mysqli_fetch_object()](mysqli-result.fetch-object.md) - Вибирає
наступний рядок із набору результатів у вигляді об'єкта
- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_data_seek()](mysqli-result.data-seek.md) - Переміщує
покажчик результату на вибраний рядок
