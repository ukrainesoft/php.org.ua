- [« imap_createmailbox](function.imap-createmailbox.md)
- [imap_deletemailbox »](function.imap-deletemailbox.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Позначити повідомлення для видалення

#imap_delete

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_delete — Позначити повідомлення для видалення

### Опис

**imap_delete**([IMAP\Connection](class.imap-connection.md) `$imap`,
string `$message_nums`, int `$flags` u003d 0): bool

Позначає повідомлення, наведені в `message_nums` для видалення.
Позначені повідомлення будуть залишатися в скриньці доки не буде викликано
функція [imap_expunge()](function.imap-expunge.md), або
[imap_close()](function.imap-close.md) із встановленим параметром
**`CL_EXPUNGE`**.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_nums`
Рядок (string), що складається з одного або кількох повідомлень у форматі
послідовності в стилі IMAP4 ('n', n:m або їх комбінація,
розділена комами).

`flags`
Можна встановити як **`FT_UID`**, тоді функція буде очікувати в параметрі
`message_nums` не номер повідомлення, а `UID`.

### Значення, що повертаються

Повертає **`true`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_delete()****

` <?php$mbox u003d imap_open("{imap.example.org}INBOX", "username", "password")    or die("Не удалося підключитися: " . imap_last_error());$check box );echo "Повідомлення до позначки для віддалення: " . $check->Nmsgs . "<br />
";imap_delete($mbox, 1);$check u003d imap_mailboxmsginfo($mbox);echo "Повідомлення після позначки для віддалення: " . .$check->Nmsgs . "<br />
";imap_expunge($mbox);$check u003d imap_mailboxmsginfo($mbox);echo "Повідомлення після віддалення: " . $check->Nmsgs . "<br />
";imap_close($mbox);?> `

### Примітки

> **Примітка**:
>
> Скриньки IMAP можуть не зберігати прапори між з'єднаннями, отже
> якщо ви дійсно хочете видалити позначені повідомлення, то
> необхідно викликати [imap_expunge()](function.imap-expunge.md) у тому
> з'єднанні, у якому прапори встановлювалися.

### Дивіться також

- [imap_undelete()](function.imap-undelete.md) - Знімає повідомлення
мітку видалення
- [imap_expunge()](function.imap-expunge.md) - Видалити все
позначені для видалення повідомлення
- [imap_close()](function.imap-close.md) - Закрити потік IMAP
