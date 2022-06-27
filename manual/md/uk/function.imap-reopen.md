- [« imap_renamemailbox](function.imap-renamemailbox.md)
- [imap_rfc822_parse_adrlist
»](function.imap-rfc822-parse-adrlist.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Відкриває потік IMAP до нової скриньки

#imap_reopen

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_reopen — Відкриває потік IMAP до нової скриньки

### Опис

**imap_reopen**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$mailbox`,
int `$flags` u003d 0,
int `$retries` u003d 0
): bool

Перевідкриває вказаний потік до ящика `mailbox` на сервері IMAP або
NNTP.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я поштової скриньки. Докладніше читайте у розділі про функцію
[imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`flags`
`flags` - бітова маска з однієї або кількох констант:

- **`OP_READONLY`** - відкрити поштову скриньку тільки для читання
- **`OP_ANONYMOUS`** - не використовувати та не оновлювати `.newsrc` для
новин (тільки NNTP)
- **`OP_HALFOPEN`** - відкрити з'єднання, але не підключатися до
поштову скриньку для ім'я IMAP та NNTP.
- **`OP_EXPUNGE`** - мовчки виконати видалення помічених для видалення
повідомлень у потоці
- **`CL_EXPUNGE`** - автоматично видаляти всі позначені для
видалення повідомлення при закритті поштової скриньки (див.
[imap_delete()](function.imap-delete.md) та
[imap_expunge()](function.imap-expunge.md))

`retries`
Максимальна кількість спроб з'єднання

### Значення, що повертаються

Повертає **`true`**, якщо потік перевідкритий і **`false`**, якщо ні.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_reopen()****

` <?php$mbox u003d imap_open("{imap.example.org:143}INBOX", "username", "password") or die(implode(", ", imap_errors()));// ... imap_reopen($mbox, "{imap.example.org:143}INBOX.Sent") or die(implode(", ", imap_errors()));// ..?> `
