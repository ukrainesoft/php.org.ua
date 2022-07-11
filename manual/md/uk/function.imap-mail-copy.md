- [« imap_mail_compose](function.imap-mail-compose.md)
- [imap_mail_move »](function.imap-mail-move.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Скопіювати повідомлення у вказану поштову скриньку

#imap_mail_copy

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail_copy — Скопіювати повідомлення у вказану поштову скриньку

### Опис

**imap_mail_copy**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$message_nums`,
string `$mailbox`,
int `$flags` u003d 0
): bool

Копіює задані в `message_nums` листи у вказану поштову скриньку.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_nums`
`message_nums` - це діапазон, а не просто номер повідомлень (як
визначено в [RFC2060](http://www.faqs.org/rfcs/rfc2060)).

`mailbox`
Ім'я поштової скриньки. Докладніше читайте у розділі, присвяченому
функції [imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`flags`
`flags` - бітова маска однієї або кількох констант:

- **`CP_UID`** - означає, що у першому параметрі не номери
повідомлень, а їхнє UID.
- **`CP_MOVE`** - видалити оригінальні повідомлення після копіювання.
Якщо цей прапор встановлено, функція веде себе ідентично до функції
[imap_mail_move()](function.imap-mail-move.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_mail_move()](function.imap-mail-move.md) - Перемістити
вказані повідомлення до вказаної поштової скриньки
