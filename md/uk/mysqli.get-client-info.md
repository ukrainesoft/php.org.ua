- [« mysqli::get_charset](mysqli.get-charset.md)
- [mysqli::$client_version »](mysqli.get-client-version.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Отримує інформацію про клієнта MySQL

# mysqli::$client_info

# mysqli::get_client_info

# mysqli_get_client_info

(PHP 5, PHP 7, PHP 8)

mysqli::$client_info -- mysqli::get_client_info --
mysqli_get_client_info — Отримує інформацію про клієнта MySQL

### Опис

Об'єктно-орієнтований стиль

string `$mysqli->client_info`;

public **mysqli::get_client_info**(): string

Процедурний стиль

**mysqli_get_client_info**(?[mysqli](class.mysqli.md) `$mysql` u003d
**`null`**): string

Повертає рядок, який містить версію клієнтської бібліотеки MySQL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядок, що містить версію клієнтської бібліотеки MySQL.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------------|
| 8.1.0 | Виклик функції mysqli_get_client_info()** з аргументом `mysql` застарів. Функція ніколи не вимагала параметра, але неправильно дозволяла його як необов'язковий параметр. |
| 8.1.0 | Об'єктно-орієнтований стиль виклику методу mysqli::get_client_info()** застарів. |

### Приклади

**Приклад #1 mysqli_get_client_info**

` <?php/* Для визначення версії клієнтської бібліотеки MySQL   нет необхідності у створенні з'єднання */printf("Версія клієнтської бібліотеки: %s
", mysqli_get_client_info());?> `

### Дивіться також

- [mysqli_get_client_version()](mysqli.get-client-version.md) -
Повертає інформацію про клієнта MySQL у вигляді рядка
- [mysqli_get_server_info()](mysqli.get-server-info.md) - Повертає
версію MySQL сервера
- [mysqli_get_server_version()](mysqli.get-server-version.md) -
Повертає версію сервера MySQL, представлену у вигляді integer
