- [« mysqli_stmt::next_result](mysqli-stmt.next-result.md)
- [mysqli_stmt::$param_count »](mysqli-stmt.param-count.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає кількість рядків, отриманих із сервера

# mysqli_stmt::$num_rows

# mysqli_stmt::num_rows

# mysqli_stmt_num_rows

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$num_rows -- mysqli_stmt::num_rows -- mysqli_stmt_num_rows
— Повертає кількість рядків, отриманих із сервера

### Опис

Об'єктно-орієнтований стиль

int\|string `$mysqli_stmt->num_rows`;

public **mysqli_stmt::num_rows**(): int\|string

Процедурний стиль

**mysqli_stmt_num_rows**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): int\|string

Повертає кількість рядків, поміщених у буфер у виразі. Функція
буде працювати лише після виклику
[mysqli_stmt_store_result()](mysqli-stmt.store-result.md) для
буферизації всього набору результатів у дескрипторі оператора.

Функція повертає `0`, якщо з сервера не було отримано всі рядки.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Ціле число (int), що становить кількість буферизованих рядків.
Повертає `0` у небуферизованому режимі, якщо з сервера не були
отримано всі рядки.

> **Примітка**:
>
> Якщо кількість рядків більша, ніж **`PHP_INT_MAX`**, число буде
> повернутий як рядок (string).

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");$query u003d| $stmtu003du003d$mysqli->prepare($query);$stmt->execute();/* збереження результату у внутрішньому буфері */$stmt->store_result();printf("Число рядків: %d.
", $stmt->num_rows); `

**Приклад #2 Процедурний стиль**

`<?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");$query u003d "SELECT Name| stmtu003du003dmysqli_prepare($link, $query);mysqli_stmt_execute($stmt);/* збереження результату во внутрішньому буфері */mysqli_stmt_store_result($stmt);
", mysqli_stmt_num_rows($stmt)); `

Результат виконання даних прикладів:

Кількість рядків: 20.

### Дивіться також

- [mysqli_stmt_store_result()](mysqli-stmt.store-result.md) -
Зберігає набір результатів у внутрішньому буфері
- [mysqli_stmt_affected_rows()](mysqli-stmt.affected-rows.md) -
Повертає загальну кількість рядків, змінених, віддалених,
вставлених або зіставлених останнім виконаним виразом
- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
