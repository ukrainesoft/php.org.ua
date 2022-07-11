- [«curl_share_setopt](function.curl-share-setopt.md)
- [curl_strerror »](function.curl-strerror.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає опис для заданого коду помилки

#curl_share_strerror

(PHP 7 \>u003d 7.1.0, PHP 8)

curl_share_strerror — Повертає опис для заданого коду помилки

### Опис

**curl_share_strerror**(int `$error_code`): ?string

Повертає опис для заданого коду помилки.

### Список параметрів

`error_code`
Одна із констант: [» Коди помилок
cURL](http://curl.haxx.se/libcurl/c/libcurl-errors.md).

### Значення, що повертаються

Повертає опис для заданого коду помилки або **`null`**, якщо
такого коду немає.

### Дивіться також

- [curl_share_errno()](function.curl-share-errno.md) - Повертає
код останньої помилки оброблюваного обробника curl
- [curl_strerror()](function.curl-strerror.md) - Отримати текстове
опис для коду помилки
