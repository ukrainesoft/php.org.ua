- [« mysqli::thread_safe](mysqli.thread-safe.md)
- [mysqli::$warning_count »](mysqli.warning-count.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Готує результуючий набір на сервері для використання

# mysqli::use_result

# mysqli_use_result

(PHP 5, PHP 7, PHP 8)

mysqli::use_result -- mysqli_use_result -- Готує результативний набір
на сервері для використання

### Опис

Об'єктно-орієнтований стиль

public **mysqli::use_result**():
[mysqli_result](class.mysqli-result.md)\|false

Процедурний стиль

**mysqli_use_result**([mysqli](class.mysqli.md) `$mysql`):
[mysqli_result](class.mysqli-result.md)\|false

Використовується для підготовки до використання результуючого набору
останнього запиту, запущеного функцією
[mysqli_real_query()](mysqli.real-query.md).

Щоб результати запиту стали доступними, після самого запиту необхідно
викликати або цю функцію, або
[mysqli_store_result()](mysqli.store-result.md). Також виклик
будь-який з них запобігатиме відмові наступних запитів на цьому ж
з'єднанні.

> **Примітка**:
>
> **mysqli_use_result()** не передає весь результуючий набір
> клієнта, отже неможливо скористатися функцією
> [mysqli_data_seek()](mysqli-result.data-seek.md), щоб переміщатися
> у ньому. Для цього потрібно скористатися функцією
> [mysqli_store_result()](mysqli.store-result.md).
> **mysqli_use_result()** не слід використовувати, якщо на стороні
> клієнта дані результуючого набору довго обробляються, оскільки
> це затримує роботу сервера та не дає іншим процесам оновлювати
> таблиці, дані з яких є в результативному наборі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає небуферизований об'єкт результату запиту або **`false`**
у разі помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::use_result()****

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {   ключ|
", mysqli_connect_error());   exit();}$query  u003d "SELECT CURRENT_USER();";$query .u003d "SELECT Name FROM City ORDER BY ID LIMIT | mysqli->multi_query($query)) {    do {        /* получаем первый результирующий набор */        if ($result u003d $mysqli->use_result()) {            while ($row u003d $result->fetch_row()) {                printf( "%s
", $row[0]);            }            $result->close();        }        /* печатаем разделитель */        if ($mysqli->more_results()) {            printf("----------- ------
");        }}    } while ($mysqli->next_result());}/* закриваємо з'єднання**/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
", mysqli_connect_error());   exit();}$query u003du003d""SELECT CURRENT_USER();";$query .u003d "SELECT Name FROM City ORDER BY ID LIMIT і| ($link, $query)) {    do {        /* получаем первый результирующий набор */        if ($result u003d mysqli_use_result($link)) {            while ($row u003d mysqli_fetch_row($result)) {                printf("%s
", $row[0]);            }            mysqli_free_result($result);        }        /* печатаем разделитель */        if (mysqli_more_results($link)) {            printf("--------------- -
");        }    } while (mysqli_next_result($link));}/* закриваємо з'єднання */mysqli_close($link);?> `

Результат виконання даних прикладів:

my_user@localhost
-----------------
Amersfoort
Maastricht
Dordrecht
Leiden
Haarlemmermeer

### Дивіться також

- [mysqli_real_query()](mysqli.real-query.md) - Виконання SQL
запиту
- [mysqli_store_result()](mysqli.store-result.md) - Передає на
клієнта результуючий набір останнього запиту
