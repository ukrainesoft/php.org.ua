- [« mysqli::$protocol_version](mysqli.get-proto-info.md)
- [mysqli::$server_version »](mysqli.get-server-version.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає версію MySQL сервера

# mysqli::$server_info

# mysqli::get_server_info

# mysqli_get_server_info

(PHP 5, PHP 7, PHP 8)

mysqli::$server_info -- mysqli::get_server_info --
mysqli_get_server_info — Повертає версію MySQL сервера

### Опис

Об'єктно-орієнтований стиль

string `$mysqli->server_info`;

public **mysqli_stmt::get_server_info**(): string

Процедурний стиль

**mysqli_get_server_info**([mysqli](class.mysqli.md) `$mysql`): string

Повертає рядок, що містить версію сервера MySQL, до якого також
підключено модуль MySQLi.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

### Значення, що повертаються

Рядок символів, що містить версію сервера.

### Приклади

**Приклад #1 Приклад використання `$mysqli->server_info`**

Об'єктно-орієнтований стиль

` <?php$mysqli u003d new mysqli("localhost", "my_user", "my_password");/* перевірити з'єднання */if (mysqli_connect_errno()) {    printf("Подключення не
", mysqli_connect_error());  exit();}/* вивести версію сервера */printf("Версія сервера: %s
", $mysqli->server_info);/* закрити з'єднання*/$mysqli->close();?> `

Процедурний стиль

` <?php$link u003d mysqli_connect("localhost", "my_user", "my_password");/* перевірити з'єднання */if (mysqli_connect_errno()) {    printf("Підключення не 
", mysqli_connect_error());  exit();}/* вивести версію сервера */printf("Версія сервера: %s
", mysqli_get_server_info($link));/* закрити з'єднання*/mysqli_close($link);?> `

Результат виконання даних прикладів:

Server version: 4.1.2-alpha-debug

### Дивіться також

- [mysqli_get_client_info()](mysqli.get-client-info.md) - Отримує
інформацію про клієнта MySQL
- [mysqli_get_client_version()](mysqli.get-client-version.md) -
Повертає інформацію про клієнта MySQL у вигляді рядка
- [mysqli_get_server_version()](mysqli.get-server-version.md) -
Повертає версію сервера MySQL, представлену у вигляді integer
