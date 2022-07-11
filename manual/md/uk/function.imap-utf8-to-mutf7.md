- [« imap_utf7_encode](function.imap-utf7-encode.md)
- [imap_utf8 »] (function.imap-utf8.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Кодувати рядок UTF-8 у змінений UTF-7

#imap_utf8_to_mutf7

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

imap_utf8_to_mutf7 — Кодувати рядок UTF-8 на змінений UTF-7

### Опис

**imap_utf8_to_mutf7**(string `$string`): string\|false

Кодувати рядок UTF-8 у змінений рядок UTF-7 (відповідно до RFC
2060, розділ 5.1.3).

> **Примітка**:
>
> Ця функція доступна лише у випадку, якщо libcclient експортує
> utf8_to_mutf7().

### Список параметрів

`string`
Закодований у UTF-8 рядок.

### Значення, що повертаються

Повертає `string`, конвертовану в змінену UTF-7 або **`false`**
у разі виникнення помилки.

### Дивіться також

- [imap_mutf7_to_utf8()](function.imap-mutf7-to-utf8.md) -
Декодувати змінений рядок UTF-7 у UTF-8
