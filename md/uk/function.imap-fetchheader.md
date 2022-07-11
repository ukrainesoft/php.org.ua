- [« imap_fetchbody](function.imap-fetchbody.md)
- [imap_fetchmime »](function.imap-fetchmime.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати заголовок повідомлення

#imap_fetchheader

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_fetchheader — Отримати заголовок повідомлення

### Опис

**imap_fetchheader**([IMAP\Connection](class.imap-connection.md)
`$imap`, int `$message_num`, int `$flags` u003d 0): string\|false

Ця функція отримує повний, нефільтрований заголовок у форматі
[»RFC2822](http://www.faqs.org/rfcs/rfc2822) для заданого повідомлення.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_num`
Номер повідомлення

`flags`
Допустимі значення `flags`:

- **`FT_UID`** - параметр `message_num` є UID
- **`FT_INTERNAL`** - повертати рядок у внутрішньому форматі, без
перетворення кінців рядків до CRLF.
- **`FT_PREFETCHTEXT`** - одночасно має бути підвантажений
RFC822.TEXT. Це дозволяє уникнути зайвого RTT при з'єднанні IMAP,
якщо вибрано повний текст повідомлення (наприклад під час операції "зберегти
у файл")

### Значення, що повертаються

Повертає заголовок повідомлення у вигляді рядка або **`false`** у разі
виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_fetch_overview()](function.imap-fetch-overview.md) - Огляд
інформації, що міститься в заголовках повідомлень
