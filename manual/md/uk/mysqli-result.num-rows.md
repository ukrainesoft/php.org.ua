- [« mysqli_result::$lengths](mysqli-result.lengths.md)
- [mysqli_driver »](class.mysqli-driver.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Отримує кількість рядків у наборі результатів

# mysqli_result::$num_rows

# mysqli_num_rows

(PHP 5, PHP 7, PHP 8)

mysqli_result::$num_rows -- mysqli_num_rows — Отримує кількість рядків
у наборі результатів

### Опис

Об'єктно-орієнтований стиль

int\|string `$mysqli_result->num_rows`;

Процедурний стиль

**mysqli_num_rows**([mysqli_result](class.mysqli-result.md)
`$result`): int\|string

Повертає число рядів у результуючій вибірці.

Поведінка функції **mysqli_num_rows()** залежить від того, чи використовується
буферизована або не буферизована результуюча вибірка. Функція
повертає `0` для небуферизованих наборів результатів, якщо з сервера
не було отримано всі рядки.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Значення, що повертаються

Повертає ціле число (int), що становить кількість вибраних рядків.
Повертає `0` у небуферизованому режимі, якщо з сервера не були
отримано всі рядки.

> **Примітка**:
>
> Якщо кількість рядків більша, ніж **`PHP_INT_MAX`**, число буде
> повернутий як рядок (string).

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$result u003d $mysql BY Name");/* Отримання кількості рядків в набір результатів */$row_cnt u003d $result->num_rows;printf("Отримано %d рядків.
", $row_cnt);?> `

**Приклад #2 Процедурний стиль**

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$result u003d mysqli_query(  ");/* Отримання кількості рядків в наборі результатів */$row_cnt u003d mysqli_num_rows($result);printf("Отримано %d рядків.
", $row_cnt); `

Результат виконання даних прикладів:

Отримано 239 рядків.

### Примітки

> **Примітка**:
>
> На відміну від функції
> [mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md), у цієї функції
> немає варіанта в об'єктно-орієнтованому стилі. В
> Об'єктно-орієнтований стиль використовуйте метод читання.

### Дивіться також

- [mysqli_affected_rows()](mysqli.affected-rows.md) - Отримує число
рядків, порушених попередньою операцією MySQL
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
- [mysqli_use_result()](mysqli.use-result.md) - Готує
результуючий набір на сервері для використання
- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md) - Повертає
кількість рядків, отриманих із сервера
