- [«curl_multi_init](function.curl-multi-init.md)
- [curl_multi_select »](function.curl-multi-select.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Видаляє cURL дескриптор з набору cURL дескрипторів

# curl_multi_remove_handle

(PHP 5, PHP 7, PHP 8)

curl_multi_remove_handle — Видаляє cURL дескриптор із набору cURL
дескрипторів

### Опис

**curl_multi_remove_handle**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`, [CurlHandle](class.curlhandle.md) `$handle`): int

Видаляє вказаний дескриптор `handle` із вказаного набору дескрипторів
`multi_handle`. Після того, як дескриптор handle видалений, його можна
знову цілком легально використовувати у функції
[curl_exec()](function.curl-exec.md). Видалення дескриптора `handle` у
час використання також зупинить поточну передачу, що йде на цьому
дескриптори.

### Список параметрів

`multi_handle`
Мультидескриптор cURL, отриманий з
[curl_multi_init()](function.curl-multi-init.md).

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

### Значення, що повертаються

У разі успішного виконання повертає 0 або одну із констант
**`CURLM_XXX`**, де XXX - код помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Дивіться також

- [curl_init()](function.curl-init.md) - Ініціалізує сеанс cURL
- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
- [curl_multi_add_handle()](function.curl-multi-add-handle.md) -
Додає звичайний cURL-дескриптор до набору cURL-дескрипторів
