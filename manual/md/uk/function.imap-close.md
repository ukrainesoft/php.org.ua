- [« imap_clearflag_full](function.imap-clearflag-full.md)
- [imap_create »] (function.imap-create.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Закрити потік IMAP

#imap_close

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_close — Закрити потік IMAP

### Опис

**imap_close**([IMAP\Connection](class.imap-connection.md) `$imap`,
int `$flags` u003d 0): bool

Закриває IMAP-потік.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`flags`
Якщо встановлено **`CL_EXPUNGE`**, то ця функція мовчки застосує все
внесені зміни, зокрема видалить всі повідомлення, позначені для
видалення. По суті зробить те саме, що і функція
[imap_expunge()](function.imap-expunge.md)

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_open()](function.imap-open.md) - Відкриває потік IMAP до
поштовій скриньці
