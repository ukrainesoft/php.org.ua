- [« imap_undelete](function.imap-undelete.md)
- [imap_utf7_decode »](function.imap-utf7-decode.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Відписатися від поштової скриньки

#imap_unsubscribe

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_unsubscribe — Відписатися від поштової скриньки

### Опис

**imap_unsubscribe**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$mailbox`): bool

Відписатися від поштової скриньки `mailbox`.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я поштової скриньки. Детальніше дивіться у розділі про
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

- [imap_subscribe()](function.imap-subscribe.md) - Підписатися на
Поштова скринька
