- [« Функції cURL](ref.curl.md)
- [curl_copy_handle »](function.curl-copy-handle.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Завершує сеанс cURL

#curl_close

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

curl_close - Завершує сеанс cURL

### Опис

**curl_close**([CurlHandle](class.curlhandle.md) `$handle`): void

> **Примітка**:
>
> Використання функції не має сенсу. До PHP 8.0.0 вона
> використовувалася закриття ресурсу.

Завершує сеанс cURL та звільняє всі ресурси. Дескриптор `handle`
також знищується.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Ініціалізація сеансу cURL та завантаження веб-сторінки**

`<?php// створення нового ресурсу cURL$ch u003d curl_init();// установка URL і інших необхідних параметрівcurl_setopt($ch, CURLOPT_URL, "http://www.example.com CURLOPT_HEADER, 0);// завантаження сторінки і видача еї браузеруcurl_exec($ch);// завершення сеансу і звільнення ресурсовcurl_close($ch);?> `

### Дивіться також

- [curl_init()](function.curl-init.md) - Ініціалізує сеанс cURL
- [curl_multi_close()](function.curl-multi-close.md) - Закриває
набір cURL-дескрипторів
