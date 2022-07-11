- [« mysqli_result::fetch_array](mysqli-result.fetch-array.md)
- [mysqli_result::fetch_column »](mysqli-result.fetch-column.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Вибирає наступний рядок з набору результатів та поміщає його в
асоціативний масив

# mysqli_result::fetch_assoc

# mysqli_fetch_assoc

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_assoc -- mysqli_fetch_assoc -- Вибирає наступну
рядок з набору результатів та поміщає її в асоціативний масив

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_assoc**(): array\|null\|false

Процедурний стиль

**mysqli_fetch_assoc**([mysqli_result](class.mysqli-result.md)
`$result`): array\|null\|false

Вибирає один рядок даних із набору результатів та повертає її у вигляді
асоціативного масиву. Кожен наступний виклик цієї функції буде
повертати наступний рядок у наборі результатів або **`null`**, якщо
рядків більше немає.

Якщо у двох і більше стовпців у наборі результатів однакове ім'я,
останній стовпець матиме пріоритет і перезапише будь-які попередні
дані. Для доступу до кількох стовпців з однаковим ім'ям можна
використовувати функцію [mysqli_fetch_row()](mysqli-result.fetch-row.md)
для вибірки масиву з числовим індексом або у списку вибору SQL-запиту
можна використовувати псевдоніми, щоб встановити стовпцям різні імена.

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

### Значення, що повертаються

Повертає асоціативний масив, що представляє обраний рядок, де
кожна властивість представляє ім'я стовпця набору результатів, **`null`**,
якщо у наборі результатів більше немає рядків або **`false`** у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli_result::fetch_assoc()****

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d C| resultu003du003d $mysqli->query($query);/* витягання асоціативного масиву */while ($row u003d $result->fetch_assoc()) {    printf("%s (%s)
", $row["Name"], $row["CountryCode"]);} `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d SELECT u003d mysqli_query ($ mysqli, $ $ query);
", $row["Name"], $row["CountryCode"]);} `

Результатом виконання даних прикладів буде щось подібне:

Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Санта-Клара (USA)

**Приклад #2 Порівняння використання
[mysqli_result](class.mysqli-result.md)
[iterator](class.iterator.md) та **mysqli_result::fetch_assoc()****

[mysqli_result](class.mysqli-result.md) можна повторити за допомогою
[foreach] (control-structures.foreach.md). Результуючий набір завжди
повторюватиметься з першого рядка, незалежно від поточної позиції.

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d| / Використовуємо ітератори$result u003d $mysqli->query($query);foreach ($result as $row) {    printf("%s (%s)
", $row["Name"], $row["CountryCode"]);}echo "
u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
";// Не не використовуємо ітератори$result u003d $mysqli->query($query);while ($row u003d $result->fetch_assoc()) {    printf("%s (%s)
", $row["Name"], $row["CountryCode"]);} `

Результатом виконання цього прикладу буде щось подібне:

Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Санта-Клара (USA)

u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Санта-Клара (USA)

### Дивіться також

- [mysqli_fetch_array()](mysqli-result.fetch-array.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив, звичайний масив або в обидва
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
