- [« imap_mail_copy](function.imap-mail-copy.md)
- [imap_mail »] (function.imap-mail.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Перемістити зазначені повідомлення до вказаної поштової скриньки

#imap_mail_move

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail_move — Перемістити вказані повідомлення до вказаного поштового повідомлення
ящик

### Опис

**imap_mail_move**(
[IMAP\Connection](class.imap-connection.md) `$imap`,
string `$message_nums`,
string `$mailbox`,
int `$flags` u003d 0
): bool

Переміщує листи, задані в `message_nums` у вказану поштову скриньку
`mailbox`. Зверніть увагу, що поштові повідомлення фактично
*Копіюються* в `mailbox`, а вихідні повідомлення позначаються для видалення.
Це означає, що повідомленням `mailbox` призначаються нові UID.

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
`flags` - бітова маска, яка може приймати лише одне значення:

- **`CP_UID`** - означає, що у першому параметрі не номери
повідомлень, а їх UID

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Примітки

> **Примітка**:
>
> Функція **imap_mail_move()** позначає оригінальне повідомлення прапором
> видалення, тому не забудьте після неї викликати функцію
> [imap_expunge()](function.imap-expunge.md).

### Дивіться також

- [imap_mail_copy()](function.imap-mail-copy.md) - Скопіювати
повідомлення у вказану поштову скриньку
