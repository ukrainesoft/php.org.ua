- [«curl_multi_add_handle](function.curl-multi-add-handle.md)
- [curl_multi_errno »](function.curl-multi-errno.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Закриває набір cURL-дескрипторів

#curl_multi_close

(PHP 5, PHP 7, PHP 8)

curl_multi_close — Закриває набір cURL-дескрипторів

### Опис

**curl_multi_close**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`): void

> **Примітка**:
>
> Використання функції не має сенсу. До PHP 8.0.0 вона
> використовувалася закриття ресурсу.

Закриває набір дескрипторів CURL.

### Список параметрів

`multi_handle`
Мультидескриптор cURL, отриманий з
[curl_multi_init()](function.curl-multi-init.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------|
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_multi_close()****

Цей приклад створить два дескриптори cURL, додасть їх до набору
дескрипторів, а потім запустить їх асинхронно.

`<?php// створюємо обидва ресурсу cURL$ch1 u003d curl_init();$ch2 u003d curl_init();// встановлюємо URL і інші відповідні опціїcurl_setopt($ch1, );curl_setopt($ch1, CURLOPT_HEADER, 0);curl_setopt($ch2, CURLOPT_URL, "http://www.php.net/");curl_setopt($ch2, CURLOPT_HEADER, 0);// створ mh u003d curl_multi_init();//додаємо два дескриптораcurl_multi_add_handle($mh,$ch1);curl_multi_add_handle($mh,$ch2);//запускаємо множинний обробникdo $ if ($active) {        curl_multi_select($mh); }} while ($active && $status u003du003du003dCURLM_OK);//закриваємо вседескрипториcurl_multi_remove_handle($mh, $ch1);curl_close($ch1);curl_multi_remove_handle$$ $mh);?> `

### Дивіться також

- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
- [curl_close()](function.curl-close.md) - Завершує сеанс cURL
