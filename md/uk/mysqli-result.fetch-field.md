- [«
mysqli_result::fetch_field_direct](mysqli-result.fetch-field-direct.md)
- [mysqli_result::fetch_fields »](mysqli-result.fetch-fields.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Повертає наступне поле результуючого набору

# mysqli_result::fetch_field

# mysqli_fetch_field

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_field -- mysqli_fetch_field -- Повертає наступне
поле результуючого набору

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_field**(): object\|false

Процедурний стиль

**mysqli_fetch_field**([mysqli_result](class.mysqli-result.md)
`$result`): object\|false

Повертає інформацію про один стовпчик результуючого набору у вигляді
об'єкт. Щоб отримати визначення всіх стовпців, просто запустіть цю
функцію багаторазово.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Значення, що повертаються

Повертає об'єкт, що містить визначення поля або **`false`**, якщо
стовпці в результуючій таблиці закінчилися.

| Властивість Опис |
|------------|------------------------------------ -----------------------------------|
| name | Ім'я шпальти |
| orgname | Вихідне ім'я стовпця, якщо він є псевдонім |
| table | Ім'я таблиці, якою належить стовпець (якщо не обчислено) |
| orgtable | Початкове ім'я таблиці, якщо є псевдонім |
| def | Зарезервовано для стандартного значення, на даний момент завжди "" |
| db | Ім'я бази |
| Каталог | Ім'я каталогу завжди "def" |
| max_length | Максимальна ширина поля результуючого набору. |
| length | Ширина поля, як вона задана щодо таблиці. |
| charsetnr | Кількість наборів символів для поля. |
| flags | Ціле число, яке представляє бітові прапори для поля. |
| тип | Тип даних поля |
| decimals | Число знаків після коми (для цілих полів) |

**Властивості об'єкта**

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка підключення */if (mysqli_connect_errno()) {   єд
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";if ($result u003d $mysqli-  всіх стовпцях */    while ($finfo u003d $result->fetch_field()) {         printf("Ім'я:          %s
", $finfo->name);         printf("Таблиця:     %s
", $finfo->table);         printf("Макс. довжина: %d
", $finfo->max_length);         printf("Прапори:       %d
", $finfo->flags);         printf("Тип:         %d

", $finfo->type);    }    $result->close();}/* закриваємо підключення */$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка підключення */if (mysqli_connect_errno()) {    printf("Не 
", mysqli_connect_error());   exit();}$query u003d "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";if ($result u003d mysqli_   стовпцях */    while ($finfo u003d mysqli_fetch_field($result)) {         printf("Ім'я:          %s
", $finfo->name);         printf("Таблиця:     %s
", $finfo->table);         printf("Макс. довжина: %d
", $finfo->max_length);         printf("Прапори:       %d
", $finfo->flags);         printf("Тип:         %d

", $finfo->type);    }     mysqli_free_result($result);}/* закриваємо підключення */mysqli_close($link);?> `

Результат виконання даних прикладів:

Ім'я: Name
Таблиця: Country
Макс. довжина: 11
Прапори: 1
Тип: 254

Ім'я: SurfaceArea
Таблиця: Country
Макс. довжина: 10
Прапори: 32769
Тип: 4

### Дивіться також

- [mysqli_num_fields()](mysqli-result.field-count.md) - Отримує
кількість полів у наборі результатів
- [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md) -
Отримання метаданих конкретного поля
- [mysqli_fetch_fields()](mysqli-result.fetch-fields.md) -
Повертає масив об'єктів, що становлять поля результуючого
набору
- [mysqli_field_seek()](mysqli-result.field-seek.md) - Встановити
вказівник поля на певне усунення
