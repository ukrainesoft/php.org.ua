- [«curl_multi_info_read](function.curl-multi-info-read.md)
- [curl_multi_remove_handle »](function.curl-multi-remove-handle.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Створює набір cURL-дескрипторів

#curl_multi_init

(PHP 5, PHP 7, PHP 8)

curl_multi_init — Створює набір cURL-дескрипторів

### Опис

**curl_multi_init**(): [CurlMultiHandle](class.curlmultihandle.md)

Дозволяє асинхронну обробку безлічі cURL-дескрипторів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає набір cURL-дескрипторів у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------------------------------------|
| 8.0.0 | У разі успішного виконання повертає екземпляр [CurlMultiHandle](class.curlmultihandle.md); раніше, повертався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_multi_init()****

Цей приклад створить два дескриптори cURL, додасть їх до набору
дескрипторів, а потім запустить їх асинхронно.

`<?php// створюємо обидва ресурсу cURL$ch1 u003d curl_init();$ch2 u003d curl_init();// встановлюємо URL і інші відповідні опціїcurl_setopt($ch1, );curl_setopt($ch1, CURLOPT_HEADER, 0);curl_setopt($ch2, CURLOPT_URL, "http://www.php.net/");curl_setopt($ch2, CURLOPT_HEADER, 0);// створ mh u003d curl_multi_init();//додаємо два дескриптораcurl_multi_add_handle($mh,$ch1);curl_multi_add_handle($mh,$ch2);//запускаємо множинний обробникdo $ if ($active) {        curl_multi_select($mh); }} while ($active && $status u003du003du003dCURLM_OK);//закриваємо вседескрипториcurl_multi_remove_handle($mh, $ch1);curl_multi_remove_handle($mh, $ch2);

### Дивіться також

- [curl_init()](function.curl-init.md) - Ініціалізує сеанс cURL
- [curl_multi_close()](function.curl-multi-close.md) - Закриває
набір cURL-дескрипторів
