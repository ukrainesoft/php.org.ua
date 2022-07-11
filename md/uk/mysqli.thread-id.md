- [« mysqli::store_result](mysqli.store-result.md)
- [mysqli::thread_safe »](mysqli.thread-safe.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає ID процесу поточного підключення

# mysqli::$thread_id

# mysqli_thread_id

(PHP 5, PHP 7, PHP 8)

mysqli::$thread_id -- mysqli_thread_id -- Повертає ID процесу поточного
підключення

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->thread_id`;

Процедурний стиль

**mysqli_thread_id**([mysqli](class.mysqli.md) `$mysql`): int

**mysqli_thread_id()** повертає ID процесу поточного підключення,
який можна завершити функцією [mysqli_kill()](mysqli.kill.md). Якщо
з'єднання було розірвано та відновлено функцією
[mysqli_ping()](mysqli.ping.md), ID процесу буде вже іншим. Тому
потрібно отримувати цей ідентифікатор, коли це справді необхідно.

> **Примітка**:
>
> ID процесу призначається за принципом підключення-за-підключенням.
> Відповідно, якщо з'єднання розірвано та наново встановлено, йому
> буде надано новий ідентифікатор.
>
> Для завершення запущеного запиту можна використовувати
> SQL-команду `KILL QUERY processid`.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Повертає ID процесу поточного підключення.

### Приклади

**Приклад #1 Приклад використання `$mysqli->thread_id`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {   ключ|
", mysqli_connect_error()); помилка */if (!$mysqli->query("CREATE TABLE myCity LIKE City")) {    printf("Помилка: %s
", $mysqli->error);   exit;}/* закриваємо з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("Не 
", mysqli_connect_error()); */if(!mysqli_query($link, "CREATE TABLE myCity LIKE City")) {    printf("Помилка: %s
", mysqli_error($link));   exit;}/* закриваємо з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Помилка: MySQL server has gone away

### Дивіться також

- [mysqli_kill()](mysqli.kill.md) - Запит для сервера завершити
виконання процесу MySQL
