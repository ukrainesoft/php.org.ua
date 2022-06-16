- [« mysqli::$errno](mysqli.errno.md)
- [mysqli::$error »](mysqli.error.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає перелік помилок виконання останньої запущеної команди

# mysqli::$error_list

# mysqli_error_list

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

mysqli::$error_list -- mysqli_error_list -- Повертає список помилок
виконання останньої занедбаної команди

### Опис

Об'єктно-орієнтований стиль

array `$mysqli->error_list`;

Процедурний стиль

**mysqli_error_list**([mysqli](class.mysqli.md) `$mysql`): array

Повертає масив помилок останнього виклику функції MySQLi, яка може
завершувати роботу успіхом чи невдачею.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Список помилок, кожна з яких представлена асоціативним масивом
(array) та містить номер помилки, її опис, а також код стану
sqlstate.

### Приклади

**Приклад #1 Приклад використання `$mysqli->error_list`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "nobody", "");/* перевіряємо з'єднання */if (mysqli_connect_errno()) {    printf("Не удалося підключитися
", mysqli_connect_error()); close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password", "world");/* перевіряємо з'єднання */if (mysqli_connect_errno()) {     printf("Не 
", mysqli_connect_error()); ;?> `

Результат виконання даних прикладів:

Array
(
[0] u003d> Array
(
[errno] u003d> 1193
[sqlstate] u003d> HY000
[error] u003d> Unknown system variable 'a'
)

)

### Дивіться також

- [mysqli_connect_errno()](mysqli.connect-errno.md) - Повертає код
помилки останньої спроби з'єднання
- [mysqli_connect_error()](mysqli.connect-error.md) - Повертає
опис останньої помилки підключення
- [mysqli_error()](mysqli.error.md) - Повертає рядок з описом
останньої помилки
- [mysqli_sqlstate()](mysqli.sqlstate.md) - Повертає код стану
SQLSTATE останній MySQL операції
