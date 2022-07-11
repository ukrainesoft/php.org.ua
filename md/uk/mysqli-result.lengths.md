- [« mysqli_result::getIterator](mysqli-result.getiterator.md)
- [mysqli_result::$num_rows »](mysqli-result.num-rows.md)

- [PHP Manual](index.md)
- [mysqli_result](class.mysqli-result.md)
- Повертає довжини полів поточного рядка результуючого набору

# mysqli_result::$lengths

# mysqli_fetch_lengths

(PHP 5, PHP 7, PHP 8)

mysqli_result::$lengths -- mysqli_fetch_lengths — Повертає довжини полів
поточного рядка результуючого набору

### Опис

Об'єктно-орієнтований стиль

?array `$mysqli_result->lengths`;

Процедурний стиль

**mysqli_fetch_lengths**([mysqli_result](class.mysqli-result.md)
`$result`): array\|false

**mysqli_fetch_lengths()** повертає масив, елементи якого
являють собою довжини кожного поля поточного рядка результуючого набору.

### Список параметрів

`result`
Тільки для процедурного стилю: об'єкт
[mysqli_result](class.mysqli-result.md), отриманий за допомогою
[mysqli_query()](mysqli.query.md),
[mysqli_store_result()](mysqli.store-result.md),
[mysqli_use_result()](mysqli.use-result.md) або
[mysqli_stmt_get_result()](mysqli-stmt.get-result.md).

### Значення, що повертаються

Масив цілих чисел, що становлять розміри значень стовпців (за винятком
будь-які завершальні нуль-символи). **`false`** у разі виникнення
помилки.

**mysqli_fetch_lengths()** відноситься лише до поточного рядка. Функція
поверне **`false`**, якщо буде викликано до виклику
mysqli_fetch_row/array/object або якщо в результуючому наборі більше
немає рядків.

### Приклади

**Приклад #1 Об'єктно-орієнтований стиль**

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка підключення */if (mysqli_connect_errno()) {   єд
", mysqli_connect_error());   exit();}$query u003d "SELECT * from Country ORDER BY Code LIMIT 1";if ($result u003d $mysqli->query($query) fetch_row();    /* виведемо довжини полів */    foreach ($result->lengths as $i u003d> $val) {       є printf("Д|
", $i+1, $val);    }    $result->close();}/* закриваємо підключення */$mysqli->close();?> `

**Приклад #2 Процедурний стиль**

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка підключення */if (mysqli_connect_errno()) {    printf("Не 
", mysqli_connect_error());   exit();}$query u003d "SELECT * from Country ORDER BY Code LIMIT 1";if ($result u003d) Mysqli_query($link, $$ ;   /* виведемо довжини полів */   foreach (mysqli_fetch_lengths($result) as $i u003d> $val) {      дє
", $i+1, $val);    }    mysqli_free_result($result);}/* закриваємо підключення */mysqli_close($link);?> `

Результат виконання даних прикладів:

Поле 1 має довжину 3
Поле 2 має довжину 5
Поле 3 має довжину 13
Поле 4 має довжину 9
Поле 5 має довжину 6
Поле має довжину 1
Поле 7 має довжину 6
Поле 8 має довжину 4
Поле 9 має довжину 6
Поле 10 має довжину 6
Поле 11 має довжину 5
Поле 12 має довжину 44
Поле 13 має довжину 7
Поле 14 має довжину 3
Поле 15 має довжину 2
