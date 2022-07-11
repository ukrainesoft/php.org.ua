- [«rawurlencode](function.rawurlencode.md)
- [urlencode »](function.urlencode.md)

- [PHP Manual](index.md)
- [Функції URL](ref.url.md)
- Декодування URL-кодованого рядка

# urldecode

(PHP 4, PHP 5, PHP 7, PHP 8)

urldecode — Декодування URL-кодованого рядка

### Опис

**urldecode**(string `$string`): string

Декодує будь-які кодовані послідовності '%##' у даному рядку.
Символ "плюс" ("+") декодується в символ пропуску.

### Список параметрів

`string`
Рядок, який має бути декодований.

### Значення, що повертаються

Повертає декодований рядок.

### Приклади

**Приклад #1 Приклад використання **urldecode()****

` <?php$query u003d "myu003dapples&areu003dgreen+and+red";foreach (explode('&', $query) as $chunk) {    $param u003d explode("u003d", $chunk); if ($param) {         printf("Значення параметра \"%s\" - \"%s\"<br/>
", urldecode($param[0]), urldecode($param[1]));    }}?> `

### Примітки

**Увага**

Змінні в суперглобальних масивах `$_GET` та `$_REQUEST` вже
декодовані. Застосування **urldecode()** до елементів `$_GET` або
`$_REQUEST` може призвести до несподіваних та небезпечних результатів.

### Дивіться також

- [urlencode()](function.urlencode.md) - URL-кодування рядка
- [rawurlencode()](function.rawurlencode.md) - URL-кодування
рядки згідно з RFC 3986
- [rawurldecode()](function.rawurldecode.md) - Декодування
URL-кодованого рядка
- [» RFC 3986](http://www.faqs.org/rfcs/rfc3986)
