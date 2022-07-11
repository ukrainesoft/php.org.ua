- [«mysqli_stmt](class.mysqli-stmt.md)
- [mysqli_stmt::attr_get »](mysqli-stmt.attr-get.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає загальну кількість рядків, змінених, віддалених,
вставлених або зіставлених останнім виконаним виразом

# mysqli_stmt::$affected_rows

# mysqli_stmt_affected_rows

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$affected_rows -- mysqli_stmt_affected_rows — Повертає
загальна кількість рядків, змінених, віддалених, вставлених або
зіставлених останнім виконаним виразом

### Опис

Об'єктно-орієнтований стиль

int\|string `$mysqli_stmt->affected_rows`;

Процедурний стиль

**mysqli_stmt_affected_rows**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): int\|string

Повертає кількість рядків, змінених запитом `INSERT`, `UPDATE` або
`DELETE`. Працює аналогічно
[mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md) для виразів
`SELECT`.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Ціле число більше за нуль вказує кількість порушених або вилучених
рядків. Нуль означає, що записи для оператора `UPDATE` не оновлювалися,
жоден рядок не відповідав виразу `WHERE` у запиті або що ні
один запит ще не було виконано. `-1` означає, що під час виконання
запиту сталася помилка або що для запиту `SELECT`,
**mysqli_stmt_affected_rows()** була викликана до виклику
[mysqli_stmt_store_result()](mysqli-stmt.store-result.md).

> **Примітка**:
>
> Якщо кількість змінених рядків більша, ніж максимальне значення для
> цілого числа в PHP, то ця кількість буде повернена у вигляді
> строкового значення.

### Приклади

**Приклад #1 Приклад використання **mysqli_stmt_affected_rows()****

Об'єктно-орієнтований стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* створення| myCountry LIKE Country");$query u003d "INSERT INTO myCountry SELECT * FROM Country WHERE Code LIKE ?"; u003d 'A%';$stmt->bind_param("s", $code);/* виконання виразу */$stmt->execute();printf("Додано рядків: %d
", $stmt->affected_rows);?> `

Процедурний стиль

` <?phpmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* створення тимчасової TA Country");$query u003d "INSERT INTO myCountry SELECT * FROM Country WHERE Code LIKE ?"; %';mysqli_stmt_bind_param($stmt, "s", $code);/* виконання виразу */mysqli_stmt_execute($stmt);printf("Додано рядків: %d
", mysqli_stmt_affected_rows($stmt));?> `

Результат виконання даних прикладів:

Додано рядків: 17

### Дивіться також

- [mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md) - Повертає
кількість рядків, отриманих із сервера
- [mysqli_stmt_store_result()](mysqli-stmt.store-result.md) -
Зберігає набір результатів у внутрішньому буфері
