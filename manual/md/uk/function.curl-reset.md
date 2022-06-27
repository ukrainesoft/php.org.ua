- [«curl_pause](function.curl-pause.md)
- [curl_setopt_array »](function.curl-setopt-array.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Скинути всі налаштування обробника сесії libcurl

#curl_reset

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_reset — Скинути всі налаштування обробника сесії libcurl

### Опис

**curl_reset**([CurlHandle](class.curlhandle.md) `$handle`): void

Ця функція переініціалізує всі налаштування заданого обробника
сесії cURL за промовчанням.

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

**Приклад #1 Приклад використання **curl_reset()****

`<?php//Створюємо обробник curl$ch u003d curl_init();// Встановлюємо опцію CURLOPT_USERAGENTcurl_setopt($ch, CURLOPT_USERAGENT, "My test user| запит HTTPcurl_setopt($ch, CURLOPT_URL, 'http://example.com/');curl_exec($ch); // встановлений раніше user-agent скинуто// Закриваємо обробникcurl_close($ch);?> `

### Примітки

> **Примітка**:
>
> **curl_reset()** також скидає URL, заданий як параметр
> [curl_init()](function.curl-init.md).

### Дивіться також

- [curl_setopt()](function.curl-setopt.md) - Встановлює параметр
для сеансу CURL
