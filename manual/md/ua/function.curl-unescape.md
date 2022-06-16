- [«curl_strerror](function.curl-strerror.md)
- [curl_version »] (function.curl-version.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Декодує закодований URL-рядок

#curl_unescape

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_unescape — Декодує закодований URL-рядок

### Опис

**curl_unescape**([CurlHandle](class.curlhandle.md) `$handle`, string
`$string`): string\|false

Ця функція декодує закодований URL-рядок.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

`string`
Закодований рядок.

### Значення, що повертаються

Повертає декодований рядок або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання
[curl_escape()](function.curl-escape.md)**

`<?php// Створюємо обробник curl$ch u003d curl_init('http://example.com/redirect.php');//Посилаємо HTTP-запитcurl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);cur // Отримуємо останній використаний URL$effective_url u003d curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);// наприклад "http://example.com/show_location.php?locu003dM%C3%BCnchen"| ch, $effective_url);// "http://example.com/show_location.php?locu003dMünchen"// Закриваємо обробникcurl_close($ch);?> `

### Примітки

> **Примітка**:
>
> **curl_unescape()** не перетворює плюс (+) у пробіл. Це робить
> функція [urldecode()](function.urldecode.md).

### Дивіться також

- [curl_escape()](function.curl-escape.md) - Кодує задану
рядок як URL
- [urlencode()](function.urlencode.md) - URL-кодування рядка
- [urldecode()](function.urldecode.md) - Декодування
URL-кодованого рядка
- [rawurlencode()](function.rawurlencode.md) - URL-кодування
рядки згідно з RFC 3986
- [rawurldecode()](function.rawurldecode.md) - Декодування
URL-кодованого рядка
