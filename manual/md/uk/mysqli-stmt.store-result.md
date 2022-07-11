- [« mysqli_stmt::$sqlstate](mysqli-stmt.sqlstate.md)
- [mysqli_result »](class.mysqli-result.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Зберігає набір результатів у внутрішньому буфері

# mysqli_stmt::store_result

# mysqli_stmt_store_result

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::store_result -- mysqli_stmt_store_result -- Зберігає набір
результатів у внутрішньому буфері

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::store_result**(): bool

Процедурний стиль

**mysqli_stmt_store_result**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): bool

Функцію слід викликати для запитів, які успішно створюють набір
результатів (наприклад, `SELECT, SHOW, DESCRIBE, EXPLAIN`), тільки якщо
необхідно буферизувати у PHP повний набір результатів. Кожен
наступний виклик [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) буде
повертати буферизовані дані.

> **Примітка**:
>
> В інших випадках викликати **mysqli_stmt_store_result()** немає
> потреби. Але якщо такий виклик здійснено, нічого страшного не
> трапиться, це не вплине на продуктивність та цілісність даних.
> Щоб переконатися, що запит повернув результуючий набір, можна
> скористатися функцією
> [mysqli_stmt_result_metadata()](mysqli-stmt.result-metadata.md),
> яка у разі поверне **`false`**.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d| $stmtu003du003d$mysqli->prepare($query);$stmt->execute();/* збереження результату у внутрішньому буфері */$stmt->store_result();printf("Число рядків: %d.
", $stmt->num_rows); `

**Приклад #2 Процедурний стиль**

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "SELECT Name| stmtu003du003dmysqli_prepare($link, $query);mysqli_stmt_execute($stmt);/* збереження результату во внутрішньому буфері */mysqli_stmt_store_result($stmt);
", mysqli_stmt_num_rows($stmt));?> `

Результат виконання даних прикладів:

Кількість рядків: 20.

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_stmt_result_metadata()](mysqli-stmt.result-metadata.md) -
Повертає метадані результуючої таблиці.
запиту
- [mysqli_stmt_fetch()](mysqli-stmt.fetch.md) - Зв'язує результати
підготовленого виразу зі змінними
