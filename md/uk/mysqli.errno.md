- [« mysqli::dump_debug_info](mysqli.dump-debug-info.md)
- [mysqli::$error_list »](mysqli.error-list.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає код помилки останнього виклику функції

# mysqli::$errno

# mysqli_errno

(PHP 5, PHP 7, PHP 8)

mysqli::$errno -- mysqli_errno — Повертає код помилки останнього виклику
функції

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->errno`;

Процедурний стиль

**mysqli_errno**([mysqli](class.mysqli.md) `$mysql`): int

Повертає код помилки останнього виклику функції MySQLi, що завершилася
успішним виконанням чи помилкою.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Код помилки останнього виклику функції у разі провалу. За відсутності
помилок виводить 0.

### Приклади

**Приклад #1 Приклад використання `$mysqli->errno`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання */if ($mysqli->connect_errno) {  єднання| s
", $mysqli->connect_error);   exit();}if (!$mysqli->query("SET au003d1")) {    printf("Код помилки: %d
", $mysqli->errno);}/* Закрити з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d Mysqli_connect("localhost", "my_user", "my_password", "world");/* Перевірити з'єднання */if (mysqli_connect_errno()) {     printf("З'єднання|
", mysqli_connect_error());
", mysqli_errno($link));}/* Закрити з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Код помилки: 1193

### Дивіться також

- [mysqli_connect_errno()](mysqli.connect-errno.md) - Повертає код
помилки останньої спроби з'єднання
- [mysqli_connect_error()](mysqli.connect-error.md) - Повертає
опис останньої помилки підключення
- [mysqli_error()](mysqli.error.md) - Повертає рядок з описом
останньої помилки
- [mysqli_sqlstate()](mysqli.sqlstate.md) - Повертає код стану
SQLSTATE останній MySQL операції
