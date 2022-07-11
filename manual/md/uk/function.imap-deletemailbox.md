- [«imap_delete](function.imap-delete.md)
- [imap_errors »](function.imap-errors.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Видалити поштову скриньку

#imap_deletemailbox

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_deletemailbox — Видалити поштову скриньку

### Опис

**imap_deletemailbox**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$mailbox`): bool

Видаляє поштову скриньку `mailbox`.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я ящика. Докладніше читайте в описі
[imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_createmailbox()](function.imap-createmailbox.md) - Створити
нова поштова скринька
- [imap_renamemailbox()](function.imap-renamemailbox.md) -
Перейменувати поштову скриньку
- [imap_open()](function.imap-open.md) - Відкриває потік IMAP до
поштовій скриньці для формату `mbox`
