- [«curl_share_close](function.curl-share-close.md)
- [curl_share_init »](function.curl-share-init.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає код останньої помилки оброблюваного curl

#curl_share_errno

(PHP 7 \>u003d 7.1.0, PHP 8)

curl_share_errno — Повертає код останньої помилки розділеного
обробника curl

### Опис

**curl_share_errno**([CurlShareHandle](class.curlsharehandle.md)
`$share_handle`): int

Повертає код останньої помилки curl, що розділяється, у вигляді
цілого числа.

### Список параметрів

`share_handle`
Обробник, що розділяється, cURL, що повертається
[curl_share_init()](function.curl-share-init.md).

### Значення, що повертаються

Повертає код останньої помилки curl, що розділяється, у вигляді
цілого числа або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ---------------------------------|
| 8.0.0 | Функція більше не повертає **`false`** у разі виникнення помилки. |
| 8.0.0 | `share_handle` expects a [CurlShareHandle](class.curlsharehandle.md) instance now; Попередньо, як ресурс був виявлений. |

### Дивіться також

- [curl_errno()](function.curl-errno.md) - Повертає код останнього
помилки
