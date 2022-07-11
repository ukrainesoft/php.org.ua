- [« mysqli::$error_list](mysqli.error-list.md)
- [mysqli::$field_count »](mysqli.field-count.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає рядок із описом останньої помилки

# mysqli::$error

# mysqli_error

(PHP 5, PHP 7, PHP 8)

mysqli::$error -- mysqli_error — Повертає рядок з описом останнього
помилки

### Опис

Об'єктно-орієнтований стиль

string `$mysqli->error`;

Процедурний стиль

**mysqli_error**([mysqli](class.mysqli.md) `$mysql`): string

Повертає повідомлення про помилку останнього виклику функції MySQLi, який
може успішно виконатися чи провалитися.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Рядок з описом помилки. Порожній рядок, якщо помилок немає.

### Приклади

**Приклад #1 Приклад з `$mysqli->error`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання */if ($mysqli->connect_errno) {  єднання| s
", $mysqli->connect_error);   exit();}if (!$mysqli->query("SET au003d1")) {    printf("Повідомлення помилки: %s
", $mysqli->error);}/* Закрити з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d Mysqli_connect("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання */if (mysqli_connect_errno()) {     printf("З'єднання|
", mysqli_connect_error());
", mysqli_error($link));}/* Закрити з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Повідомлення помилки: Unknown system variable 'a'

### Дивіться також

- [mysqli_connect_errno()](mysqli.connect-errno.md) - Повертає код
помилки останньої спроби з'єднання
- [mysqli_connect_error()](mysqli.connect-error.md) - Повертає
опис останньої помилки підключення
- [mysqli_errno()](mysqli.errno.md) - Повертає код помилки
останнього виклику функції
- [mysqli_sqlstate()](mysqli.sqlstate.md) - Повертає код стану
SQLSTATE останній MySQL операції
