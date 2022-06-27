- [« mysqli_stmt::free_result](mysqli-stmt.free-result.md)
- [mysqli_stmt::get_warnings »](mysqli-stmt.get-warnings.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Отримує результат із підготовленого запиту у вигляді об'єкту
mysqli_result

# mysqli_stmt::get_result

# mysqli_stmt_get_result

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli_stmt::get_result -- mysqli_stmt_get_result — Отримує результат
із підготовленого запиту у вигляді об'єкту
[mysqli_result](class.mysqli-result.md)

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::get_result**():
[mysqli_result](class.mysqli-result.md)\|false

Процедурний стиль

**mysqli_stmt_get_result**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): [mysqli_result](class.mysqli-result.md)\|false

Витягує набір результатів із підготовленого запиту як об'єкта
[mysqli_result](class.mysqli-result.md). Дані будуть завантажені з
сервера MySQL у PHP. Метод слід викликати лише для запитів, які
виробляють набір результатів.

> **Примітка**:
>
> Доступно лише з модулем [mysqlnd](book.mysqlnd.md).

> **Примітка**:
>
> Цю функцію не можна використовувати разом з
> [mysqli_stmt_store_result()](mysqli-stmt.store-result.md). Обидві ці
> функції отримують повний набір результатів із сервера MySQL.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає **`false`** у разі виникнення помилки. Для успішних
запитів, які виробляють набір результатів, таких як
`SELECT, SHOW, DESCRIBE` або `EXPLAIN` **mysqli_stmt_get_result()**
поверне об'єкт [mysqli_result](class.mysqli-result.md). Для інших
успішних запитів **mysqli_stmt_get_result()** поверне **`false`**.
Функцію [mysqli_stmt_errno()](mysqli-stmt.errno.md) можна
використовувати, щоб розрізняти дві причини появи **`false`**; через
помилки до PHP 7.4.13 для цієї мети доводилося використовувати
[mysqli_errno()](mysqli.errno.md).

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d " BY Name LIMIT 1";$stmt u003d $mysqli->prepare($query);$stmt->bind_param("s", $continent);$continentList u003d array('Europe', 'Africa', 'Asia', 'North America');foreach ($continentList as $continent) {   $stmt->execute(); $resultu003du003d$stmt->get_result(); while($row u003d $result->fetch_array(MYSQLI_NUM)) {        foreach ($row as $r) {             print| }         print "
";    }} `

**Приклад #2 Процедурний стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "SELECT Name Name LIMIT 1";$stmtu003du003dmysqli_prepare($link, $query);mysqli_stmt_bind_param($stmt, "s", $continent);$continentListu003d array('Europe', 'Africa', ');foreach ($continentList as $continent) {    mysqli_stmt_execute($stmt); $result u003d mysqli_stmt_get_result($stmt); while($row u003d mysqli_fetch_array($result, MYSQLI_NUM)) {       foreach ($row as $r) {            | }         print "
";    }} `

Результатом виконання даних прикладів буде щось подібне:

Albania 3401200 Європа
Algeria 31471000 Africa
Afghanistan 22720000 Asia
Anguilla 8000 North America

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_result_metadata()](mysqli-stmt.result-metadata.md) -
Повертає метадані результуючої таблиці.
запиту
- [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) - Зв'язує результати
підготовленого виразу зі змінними
- [mysqli_fetch_array()](mysqli-result.fetch-array.md) - Вибирає
наступний рядок з набору результатів та поміщає її в асоціативний
масив, звичайний масив або в обидва
- [mysqli_stmt_store_result()](mysqli-stmt.store-result.md) -
Зберігає набір результатів у внутрішньому буфері
