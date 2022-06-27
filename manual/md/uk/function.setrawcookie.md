- [« setcookie](function.setcookie.md)
- [socket_get_status »](function.socket-get-status.md)

- [PHP Manual](index.md)
- [Мережні функції](ref.network.md)
- Надсилає cookie без URL-кодування значення

# setrawcookie

(PHP 5, PHP 7, PHP 8)

setrawcookie — надсилає cookie без URL-кодування значення

### Опис

**setrawcookie**(
string `$name`,
string `$value` u003d ?,
int `$expires_or_options` u003d 0,
string `$path` u003d ?,
string `$domain` u003d ?,
bool `$secure` u003d **`false`**,
bool `$httponly` u003d **`false`**
): bool

Альтернативна сигнатура доступна з PHP 7.3.0 (іменовані параметри не
підтримуються):

**setrawcookie**(string `$name`, string `$value` u003d ?, array `$options` u003d
\[\]): bool

Функція **setrawcookie()** є повним аналогом функції
[setcookie()](function.setcookie.md), за винятком того, що
значення cookie не буде автоматично закодовано під час надсилання
браузеру.

### Список параметрів

Для отримання інформації про параметр, дивіться документацію по функції
[setcookie()](function.setcookie.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -|
| 7.3.0 | Доданий альтернативний підпис, що підтримує масив опцій `options`. Цей підпис також підтримує налаштування cookie-атрибута SameSite. |

### Дивіться також

- [setcookie()](function.setcookie.md) - Надсилає cookie
