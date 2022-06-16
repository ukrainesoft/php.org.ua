- [«curl_errno](function.curl-errno.md)
- [curl_escape »](function.curl-escape.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає рядок із описом останньої помилки поточного сеансу

#curl_error

(PHP 4 \>u003d 4.0.3, PHP 5, PHP 7, PHP 8)

curl_error — Повертає рядок із описом останньої помилки поточного
сеансу

### Опис

**curl_error**([CurlHandle](class.curlhandle.md) `$handle`): string

Повертає повідомлення про помилку для останньої операції cURL.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

### Значення, що повертаються

Повертає повідомлення про помилку або ```` (порожній рядок), якщо помилки не
сталося.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_error()****

`<?php// Створюємо дескриптор curl до неіснуючої адресу$ch u003d curl_init('http://404.php.net/');curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); u003d false){    echo 'Помилка curl: ' . curl_error($ch);}else{   echo 'Операція завершена без будь-яких помилок';}// Закриваємо дескрипторcurl_close($ch);?> `

### Дивіться також

- [curl_errno()](function.curl-errno.md) - Повертає код останнього
помилки
- [» Коди помилок
cURL](http://curl.haxx.se/libcurl/c/libcurl-errors.md)
