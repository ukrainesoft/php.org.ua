- [« mysqli_stmt::\_\_construct](mysqli-stmt.construct.md)
- [mysqli_stmt::$errno »](mysqli-stmt.errno.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Перехід до заданого рядка в результуючому наборі

# mysqli_stmt::data_seek

# mysqli_stmt_data_seek

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::data_seek -- mysqli_stmt_data_seek — Перехід до заданої
рядку в результуючому наборі

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::data_seek**(int `$offset`): void

Процедурний стиль

**mysqli_stmt_data_seek**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`, int `$offset`): void

Переміщує покажчик на заданий рядок у результуючому наборі.

[mysqli_stmt_store_result()](mysqli-stmt.store-result.md) must be
called prior to **mysqli_stmt_data_seek()**.

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

`offset`
Значення має бути в діапазоні від 0 до числа рядків мінус один (0.
[mysqli_stmt_num_rows()](mysqli-stmt.num-rows.md) - 1).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php/* відкриваємо з'єднання */$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno(  вдалося підключитися: %s
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, CountryCode FROM City ORDER BY Name";if ($stmt u003d $mysqli->prepare($                       | stmt->execute();    /* привязываем переменные к результату запроса */    $stmt->bind_result($name, $code);    /* помещаем результаты запроса в переменные */    $stmt->store_result();    /* переходим к рядку 400 результуючої таблиці */   $stmt->data_seek(399);    /* витягуємо дані */    $stmt->fetch();  |
", $name, $code);    /* закриваємо запрос */   $stmt->close();}/* закриваємо з'єднання*/$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

`<?php/* відкриваємо з'єднання */$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno())          підключитися: %s
", mysqli_connect_error());    exit();}$query u003d "SELECT Name, CountryCode FROM City ORDER BY Name";if ($stmt u003d mysqli_prepare($link, $query)) {    /* выполняем запрос */    mysqli_stmt_execute( $stmt);    /* привязываем переменные к результату запроса */    mysqli_stmt_bind_result($stmt, $name, $code);    /* помещаем результаты запроса в переменные */    mysqli_stmt_store_result($stmt);    /* переходим к строке 400 результирующей таблицы */ mysqli_stmt_data_seek($stmt, 399);    /* витягуємо */    mysqli_stmt_fetch($stmt);    printf ("Місто|
", $name, $code);    /* закриваємо запит */    mysqli_stmt_close($stmt);}/* закриваємо з'єднання*/mysqli_close($link);?> ``

Результат виконання даних прикладів:

Місто: Benin City Код країни: NGA

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
