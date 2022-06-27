- [« mysqli_result::fetch_all](mysqli-result.fetch-all.md)
- [mysqli_result::fetch_assoc »](mysqli-result.fetch-assoc.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Вибирає наступний рядок з набору результатів та поміщає його в
асоціативний масив, звичайний масив або обидва

# mysqli_result::fetch_array

# mysqli_fetch_array

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_array -- mysqli_fetch_array -- Вибирає наступну
рядок з набору результатів і поміщає їх у асоціативний масив,
звичайний масив або в обидва

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_array**(int `$mode` u003d **`MYSQLI_BOTH`**):
array\|null\|false

Процедурний стиль

**mysqli_fetch_array**([mysqli_result](class.mysqli-result.md)
`$result`, int `$mode` u003d **`MYSQLI_BOTH`**): array\|null\|false

Вибирає один рядок даних із набору результатів та повертає її у вигляді
масиву. Кожен наступний виклик цієї функції повертатиметься
наступний рядок у наборі результатів або **`null`**, якщо рядків більше
ні.

Крім зберігання даних у числових індексах масиву результатів, функція
також може зберігати дані в асоціативних індексах, використовуючи імена
полів набору результатів як ключі.

Якщо два і більше стовпця результату мають однакове ім'я, то останній
стовпець матиме пріоритет і перезапише будь-які попередні дані. В
таких ситуаціях для доступу до даних всіх стовпців з однаковими іменами
краще користуватися звичайними масивами, індексованими номерами
стовпців.

> **Примітка**: Імена полів, що повертаються цією функцією,
> *залежними від регістру*.

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

`mode`
Цей необов'язковий параметр набуває значення константи, яка
вказує на тип масиву, який потрібно помістити дані.
Можливі значення параметра: **`MYSQLI_ASSOC`**, **`MYSQLI_NUM`** або
**`MYSQLI_BOTH`**.

При використанні константи **`MYSQLI_ASSOC`** функція поводитиметься
ідентично [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md), а при
**`MYSQLI_NUM`** ідентичні функції
[mysqli_fetch_row()](mysqli-result.fetch-row.md). При завданні
**`MYSQLI_BOTH`** функція створить один масив, що включає атрибути обох
варіантів.

### Значення, що повертаються

Повертає масив, що представляє обраний рядок, **`null`**, якщо у
наборі результатів більше немає рядків або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli_result::fetch_array()****

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d| | $result u003d $mysqli->query($query);/* числовий масив */$row u003d $result->fetch_array(MYSQLI_NUM);printf("%s (%s)
", $row[0], $row[1]);/* асоціативний масив */$row u003d $result->fetch_array(MYSQLI_ASSOC);printf("%s (%s)
", $row["Name"], $row["CountryCode"]);/* асоціативний і числової масиви */$row u003d $result->fetch_array(MYSQLI_BOTH);printf("%s (%s)
", $row[0], $row["CountryCode"]);

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "SELECT result u003d mysqli_query($mysqli, $query);/* числовий масив */$row u003d mysqli_fetch_array($result, MYSQLI_NUM);printf("%s (%s)
", $row[0], $row[1]);/* асоціативний масив */$row u003d mysqli_fetch_array($result, MYSQLI_ASSOC);printf("%s (%s)
", $row["Name"], $row["CountryCode"]);/* асоціативний і числової масиви */$row u003d mysqli_fetch_array($result, MYSQLI_BOTH);printf("%s (%s)
", $row[0], $row["CountryCode"]);

Результат виконання даних прикладів:

Kabul (AFG)
Кандахар (AFG)
Herat (AFG)

### Дивіться також

- [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив
- [mysqli_fetch_column()](mysqli-result.fetch-column.md) - Отримує
один стовпець з наступного рядка набору результатів
- [mysqli_fetch_row()](mysqli-result.fetch-row.md) - Вибирає
наступний рядок з набору результатів та поміщає її у звичайний
масив
- [mysqli_fetch_object()](mysqli-result.fetch-object.md) - Вибирає
наступний рядок із набору результатів у вигляді об'єкта
- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_data_seek()](mysqli-result.data-seek.md) - Переміщує
покажчик результату на вибраний рядок
