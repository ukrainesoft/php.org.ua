- [«curl_share_strerror](function.curl-share-strerror.md)
- [curl_unescape »] (function.curl-unescape.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Отримати текстовий опис для коду помилки

#curl_strerror

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_strerror — Отримати текстовий опис для коду помилки

### Опис

**curl_strerror**(int `$error_code`): ?string

Повертає текстове описання заданого коду помилки.

### Список параметрів

`error_code`
Одна з констант [» кодів помилок
cURL](http://curl.haxx.se/libcurl/c/libcurl-errors.md).

### Значення, що повертаються

Повертає опис помилки або **`null`**, якщо такої помилки немає.

### Приклади

**Приклад #1 Приклад використання
[curl_errno()](function.curl-errno.md)**

`<?php// Створюємо обробник curl з некоректним вказівкою протоколу в URL$ch u003d curl_init("htp://example.com/");// Посилаємо запитcurl_exec($ch);       ($errno u003dcurl_errno($ch)) {    $error_message u003dcurl_strerror($errno); echo "cURL error ({$errno}):
{$error_message}";}// Закриваємо обробникcurl_close($ch);?> `

Результат виконання цього прикладу:

cURL error (1):
Unsupported protocol

### Дивіться також

- [curl_errno()](function.curl-errno.md) - Повертає код останнього
помилки
- [curl_error()](function.curl-error.md) - Повертає рядок з
описом останньої помилки поточного сеансу
- [» Коди помилок
Curl](http://curl.haxx.se/libcurl/c/libcurl-errors.md)
