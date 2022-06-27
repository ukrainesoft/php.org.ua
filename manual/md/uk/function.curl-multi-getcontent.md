- [«curl_multi_exec](function.curl-multi-exec.md)
- [curl_multi_info_read »](function.curl-multi-info-read.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Повертає результат операції, якщо було встановлено опцію
CURLOPT_RETURNTRANSFER

#curl_multi_getcontent

(PHP 5, PHP 7, PHP 8)

curl_multi_getcontent - Повертає результат операції, якщо була
встановлена опція **`CURLOPT_RETURNTRANSFER`**

### Опис

**curl_multi_getcontent**([CurlHandle](class.curlhandle.md)
`$handle`): ?string

Якщо для певного дескриптора було встановлено опцію
**`CURLOPT_RETURNTRANSFER`**, то ця функція поверне вміст цього
cURL-дескриптора у вигляді рядка.

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

### Значення, що повертаються

Повертає вміст cURL-дескриптора, якщо була використана опція
**`CURLOPT_RETURNTRANSFER`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Дивіться також

- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
