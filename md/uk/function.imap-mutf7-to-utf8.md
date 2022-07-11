- [« imap_msgno](function.imap-msgno.md)
- [imap_num_msg »](function.imap-num-msg.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Декодувати змінений рядок UTF-7 у UTF-8

#imap_mutf7_to_utf8

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

imap_mutf7_to_utf8 — Декодувати змінений рядок UTF-7 у UTF-8

### Опис

**imap_mutf7_to_utf8**(string `$string`): string\|false

Декодувати змінений рядок UTF-7 (відповідно до RFC 2060, розділ
5.1.3) у UTF-8.

> **Примітка**:
>
> Ця функція доступна лише у випадку, якщо libcclient експортує
> utf8_to_mutf7().

### Список параметрів

`string`
Змінений рядок, закодований у UTF-7.

### Значення, що повертаються

Повертає `string`, конвертовану в UTF-8 або **`false`** у разі
виникнення помилки.

### Дивіться також

- [imap_utf8_to_mutf7()](function.imap-utf8-to-mutf7.md) -
Кодувати рядок UTF-8 у змінений UTF-7
