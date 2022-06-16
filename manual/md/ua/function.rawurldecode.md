- [«parse_url](function.parse-url.md)
- [rawurlencode »] (function.rawurlencode.md)

- [PHP Manual](index.md)
- [Функції URL](ref.url.md)
- Декодування URL-кодованого рядка

# rawurldecode

(PHP 4, PHP 5, PHP 7, PHP 8)

rawurldecode — Декодування URL-кодованого рядка

### Опис

**rawurldecode**(string `$string`): string

Повертає рядок, у якому послідовність знаків відсотка (`%`) та
наступні за ним два шістнадцяткові числа замінені буквальними
символи.

### Список параметрів

`string`
URL, який має бути декодований.

### Значення, що повертаються

Повертає декодований URL у вигляді рядка.

### Приклади

**Приклад #1 Приклад використання **rawurldecode()****

`<?phpecho rawurldecode('foo%20bar%40baz'); // foo bar@baz?> `

### Примітки

> **Примітка**:
>
> **rawurldecode()** не декодує символ додавання ('+') у пробіли. Це
> робить [urldecode()](function.urldecode.md).

### Дивіться також

- [rawurlencode()](function.rawurlencode.md) - URL-кодування
рядки згідно з RFC 3986
- [urldecode()](function.urldecode.md) - Декодування
URL-кодованого рядка
- [urlencode()](function.urlencode.md) - URL-кодування рядка
- [» RFC 3986](http://www.faqs.org/rfcs/rfc3986)
