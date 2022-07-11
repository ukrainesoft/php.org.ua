- [« mysqli::$server_info](mysqli.get-server-info.md)
- [mysqli::get_warnings »](mysqli.get-warnings.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає версію сервера MySQL, представлену у вигляді integer

# mysqli::$server_version

# mysqli_get_server_version

(PHP 5, PHP 7, PHP 8)

mysqli::$server_version -- mysqli_get_server_version -- Повертає версію
сервера MySQL, представлену у вигляді integer

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->server_version`;

Процедурний стиль

**mysqli_get_server_version**([mysqli](class.mysqli.md) `$mysql`): int

Функція **mysqli_get_server_version()** повертає версію сервера
якому створено з'єднання (передане у параметрі `mysql`) у вигляді
цілого числа.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Цілочисленне представлення версії сервера.

Це число збирається так
`main_version * 10000 + minor_version * 100 + sub_version` (тобто версія
4.1.0 буде представлено як 40100).

### Приклади

**Приклад #1 Приклад використання `$mysqli->server_version`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password");/* перевірка з'єднання */if (mysqli_connect_errno()) {    printf("З'єднання|
", mysqli_connect_error());  exit();}/* виводимо версію сервера */printf("Версія сервера: %d
", $mysqli->server_version);/* закриваємо з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d Mysqli_connect("localhost", "my_user", "my_password");
", mysqli_connect_error());  exit();}/* виводимо версію сервера */printf("Версія сервера: %d
", mysqli_get_server_version($link));/* закриваємо з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Версія сервера: 40102

### Дивіться також

- [mysqli_get_client_info()](mysqli.get-client-info.md) - Отримує
інформацію про клієнта MySQL
- [mysqli_get_client_version()](mysqli.get-client-version.md) -
Повертає інформацію про клієнта MySQL у вигляді рядка
- [mysqli_get_server_info()](mysqli.get-server-info.md) - Повертає
версію MySQL сервера
