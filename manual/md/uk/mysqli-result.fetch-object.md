- [« mysqli_result::fetch_fields](mysqli-result.fetch-fields.md)
- [mysqli_result::fetch_row »](mysqli-result.fetch-row.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Вибирає наступний рядок із набору результатів у вигляді об'єкта

# mysqli_result::fetch_object

# mysqli_fetch_object

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_object -- mysqli_fetch_object -- Вибирає наступну
рядок із набору результатів у вигляді об'єкта

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_object**(string `$class` u003d "stdClass",
array `$constructor_args` u003d \[\]): object\|null\|false

Процедурний стиль

**mysqli_fetch_object**([mysqli_result](class.mysqli-result.md)
`$result`, string `$class` u003d "stdClass", array `$constructor_args` u003d
\[\]): object\|null\|false

Вибирає один рядок даних із набору результатів та повертає його як
об'єкт, де кожна властивість є ім'ям стовпця набору результатів.
Кожен наступний виклик цієї функції повертатиме наступний рядок
у наборі результатів або **`null`**, якщо рядків більше немає.

Якщо у двох і більше стовпців у наборі результатів однакове ім'я,
останній стовпець матиме пріоритет і перезапише будь-які попередні
дані. Для доступу до кількох стовпців з однаковим ім'ям можна
використовувати функцію [mysqli_fetch_row()](mysqli-result.fetch-row.md)
для вибірки масиву з числовим індексом або у списку вибору SQL-запиту
можна використовувати псевдоніми, щоб встановити стовпцям різні імена.

> **Примітка**: Функція встановлює значення властивостей об'єкта до
> виклик його конструктора.

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

`class`
Ім'я класу, об'єкт якого потрібно інстанцувати, встановити значення
його властивостей та повернути. Якщо параметр не заданий, буде повернено об'єкт
**stdClass**.

`constructor_args`
Необов'язковий масив (array) параметрів, які будуть передані
конструктору класу `class`.

### Значення, що повертаються

Повертає об'єкт, що представляє обраний рядок, де кожна властивість
представляє ім'я стовпця набору результатів, **`null`**, якщо у наборі
результатів більше немає рядків або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `constructor_args` тепер приймає `[]` для конструкторів без параметрів; раніше викидався виняток. |

### Приклади

**Приклад #1 Приклад використання **mysqli_result::fetch_object()****

Об'єктно-орієнтований стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d C| result u003d $mysqli->query($query);/* отримання масиву об'єктів */while ($obj u003d $result->fetch_object()) {    printf("%s (%s)
", $obj->Name, $obj->CountryCode);} `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "SELECT Name| u003d mysqli_query($link, $query);/* отримання асоціативного масиву */while ($obj u003d mysqli_fetch_object($result)) {    printf("%s (%s)
", $obj->Name, $obj->CountryCode);} `

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
- [mysqli_fetch_row()](mysqli-result.fetch-row.md) - Вибирає
наступний рядок з набору результатів та поміщає її у звичайний
масив
- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_data_seek()](mysqli-result.data-seek.md) - Переміщує
покажчик результату на вибраний рядок
