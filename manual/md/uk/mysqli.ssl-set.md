- [« mysqli::$sqlstate](mysqli.sqlstate.md)
- [mysqli::stat »](mysqli.stat.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Використовується для встановлення безпечних з'єднань за допомогою SSL

# mysqli::ssl_set

# mysqli_ssl_set

(PHP 5, PHP 7, PHP 8)

mysqli::ssl_set -- mysqli_ssl_set — Використовується для встановлення
безпечних з'єднань за допомогою SSL

### Опис

Об'єктно-орієнтований стиль

public **mysqli::ssl_set**(
?string `$key`,
?string `$certificate`,
?string `$ca_certificate`,
?string `$ca_path`,
?string `$cipher_algos`
): bool

Процедурний стиль

**mysqli_ssl_set**(
[mysqli](class.mysqli.md) `$mysql`,
?string `$key`,
?string `$certificate`,
?string `$ca_certificate`,
?string `$ca_path`,
?string `$cipher_algos`
): bool

Використовується для встановлення безпечних з'єднань за допомогою SSL.
Функцію необхідно викликати до дзвінка
[mysqli_real_connect()](mysqli.real-connect.md). Для роботи функції
потрібно включити підтримку OpenSSL, інакше функція робити
нічого не буде.

### Список параметрів

`mysql`
Тільки для процедурного стилю: об'єкт [mysqli](class.mysqli.md),
отриманий за допомогою [mysqli_connect()](function.mysqli-connect.md)
або [mysqli_init()](mysqli.init.md).

`key`
Шлях та ім'я ключового файлу.

`certificate`
Шлях та ім'я файлу сертифіката.

`ca_certificate`
Шлях та ім'я файлу з дозволами сертифіката.

`ca_path`
Шлях до директорії, в якій зберігаються довірені CA-сертифікати SSL
формат PEM.

`cipher_algos`
Список допустимих шифрів для використання у SSL-шифруванні.

### Значення, що повертаються

Функція завжди повертає **`true`**. Якщо SSL встановлено некоректно
[mysqli_real_connect()](mysqli.real-connect.md) поверне помилку при
спробі підключення.

### Дивіться також

- [mysqli_options()](mysqli.options.md) - Встановлення установок
- [mysqli_real_connect()](mysqli.real-connect.md) - Встановлює
з'єднання з сервером mysql
