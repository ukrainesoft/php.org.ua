- [« mysqli::ping](mysqli.ping.md)
- [mysqli::prepare »](mysqli.prepare.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Опитування підключень

# mysqli::poll

# mysqli_poll

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

mysqli::poll -- mysqli_poll — Опитування підключень

### Опис

Об'єктно-орієнтований стиль

public static **mysqli::poll**(
?array `&$read`,
?array `&$error`,
array `&$reject`,
int `$seconds`,
int `$microseconds` u003d 0
): int\|false

Процедурний стиль

**mysqli_poll**(
?array `&$read`,
?array `&$error`,
array `&$reject`,
int `$seconds`,
int `$microseconds` u003d 0
): int\|false

Опитування підключень. Метод може використовуватись як
[Статичний] (language.oop5.static.md).

> **Примітка**:
>
> Доступно лише з модулем [mysqlnd](book.mysqlnd.md).

### Список параметрів

`read`
Список з'єднань для перевірки наявності результатів, що залишилися, які
можна прочитати.

`error`
Список з'єднань, на яких відбулися помилки, наприклад, не вдалося.
запит або з'єднання було втрачено.

`reject`
Список з'єднань, які були відхилені, тому що на них не був
запущено асинхронний запит, з яким функція може отримати результат
опитування.

`seconds`
Максимальна кількість секунд очікування має бути невід'ємною.

`microseconds`
Максимальна кількість мілісекунд очікування має бути
невід'ємним.

### Значення, що повертаються

Повертає кількість готових до роботи з'єднань у разі успішного
виконання, **`false`** у разі невдачі.

### Приклади

**Приклад #1 Приклад використання **mysqli_poll()****

` <?php$link1 u003d mysqli_connect();$link1->query("SELECT 'test'", MYSQLI_ASYNC);$all_links u003d array($link1);$processed u003d 0;do {    $$s rejectu003du003darray(); foreach ($all_links as $link) {        $links[] u003d $errors[] u003d $reject[] u003d $link; }    if (!mysqli_poll($links, $errors, $reject, 1)) {        continue; }   foreach ($links as $link) {        if ($result u003d $link->reap_async_query()) {          > | if (is_object($result))                 mysqli_free_result($result); } else die(sprintf("Помилка MySQLi: %s", mysqli_error($link))); $processed++; }} while ($processed < count($all_links));?> `

Результат виконання цього прикладу:

Array
(
[0] u003d> test
)

### Дивіться також

- [mysqli_query()](mysqli.query.md) - Виконує запит до бази даних
- [mysqli_reap_async_query()](mysqli.reap-async-query.md) -
Отримання результату асинхронного запиту
