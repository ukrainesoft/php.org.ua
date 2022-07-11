- [« mysqli_stmt::$num_rows](mysqli-stmt.num-rows.md)
- [mysqli_stmt::prepare »](mysqli-stmt.prepare.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає кількість параметрів у запиті

# mysqli_stmt::$param_count

# mysqli_stmt_param_count

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$param_count -- mysqli_stmt_param_count -- Повертає
кількість параметрів у запиті

### Опис

Об'єктно-орієнтований стиль

int `$mysqli_stmt->param_count`;

Процедурний стиль

**mysqli_stmt_param_count**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): int

Повертає кількість позначок параметрів у підготовленому запиті.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає ціле число, що дорівнює кількості параметрів.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання|
"|, mysqli_connect_error()); ("У запиті | %d" позначок.
", $marker);   /* закриваємо запит */    $stmt->close();}/* закриваємо з'єднання*/$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno()) {     printf("Не 
"|, mysqli_connect_error()); "У запиті %d меток.
", $marker);   /* закриваємо запит */    mysqli_stmt_close($stmt);}/* закриваємо з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

У запиті 2 міток.

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
