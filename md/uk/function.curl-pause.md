- [«curl_multi_strerror](function.curl-multi-strerror.md)
- [curl_reset»] (function.curl-reset.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Припинити та відновити з'єднання

#curl_pause

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_pause — Зупинити та відновити з'єднання

### Опис

**curl_pause**([CurlHandle](class.curlhandle.md) `$handle`, int
`$flags`): int

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

`flags`
Одна із констант **`CURLPAUSE_*`**.

### Значення, що повертаються

Повертає один із кодів повернення (**`CURLE_OK`** якщо помилок немає).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |
