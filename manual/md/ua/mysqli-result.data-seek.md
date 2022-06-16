- [« mysqli_result::$current_field](mysqli-result.current-field.md)
- [mysqli_result::fetch_all »](mysqli-result.fetch-all.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Переміщує покажчик результату на вибраний рядок

# mysqli_result::data_seek

# mysqli_data_seek

(PHP 5, PHP 7, PHP 8)

mysqli_result::data_seek -- mysqli_data_seek — Переміщує покажчик
результату на вибраний рядок

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::data_seek**(int `$offset`): bool

Процедурний стиль

**mysqli_data_seek**([mysqli_result](class.mysqli-result.md)
`$result`, int `$offset`): bool

Функція **mysqli_data_seek()** переміщує покажчик в результаті на
рядок, вказаний у параметрі `offset`.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

`offset`
Зміщення. Повинно бути між нулем та числом рядків у результаті мінус один
(0..[mysqli_num_rows()](mysqli-result.num-rows.md) - 1).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::data_seek()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d "C u003d $mysqli->query($query);/* Перехід до рядку 401 */$result->data_seek(400);/* Отримання рядки */$row u003d $result->fetch_row();printf("Місто: %s  Код країни: %s
", $row[0], $row[1]);

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "SELECT Name| mysqli_query($link, $query);/* Перехід до рядку 401 */mysqli_data_seek($result, 400);/* Отримання рядки */$row u003d mysqli_fetch_row($result); %s
", $row[0], $row[1]);

Результат виконання даних прикладів:

Місто: Benin City Код країни: NGA

**Приклад #2 Регулювання вказівника результату під час переміщення**

Функція може бути корисною при переміщенні по набору результатів для
накладення настроюваного порядку або перемотування набору результатів при
багаторазовому повторенні.

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d " ";$result u003d $mysqli->query($query);/* Переміщення по набору результатів в зворотному порядку */for ($row_no u003d $result->num_rows - 1; $row_no | {   $result->data_seek($row_no); /* Отримання рядки */    $row u003d $result->fetch_row(); printf("Місто: %s  Код країни: %s
", $row[0], $row[1]);}/* Скидання вказівника на початок набору результатів */$result->data_seek(0);print "
";/* Знову переміщення за тому ж набору результатів */while ($row u003d $result->fetch_row()) {    printf("Місто: %s  Код країни: |
", $row[0], $row[1]);} `

Результат виконання даних прикладів:

Місто: Acmbaro Код країни: MEX
Місто: Abuja Код країни: NGA
Місто: Abu Dhabi Код країни: ARE
Місто: Abottabad Код країни: PAK

Місто: Abottabad Код країни: PAK
Місто: Abu Dhabi Код країни: ARE
Місто: Abuja Код країни: NGA
Місто: Acmbaro Код країни: MEX

### Примітки

> **Примітка**:
>
> Функція може бути використана лише з буферизованими результатами,
> які можна отримати за допомогою функцій
> [mysqli_store_result()](mysqli.store-result.md) або
> [mysqli_query()](mysqli.query.md).

### Дивіться також

- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_fetch_row()](mysqli-result.fetch-row.md) - Вибирає
наступний рядок з набору результатів та поміщає її у звичайний
масив
- [mysqli_fetch_array()](mysqli-result.fetch-array.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив, звичайний масив або в обидва
- [mysqli_fetch_assoc()](mysqli-result.fetch-assoc.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив
- [mysqli_fetch_object()](mysqli-result.fetch-object.md) - Вибирає
наступний рядок із набору результатів у вигляді об'єкта
- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_num_rows()](mysqli-result.num-rows.md) - Отримує
кількість рядків у наборі результатів
