- [«curl_copy_handle](function.curl-copy-handle.md)
- [curl_error »](function.curl-error.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає код останньої помилки

#curl_errno

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

curl_errno — Повертає код останньої помилки

### Опис

**curl_errno**([CurlHandle](class.curlhandle.md) `$handle`): int

Повертає код помилки останньої операції CURL.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

### Значення, що повертаються

Повертає номер помилки або `0` (нуль), якщо помилки не сталося.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_errno()****

`<?php// Створюємо дескриптор curl до неіснуючої адресу$ch u003d curl_init('http://404.php.net/');// Запускаємоcurl_setopt($ch, CURLOPT_RETURNTRANSFER, / Перевіряємо наявність помилкиif(curl_errno($ch)){    echo 'Помилка curl: ' . curl_error($ch);}// Закриваємо дескрипторcurl_close($ch);?> `

### Дивіться також

- [curl_error()](function.curl-error.md) - Повертає рядок з
описом останньої помилки поточного сеансу
- [» Коди помилок
cURL](http://curl.haxx.se/libcurl/c/libcurl-errors.md)
