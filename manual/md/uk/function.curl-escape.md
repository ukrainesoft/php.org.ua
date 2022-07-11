- [«curl_error](function.curl-error.md)
- [curl_exec »](function.curl-exec.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Кодує заданий рядок як URL

#curl_escape

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_escape — кодує заданий рядок як URL

### Опис

**curl_escape**([CurlHandle](class.curlhandle.md) `$handle`, string
`$string`): string\|false

Кодує рядок згідно [RFC 3986](http://www.faqs.org/rfcs/rfc3986).

### Список параметрів

`handle`
Дескриптор cURL, отриманий із [curl_init()](function.curl-init.md).

`string`
Рядок для кодування.

### Значення, що повертаються

Повертає екранований рядок або **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ------------------|
| 8.0.0 | `handle` тепер чекає екземпляр [CurlHandle](class.curlhandle.md); раніше, очікувався ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **curl_escape()****

` <?php// Створюємо обробник curl$ch u003d curl_init();// Екрануємо рядок, хочемо хотімо передати методом GET$location u003d curl_escape($ch, 'Hofbräu %20%2F%20M%C3%BCnchen// Збираємо URL по частям$url u003d "http://example.com/add_location.php?locationu003d{$location}";// Результат: http://example. com/add_location.php?locationu003dHofbr%C3%A4uhaus%20%2F%20M%C3%BCnchen// Посилаємо запрос HTTP і закриваємо обробникcurl_setopt($ch, CURLOPT_URL, $R ;curl_exec($ch);curl_close($ch);?> `

### Дивіться також

- [curl_unescape()](function.curl-unescape.md) - Декодує
закодований URL-рядок
- [urlencode()](function.urlencode.md) - URL-кодування рядка
- [rawurlencode()](function.rawurlencode.md) - URL-кодування
рядки згідно з RFC 3986
- [» RFC 3986](http://www.faqs.org/rfcs/rfc3986)
