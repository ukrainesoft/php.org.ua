- [« mysqli::$client_info](mysqli.get-client-info.md)
- [mysqli::get_connection_stats »](mysqli.get-connection-stats.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Повертає інформацію про клієнта MySQL у вигляді рядка

# mysqli::$client_version

# mysqli_get_client_version

(PHP 5, PHP 7, PHP 8)

mysqli::$client_version -- mysqli_get_client_version -- Повертає
інформацію про клієнта MySQL у вигляді рядка

### Опис

Об'єктно-орієнтований стиль

int `$mysqli->client_version`;

Процедурний стиль

**mysqli_get_client_version**(): int

Повертає версію клієнта як цілого числа.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Число, що містить версію клієнтської бібліотеки MySQL у наступному
формат: `main_version*10000 + minor_version *100 + sub_version`. До
Наприклад, для версії 4.1.0 виведе 40100.

Доцільно використовувати для швидкого визначення клієнтської версії
бібліотеки та можливостей її застосування.

### Приклади

**Приклад #1 mysqli_get_client_version**

`<?php/* Для визначення версії клієнтської бібліотеки MySQL не має необхідності в створенні з'єднання*/printf("Версія клієнтської бібліотеки: %d
", mysqli_get_client_version());?> `

### Дивіться також

- [mysqli_get_client_info()](mysqli.get-client-info.md) - Отримує
інформацію про клієнта MySQL
- [mysqli_get_server_info()](mysqli.get-server-info.md) - Повертає
версію MySQL сервера
- [mysqli_get_server_version()](mysqli.get-server-version.md) -
Повертає версію сервера MySQL, представлену у вигляді integer
