- [« imap_uid](function.imap-uid.md)
- [imap_unsubscribe »] (function.imap-unsubscribe.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Знімає з повідомлення позначку видалення

# imap_undelete

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_undelete — Знімає з повідомлення позначку видалення

### Опис

**imap_undelete**([IMAP\Connection](class.imap-connection.md) `$imap`,
string `$message_nums`, int `$flags` u003d 0): bool

Видаляє із заданого повідомлення мітку видалення, яка була встановлена з
за допомогою [imap_delete()](function.imap-delete.md) або
[imap_mail_move()](function.imap-mail-move.md).

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_nums`
Рядок (string), що складається з одного або кількох повідомлень у форматі
послідовності в стилі IMAP4 ('n', n:m або їх комбінація,
розділена комами).

`flags`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_delete()](function.imap-delete.md) - Позначити повідомлення для
видалення
- [imap_mail_move()](function.imap-mail-move.md) - Перемістити
вказані повідомлення до вказаної поштової скриньки
