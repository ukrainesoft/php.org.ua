- [« mysqli_result::\_\_construct](mysqli-result.construct.md)
- [mysqli_result::data_seek »](mysqli-result.data-seek.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Отримує зміщення вказівника по відношенню до поточного поля

# mysqli_result::$current_field

# mysqli_field_tell

(PHP 5, PHP 7, PHP 8)

mysqli_result::$current_field -- mysqli_field_tell — Отримує зсув
вказівника по відношенню до поточного поля

### Опис

Об'єктно-орієнтований стиль

int `$mysqli_result->current_field`;

Процедурний стиль

**mysqli_field_tell**([mysqli_result](class.mysqli-result.md)
`$result`): int

Повертає позицію покажчика поля, що використовується під час останнього виклику
[mysqli_fetch_field()](mysqli-result.fetch-field.md). Це значення
може бути використано як аргумент для
[mysqli_field_seek()](mysqli-result.field-seek.md).

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Значення, що повертаються

Повертає поточне усунення вказівника поля.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання*/if (mysqli_connect_errno()) {                    я
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";if ($result u003d $mysqli-       поле для всех столбцов */    while ($finfo u003d $result->fetch_field()) {        /* Получить смещение указателя поля */        $currentfield u003d $result->current_field;        printf("Столбец %d:
", $currentfield);        printf("Ім'я:    %%s
", $finfo->name);         printf("Таблиця:    %s
", $finfo->table);         printf("Макс. довжина: %d
", $finfo->max_length);         printf("Прапори:    %d
", $finfo->flags);         printf("Тип:     %d

", $finfo->type);    }    $result->close();}/* Закрити з'єднання*/$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання */if (mysqli_connect_errno()) {     printf("Помилка|
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";if ($result u003d mysqli_    для всех столбцов */    while ($finfo u003d mysqli_fetch_field($result)) {        /* Получить смещение указателя поля */        $currentfield u003d mysqli_field_tell($result);        printf("Столбец %d:
", $currentfield);        printf("Ім'я:    %%s
", $finfo->name);         printf("Таблиця:    %s
", $finfo->table);         printf("Макс. довжина: %d
", $finfo->max_length);         printf("Прапори:    %d
", $finfo->flags);         printf("Тип:     %d

", $finfo->type);    }     mysqli_free_result($result);}/* Закрити з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Стовпець 1:
Ім'я: Name
Таблиця: Country
Макс. довжина: 11
Прапори: 1
Тип: 254

Стовпець 2:
Ім'я: SurfaceArea
Таблиця: Country
Макс. довжина: 10
Прапори: 32769
Тип: 4

### Дивіться також

- [mysqli_fetch_field()](mysqli-result.fetch-field.md) - Повертає
наступне поле результуючого набору
- [mysqli_field_seek()](mysqli-result.field-seek.md) - Встановити
вказівник поля на певне усунення
