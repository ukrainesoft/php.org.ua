- [« mysqli::$insert_id](mysqli.insert-id.md)
- [mysqli::more_results »](mysqli.more-results.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Запит для сервера завершити виконання процесу MySQL

# mysqli::kill

# mysqli_kill

(PHP 5, PHP 7, PHP 8)

mysqli::kill -- mysqli_kill — Запит для сервера завершити виконання
процесу MySQL

### Опис

Об'єктно-орієнтований стиль

public **mysqli::kill**(int `$process_id`): bool

Процедурний стиль

**mysqli_kill**([mysqli](class.mysqli.md) `$mysql`, int
`$process_id`): bool

Ця функція використовується, щоб відправити на сервер команду завершити
MySQL процес заданий параметром `process_id`. Значення цього параметра
має бути отримано за допомогою функції
[mysqli_thread_id()](mysqli.thread-id.md).

Для завершення роботи поточного запиту використовуйте SQL команду
`KILL QUERY processid`.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mysqli::kill()****

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {   ключ|
", mysqli_connect_error());   exit();}/* визначимо id нашого процесу */$thread_id u003d $mysqli->thread_id;/* вбиваємо з'єднання*/$mysqli->зд| помилка */if (!$mysqli->query("CREATE TABLE myCity LIKE City")) {    printf("Помилка: %s
", $mysqli->error);   exit;}/* закриваємо з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
", mysqli_connect_error());  exit();}/* визначимо id нашого процесу */$thread_id u003d mysqli_thread_id($link);/* вбиваємо з'єднання*/mysqli_kill */if(!mysqli_query($link, "CREATE TABLE myCity LIKE City")) {    printf("Помилка: %s
", mysqli_error($link));   exit;}/* закриваємо з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Error: MySQL server has gone away

### Дивіться також

- [mysqli_thread_id()](mysqli.thread-id.md) - Повертає ID процесу
поточного підключення
