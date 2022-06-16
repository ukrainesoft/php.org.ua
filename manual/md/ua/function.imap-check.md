- [« imap_bodystruct](function.imap-bodystruct.md)
- [imap_clearflag_full »](function.imap-clearflag-full.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Перевірити поточну поштову скриньку

#imap_check

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_check — Перевірити поточну поштову скриньку

### Опис

**imap_check**([IMAP\Connection](class.imap-connection.md) `$imap`):
stdClass\|false

Перевіряє інформацію поточної поштової скриньки.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

### Значення, що повертаються

Повертає об'єкт із такими властивостями:

- **`Date`** - поточний системний час у відповідному форматі
[» RFC2822](http://www.faqs.org/rfcs/rfc2822)
- **`Driver`** - протокол, який використовується для доступу до поштового
ящику: POP3, IMAP, NNTP
- **`Mailbox`** - ім'я поштової скриньки
- **`Nmsgs`** - кількість повідомлень
- **`Recent`** - кількість нових повідомлень

У разі виникнення помилки повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_check()****

` <?php$imap u003d imap_check($imap_stream);var_dump($imap);?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)(5) {
["Date"]u003d>
string(37) "Wed, 10 Dec 2003 17:56:54 +0100 (CET)"
["Driver"]u003d>
string(4) "imap"
["Mailbox"]u003d>
string(54)
"{www.example.com:143/imap/useru003d"foo@example.com"}INBOX"
["Nmsgs"]u003d>
int(1)
["Recent"]u003d>
int(0)
}
