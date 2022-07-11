- [«curl_close](function.curl-close.md)
- [curl_errno»] (function.curl-errno.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Копіює дескриптор cURL разом із усіма його налаштуваннями

#curl_copy_handle

(PHP 5, PHP 7, PHP 8)

curl_copy_handle - Копіює дескриптор cURL разом з усіма його
налаштуваннями

### Опис

**curl_copy_handle**([CurlHandle](class.curlhandle.md) `$handle`):
[CurlHandle](class.curlhandle.md)\|false

Копіює дескриптор cURL, зберігаючи його налаштування.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

### Значення, що повертаються

Повертає новий дескриптор cURL або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |
| 8.0.0 | У разі успішного виконання повертає екземпляр [CurlHandle](class.curlhandle.md); раніше повертався ресурс (resource). |

### Приклади

**Приклад #1 Копіювання дескриптора cURL**

` <?php// створення нового ресурсу cURL$ch u003d curl_init();// установка URL і інших відповідних параметрівcurl_setopt($ch, CURLOPT_URL, 'http://www.ex; CURLOPT_HEADER, 0); звільнення системних ресурсовcurl_close($ch2);curl_close($ch);?> `
