- [« mysqli_result::fetch_field](mysqli-result.fetch-field.md)
- [mysqli_result::fetch_object »](mysqli-result.fetch-object.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Повертає масив об'єктів, що становлять поля результуючого
набору

# mysqli_result::fetch_fields

# mysqli_fetch_fields

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_fields -- mysqli_fetch_fields -- Повертає масив
об'єктів, що представляють поля результуючого набору

### Опис

Об'єктно-орієнтований стиль

public **mysqli_result::fetch_fields**(): array

Процедурний стиль

**mysqli_fetch_fields**([mysqli_result](class.mysqli-result.md)
`$result`): array

Ця функція служить для тих же цілей, що й
[mysqli_fetch_field()](mysqli-result.fetch-field.md), з тієї лише
різницею, що повертає не один об'єкт для стовпця, а масив таких
об'єктів.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Значення, що повертаються

Повертає масив об'єктів, що містять метадані полів.

| Властивість Опис |
|------------|------------------------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------------------|
| name | Ім'я шпальти |
| orgname | Вихідне ім'я стовпця, якщо він є псевдонім |
| table | Ім'я таблиці, якою належить стовпець (якщо не обчислено) |
| orgtable | Початкове ім'я таблиці, якщо є псевдонім |
| max_length | Максимальна ширина поля результуючого набору. |
| length | Довжина поля в байтах, як вона задана щодо таблиці. Зверніть увагу, що дана величина (в байтах) може відрізнятися від величини символів, зазначеної у визначенні поля таблиці, так як в різних кодуваннях один символ може записуватися кількома байтами. Наприклад, набір символів utf8 має 3 байти на символ, таким чином поле VARCHAR(10) у кодуванні UTF-8 поверне довжину 30 байтів u003d 10 символів. один символ займає один байт. |
| charsetnr | Числовий ідентифікатор кодування. |
| flags | Ціле число, яке представляє бітові прапори для поля. |
| тип | Тип поля даних |
| decimals | Число знаків після коми (для цілих полів) |

**Властивості об'єкта**

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("127.0.0.1", "root", "foofoo", "sakila");/* Перевіряємо з'єднання*/if ($mysqli->connect_errno) { %s
", $mysqli->connect_error);   exit();}foreach (array('latin1', 'utf8') as $charset) {    // Встановлюємо котирування для| ;   $query u003d "SELECT actor_id, last_name from actor ORDER BY actor_id";   echo "u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
";    echo "Character Set: $charset
";   echo "u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
";    if ($result u003d $mysqli->query($query)) {        /* Читаем информацию по всем столбцам */        $finfo u003d $result->fetch_fields();        foreach ($finfo as $val) {            printf(" Name:%%s
",   $val->name);           |
",   $val->table);             printf("Max. Len:  %d
",   $val->max_length);             printf("Length:   %%d
",   $val->length);             printf("charsetnr:%d
",   $val->charsetnr);           |
",  $val->flags);             printf("Type:     %d

", $val->type);        }}$       $result->free();    }}$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("127.0.0.1", "my_user", "my_password", "sakila");/* Перевіряємо з'єднання|*/if (mysqli_connect_errno()) { s
", mysqli_connect_error());    exit();}foreach (array('latin1', 'utf8') as $charset) {    // Устанавливаем кодировку для демонстрации её влияния на некоторые    mysqli_set_charset($link, $charset);    $query u003d "SELECT actor_id, last_name from actor ORDER BY actor_id";   echo "u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
";    echo "Character Set: $charset
";   echo "u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
";    if ($result u003d mysqli_query($link, $query)) {        /* Читаем информацию по всем столбцам */        $finfo u003d mysqli_fetch_fields($result);        foreach ($finfo as $val) {            printf("Name:      % s
",   $val->name);           |
",   $val->table);             printf("Max. Len:  %d
",   $val->max_length);             printf("Length:   %%d
",   $val->length);             printf("charsetnr:%d
",   $val->charsetnr);           |
",  $val->flags);             printf("Type:     %d

", $val->type); |       }}         mysqli_free_result($result);    }}mysqli_close($link);?> `

Результат виконання даних прикладів:

u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
Character Set: latin1
u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
Name: actor_id
Table: actor
Max. Len: 3
Length: 5
charsetnr: 63
Flags: 49699
Тип: 2

Name: last_name
Table: actor
Max. Len: 12
Length: 45
charsetnr: 8
Flags: 20489
Тип: 253

u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
Character Set: utf8
u003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003du003d
Name: actor_id
Table: actor
Max. Len: 3
Length: 5
charsetnr: 63
Flags: 49699
Тип: 2

Name: last_name
Table: actor
Max. Len: 12
Length: 135
charsetnr: 33
Flags: 20489

### Дивіться також

- [mysqli_num_fields()](mysqli-result.field-count.md) - Отримує
кількість полів у наборі результатів
- [mysqli_fetch_field_direct()](mysqli-result.fetch-field-direct.md) -
Отримання метаданих конкретного поля
- [mysqli_fetch_field()](mysqli-result.fetch-field.md) - Повертає
наступне поле результуючого набору
