- [« mysqli_result::data_seek](mysqli-result.data-seek.md)
- [mysqli_result::fetch_array »](mysqli-result.fetch-array.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Вибирає всі рядки з результуючого набору та поміщає їх у
асоціативний масив, звичайний масив або обидва

# mysqli_result::fetch_all

# mysqli_fetch_all

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli_result::fetch_all -- mysqli_fetch_all — Вибирає всі рядки з
результуючого набору та поміщає їх в асоціативний масив, звичайний
масив або в обидва

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_all**(int `$mode` u003d **`MYSQLI_NUM`**):
array

Процедурний стиль

**mysqli_fetch_all**([mysqli_result](class.mysqli-result.md)
`$result`, int `$mode` u003d **`MYSQLI_NUM`**): array

Повертає двовимірний масив всіх рядків результатів у вигляді асоціативного
масиву, числового масиву або обох.

> **Примітка**:
>
> До PHP 8.1.0, функція доступна лише з [mysqlnd](book.mysqlnd.md).

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

### Значення, що повертаються

Повертає масив, що містить асоціативні або звичайні масиви з даними
результуючої таблиці.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ------------|
| 8.1.0 | Тепер також доступно при збиранні з libmysqlclient. |

### Приклади

**Приклад #1 Приклад використання **mysqli_result::fetch_all()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$result u003d $mysql BY ID LIMIT 3");$rows u003d $result->fetch_all(MYSQLI_ASSOC);foreach ($rows as $row) {    printf("%s (%s)
", $row["Name"], $row["CountryCode"]);} `

Процедурний стиль

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d mysqli_connect("localhost", "my_user", "my_password", "world");$result u003d mysqli_query  LIMIT 3");$rows u003d mysqli_fetch_all($result, MYSQLI_ASSOC);foreach ($rows as $row) {    printf("%s (%s)
", $row["Name"], $row["CountryCode"]);} `

Результат виконання даних прикладів:

Kabul (AFG)
Кандахар (AFG)
Herat (AFG)

### Дивіться також

- [mysqli_fetch_array()](mysqli-result.fetch-array.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив, звичайний масив або в обидва
- [mysqli_fetch_column()](mysqli-result.fetch-column.md) - Отримує
один стовпець з наступного рядка набору результатів
- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
