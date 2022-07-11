- [« mysqli::get_warnings](mysqli.get-warnings.md)
- [mysqli::init »](mysqli.init.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Витягує інформацію про останній виконаний запит

# mysqli::$info

# mysqli_info

(PHP 5, PHP 7, PHP 8)

mysqli::$info -- mysqli_info — Витягує інформацію про останнє
виконаному запиті

### Опис

Об'єктно-орієнтований стиль

?string `$mysqli->info`;

Процедурний стиль

**mysqli_info**([mysqli](class.mysqli.md) `$mysql`): ?string

Функція **mysqli_info()** повертає рядок з інформацією про останній
виконаний запит до бази даних. Опис рядка наведено нижче:

| Тип запиту | Приклад результуючого рядка |
|----------------------------------------|-------- --------------------------------------|
| INSERT INTO...SELECT... | Records: 100 Duplicates: 0 Warnings: 0 |
| INSERT INTO...VALUES (...),(...),(...) | Records: 3 Duplicates: 0 Warnings: 0 |
| LOAD DATA INFILE ... | Records: 1 Deleted: 0 Skipped: 0 Warnings: 0 |
| ALTER TABLE ... | Records: 3 Duplicates: 0 Warnings: 0 |
| UPDATE... | Rows matched: 40 Changed: 40 Warnings: 0 |

**Можливі значення, що повертаються mysqli_info**

> **Примітка**:
>
> Запити, які не потрапляють до списку, не підтримуються. В
> таких ситуаціях **mysqli_info()** поверне порожній рядок.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Рядок символів представляє додаткову інформацію про останнє
запущений запит.

### Приклади

**Приклад #1 Приклад використання `$mysqli->info`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {   ключ|
", mysqli_connect_error());   exit();}$mysqli->query("CREATE TEMPORARY TABLE t1 LIKE City");/* INSERT INTO ... SELECT */$mysqli-> FROM City ORDER BYID LIMIT 150");printf("%s
", $mysqli->info);/* закриваємо з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
"mysqli_connect_error()); mysqli_query($link,"CREATE TEMPORARY TABLE t1 LIKE City");/* INSERT INTO ...... SELECT */mysqli_ | ORDER BY ID LIMIT 150");printf("%s
", mysqli_info($link));/* закриваємо з'єднання**/mysqli_close($link);?> `

Результат виконання даних прикладів:

Records: 150 Duplicates: 0 Warnings: 0

### Дивіться також

- [mysqli_affected_rows()](mysqli.affected-rows.md) - Отримує число
рядків, порушених попередньою операцією MySQL
- [mysqli_warning_count()](mysqli.warning-count.md) - Повертає
кількість попереджень із останнього запиту заданого
підключення
- [mysqli_num_rows()](mysqli-result.num-rows.md) - Отримує
кількість рядків у наборі результатів
