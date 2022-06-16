- [«curl_multi_remove_handle](function.curl-multi-remove-handle.md)
- [curl_multi_setopt »](function.curl-multi-setopt.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Чекає активності на будь-якому curl_multi з'єднанні

# curl_multi_select

(PHP 5, PHP 7, PHP 8)

curl_multi_select — Чекає активності на будь-якому curl_multi з'єднанні

### Опис

**curl_multi_select**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`, float `$timeout` u003d 1.0): int

Блокує виконання скрипта, доки якесь із з'єднань curl_multi
не стане активним.

### Список параметрів

`multi_handle`
Мультидескриптор cURL, отриманий з
[curl_multi_init()](function.curl-multi-init.md).

`timeout`
Час у секундах для очікування відповіді.

### Значення, що повертаються

У разі успішного виконання повертає кількість дескрипторів,
що містяться в наборах дескрипторів. Може повернути 0, якщо не було
активності на жодному дескрипторі. У разі невдачі ця функція поверне
-1 У разі виникнення помилки вибірки (з нижчележачого системного
виклику вибірки).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------------|
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |

### Дивіться також

- [curl_multi_init()](function.curl-multi-init.md) - Створює набір
CURL-дескрипторів
