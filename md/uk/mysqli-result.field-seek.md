- [« mysqli_result::$field_count](mysqli-result.field-count.md)
- [mysqli_result::free »](mysqli-result.free.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Встановити вказівник поля на певне усунення

# mysqli_result::field_seek

# mysqli_field_seek

(PHP 5, PHP 7, PHP 8)

mysqli_result::field_seek -- mysqli_field_seek — Встановити покажчик
поля на певне усунення

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::field_seek**(int `$index`): bool

Процедурний стиль

**mysqli_field_seek**([mysqli_result](class.mysqli-result.md)
`$result`, int `$index`): bool

Встановлює вказівник поля на задане усунення. Наступний виклик
[mysqli_fetch_field()](mysqli-result.fetch-field.md) дозволить отримати
інформацію про стовпчик з позицією усунення.

> **Примітка**:
>
> Для пошуку з початку рядка необхідно встановити нульове значення
> усунення.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

`index`
Номер поля. Це значення має бути в наступному діапазоні: від `0` до
число полів - 1.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання*/if (mysqli_connect_errno()) {                    я
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";if ($result u003d $mysqli-       поле у другому стовпці */    $result->field_seek(1);    $finfo u003d $result->fetch_field();    printf("Ім'я:    %%s
", $finfo->name);    printf("Таблиця:   %%s
", $finfo->table);    printf("Макс. довжина: %d
", $finfo->max_length);    printf("Прапори:   %%d
", $finfo->flags);    printf("Тип:     %d

", $finfo->type);   $result->close();}/* Закрити з'єднання*/$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання */if (mysqli_connect_errno()) {     printf("Помилка|
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";if ($result u003d mysqli_   у другому стовпці */   mysqli_field_seek($result, 1);   $finfo u003d mysqli_fetch_field($result);    printf("Ім'я:     %
", $finfo->name);    printf("Таблиця:   %%s
", $finfo->table);    printf("Макс. довжина: %d
", $finfo->max_length);    printf("Прапори:   %%d
", $finfo->flags);    printf("Тип:     %d

", $finfo->type);   mysqli_free_result($result);}/* Закрити з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Ім'я: SurfaceArea
Таблиця: Country
Макс. довжина: 10
Прапори: 32769
Тип: 4

### Дивіться також

- [mysqli_fetch_field()](mysqli-result.fetch-field.md) - Повертає
наступне поле результуючого набору
