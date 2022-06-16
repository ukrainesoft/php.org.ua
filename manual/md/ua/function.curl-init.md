- [«curl_getinfo](function.curl-getinfo.md)
- [curl_multi_add_handle »](function.curl-multi-add-handle.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Ініціалізує сеанс cURL

#curl_init

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7, PHP 8)

curl_init – Ініціалізує сеанс cURL

### Опис

**curl_init**(?string `$url` u003d **`null`**):
[CurlHandle](class.curlhandle.md)\|false

Ініціалізує новий сеанс cURL та повертає дескриптор, який
використовується з функціями [curl_setopt()](function.curl-setopt.md),
[curl_exec()](function.curl-exec.md) та
[curl_close()](function.curl-close.md).

### Список параметрів

`url`
Якщо вказано, опція **`CURLOPT_URL`** буде автоматично встановлена в
значення цього аргументу. Ви можете вручну встановити цю опцію з
за допомогою функції [curl_setopt()](function.curl-setopt.md).

> **Примітка**:
>
> Протокол `file` стає недоступним у cURL, якщо задана опція
> [open_basedir](ini.core.md#ini.open-basedir).

### Значення, що повертаються

Повертає дескриптор cURL у разі успішного виконання, і **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- --------------------------------------|
| 8.0.0 | У разі успішного виконання повертає екземпляр [CurlHandle](class.curlhandle.md); раніше, повертався ресурс (resource). |
| 8.0.0 | `url` тепер припускає значення null. |

### Приклади

**Приклад #1 Ініціалізація нового сеансу cURL та завантаження веб-сторінки**

`<?php// створення нового ресурсу cURL$ch u003d curl_init();// установка URL і інших необхідних параметрівcurl_setopt($ch, CURLOPT_URL, "http://www.example.com CURLOPT_HEADER, 0);// завантаження сторінки і видача еї браузеруcurl_exec($ch);// завершення сеансу і звільнення ресурсовcurl_close($ch);?> `

### Дивіться також

- [curl_close()](function.curl-close.md) - Завершує сеанс cURL
- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
