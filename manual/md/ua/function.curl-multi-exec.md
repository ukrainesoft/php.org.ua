- [«curl_multi_errno](function.curl-multi-errno.md)
- [curl_multi_getcontent »] (function.curl-multi-getcontent.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Запускає підключення поточного дескриптора cURL

#curl_multi_exec

(PHP 5, PHP 7, PHP 8)

curl_multi_exec — Запускає підключення поточного дескриптора cURL

### Опис

**curl_multi_exec**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`, int `&$still_running`): int

Обробляє кожен дескриптор у стеку. Цей метод може бути викликаний поза
залежно від необхідності дескриптора читати чи записувати дані.

### Список параметрів

`multi_handle`
Мультидескриптор cURL, отриманий з
[curl_multi_init()](function.curl-multi-init.md).

`still_running`
Посилання на прапор, який вказує, чи йдуть ще якісь дії.

### Значення, що повертаються

Код cURL, вказаний у [визначених константах](curl.constants.md)
CURL.

> **Примітка**:
>
> Тут повертаються помилки, що стосуються всього стека. Проблеми
> все ще можуть статися на індивідуальних запитах, навіть коли ця
> функція повертає **CURLM_OK**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------|
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_multi_exec()****

Цей приклад створить два дескриптори cURL, додасть їх до набору
дескрипторів, а потім запустить їх асинхронно.

`<?php// створюємо обидва ресурсу cURL$ch1 u003d curl_init();$ch2 u003d curl_init();// встановлюємо URL і інші відповідні опціїcurl_setopt($ch, curl_setopt($ch1, CURLOPT_HEADER, 0);curl_setopt($ch2, CURLOPT_URL, "http://www.php.net/");curl_setopt($ch2, CURLOPT_HEADER, 0)| curl_multi_init();//додаємо два дескриптори if ($active) {         // Чекаємо якийсь час для пожвавлення активності        curl_multi_select($mh); }} while ($active && $status u003du003du003dCURLM_OK);//закриваємо дескрипториcurl_multi_remove_handle($mh, $ch1);curl_multi_remove_handle($mh, $ch2);curl_mul

### Дивіться також

- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
- [curl_multi_select()](function.curl-multi-select.md) - Чекає
активності на будь-якому curl_multi з'єднанні
- [curl_exec()](function.curl-exec.md) - Виконує запит cURL
