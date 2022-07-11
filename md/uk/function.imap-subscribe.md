- [« imap_status](function.imap-status.md)
- [imap_thread »](function.imap-thread.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Підписатися на поштову скриньку

#imap_subscribe

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_subscribe — Передплатити поштову скриньку

### Опис

**imap_subscribe**([IMAP\Connection](class.imap-connection.md)
`$imap`, string `$mailbox`): bool

Передплатити нову поштову скриньку.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я поштової скриньки. Детальніше читай у розділі про
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

- [imap_unsubscribe()](function.imap-unsubscribe.md) - Відписатися від
поштової скриньки
