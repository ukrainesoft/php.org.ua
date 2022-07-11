- [« imap_errors](function.imap-errors.md)
- [imap_fetch_overview »](function.imap-fetch-overview.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Видалити всі позначені для видалення повідомлення

#imap_expunge

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_expunge — Видалити всі позначені для видалення повідомлення

### Опис

**imap_expunge**([IMAP\Connection](class.imap-connection.md) `$imap`):
bool

Видаляє всі позначені видалення повідомлення. Позначити для видалення
можна за допомогою функцій [imap_delete()](function.imap-delete.md),
[imap_mail_move()](function.imap-mail-move.md) або
[imap_setflag_full()](function.imap-setflag-full.md).

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

### Значення, що повертаються

Повертає **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
