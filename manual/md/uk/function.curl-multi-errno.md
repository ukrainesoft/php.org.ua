- [«curl_multi_close](function.curl-multi-close.md)
- [curl_multi_exec »](function.curl-multi-exec.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає код останньої помилки множинного curl

# curl_multi_errno

(PHP 7 \>u003d 7.1.0, PHP 8)

curl_multi_errno — Повертає код останньої помилки множинного curl

### Опис

**curl_multi_errno**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`): int

Повертає код останньої помилки множини curl у вигляді цілого числа.

### Список параметрів

`multi_handle`
Мультидескриптор cURL, отриманий з
[curl_multi_init()](function.curl-multi-init.md).

### Значення, що повертаються

Повертає код останньої помилки множини curl у вигляді цілого числа.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------|
| 8.0.0 | Функція більше не повертає **`false`** у разі виникнення помилки. |
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |

### Дивіться також

- [curl_errno()](function.curl-errno.md) - Повертає код останнього
помилки
