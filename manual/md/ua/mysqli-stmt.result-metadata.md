- [« mysqli_stmt::reset](mysqli-stmt.reset.md)
- [mysqli_stmt::send_long_data »](mysqli-stmt.send-long-data.md)

- [PHP Manual](index.md)
- [mysqli_stmt](class.mysqli-stmt.md)
- Повертає метадані результуючої таблиці.
запиту

# mysqli_stmt::result_metadata

# mysqli_stmt_result_metadata

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::result_metadata -- mysqli_stmt_result_metadata -- Повертає
метадані результуючої таблиці запиту, що готується

### Опис

Об'єктно-орієнтований стиль

public **mysqli_stmt::result_metadata**():
[mysqli_result](class.mysqli-result.md)\|false

Процедурний стиль

**mysqli_stmt_result_metadata**([mysqli_stmt](class.mysqli-stmt.md)
`$statement`): [mysqli_result](class.mysqli-result.md)\|false

Якщо запит, переданий у [mysqli_prepare()](mysqli.prepare.md),
генерує результуючу таблицю, **mysqli_stmt_result_metadata()**
повертає об'єкт, за допомогою якого можна отримати опис цього
результуючого набору. Зокрема, можна отримати кількість полів та
опис кожного окремого поля.

> **Примітка**:
>
> Отриманий об'єктний покажчик можна передавати як аргумент у
> функції обробки метаданих результуючих таблиць, наприклад:
>
> - [mysqli_num_fields()](mysqli-result.field-count.md)
>
> - [mysqli_fetch_field()](mysqli-result.fetch-field.md)
>
> - [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md)
>
> - [mysqli_fetch_fields()](mysqli-result.fetch-fields.md)
>
> - [mysqli_field_count()](mysqli.field-count.md)
>
> - [mysqli_field_seek()](mysqli-result.field-seek.md)
>
> - [mysqli_field_tell()](mysqli-result.current-field.md)
>
> - [mysqli_free_result()](mysqli-result.free.md)

Після завершення роботи з цим об'єктом, пам'ять, яку він займає
звільнити. Зробити це можна, передавши об'єктний покажчик на функцію
[mysqli_free_result()](mysqli-result.free.md).

> **Примітка**:
>
> Результуючий набір, що повертається з
> **mysqli_stmt_result_metadata()** містить тільки метадані. В ньому
> не буде рядків вибірки. Результати запиту можна отримати за допомогою
> функції [mysqli_stmt_fetch()](mysqli-stmt.fetch.md).

### Список параметрів

`stmt`
Тільки для процедурного стилю: об'єкт
[mysqli_stmt](class.mysqli-stmt.md), отриманий за допомогою
[mysqli_stmt_init()](mysqli.stmt-init.md).

### Значення, що повертаються

Повертає об'єкт або **`false`** у разі помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "test");$mysqli->query("DROP TABLE IF EXISTS friends");$mysqli->query("CREATE TABLE friends (id int, name varchar(20))");$mysqli->query("INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");$stmt u003d $mysql >prepare("SELECT id, name FROM friends");$stmt->execute();/* отримуємо результуючий набір метаданих */$result u003d $stmt->result_metadata(); $field u003d $result->fetch_field();printf("Ім'я стовпця: %s
", $field->name);/* закриваємо результуючий набір */$result->close();/* закриваємо підключення */$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "test"); mysqli_query($link, "DROP TABLE IF EXISTS friends");mysqli_query($link, id int, name varchar(20))");mysqli_query($link, "INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");$stmt u003d mysqli_prepare($link, id, name FROM friends");mysqli_stmt_execute($stmt);/* отримуємо результуючий набір метаданих */$result u003d mysqli_stmt_result_metadata($stmt); printf("Ім'я стовпця:%s
", $field->name);/* закриваємо результуючий набір */mysqli_free_result($result);/* закриваємо підключення */mysqli_close($link);?> `

### Дивіться також

- [mysqli_prepare()](mysqli.prepare.md) - Підготовляє SQL
вираз до виконання
- [mysqli_free_result()](mysqli-result.free.md) - Звільняє
пам'ять, зайняту результатами запиту
