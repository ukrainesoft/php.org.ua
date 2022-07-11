- [«curl_init](function.curl-init.md)
- [curl_multi_close »](function.curl-multi-close.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Додає звичайний cURL-дескриптор до набору cURL-дескрипторів

#curl_multi_add_handle

(PHP 5, PHP 7, PHP 8)

curl_multi_add_handle — Додає звичайний cURL-дескриптор до набору
CURL-дескрипторів

### Опис

**curl_multi_add_handle**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`, [CurlHandle](class.curlhandle.md) `$handle`): int

Додає дескриптор `handle` до набору дескрипторів `multi_handle`

### Список параметрів

`multi_handle`
Мультидескриптор cURL, отриманий з
[curl_multi_init()](function.curl-multi-init.md).

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

### Значення, що повертаються

Повертає 0 при успіху, або один із кодів помилок **`CURLM_XXX`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_multi_add_handle()****

Цей приклад створить два дескриптори cURL, додасть їх до набору
дескрипторів, а потім запустить їх асинхронно.

`<?php// створюємо обидва ресурсу cURL$ch1 u003d curl_init();$ch2 u003d curl_init();// встановлюємо URL і інші відповідні опціїcurl_setopt($ch1, );curl_setopt($ch1, CURLOPT_HEADER, 0);curl_setopt($ch2, CURLOPT_URL, "http://www.php.net/");curl_setopt($ch2, CURLOPT_HEADER, 0);// створ mh u003d curl_multi_init();//додаємо два дескриптораcurl_multi_add_handle($mh,$ch1);curl_multi_add_handle($mh,$ch2);//запускаємо множинний обробникdo $ if ($active) {        curl_multi_select($mh); }} while ($active && $status u003du003du003dCURLM_OK);//закриваємо вседескрипториcurl_multi_remove_handle($mh, $ch1);curl_multi_remove_handle($mh, $ch2);

### Дивіться також

- [curl_multi_remove_handle()](function.curl-multi-remove-handle.md) -
Видаляє cURL дескриптор з набору cURL дескрипторів
- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
- [curl_init()](function.curl-init.md) - Ініціалізує сеанс cURL
