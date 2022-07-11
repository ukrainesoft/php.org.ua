- [« imap_sort](function.imap-sort.md)
- [imap_subscribe »] (function.imap-subscribe.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати інформацію про статус поштової скриньки

#imap_status

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_status — Отримати інформацію про статус поштової скриньки

### Опис

**imap_status**([IMAP\Connection](class.imap-connection.md) `$imap`,
string `$mailbox`, int `$flags`): stdClass\|false

Повертає інформацію щодо статусу заданої скриньки `mailbox`.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я поштової скриньки, докладніше дивіться в описі
[imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`flags`
Допустимі опції:

- **`SA_MESSAGES`** - встановити `$status->messages`, рівним
кількості листів у ящику
- **`SA_RECENT`** - встановити `$status->recent`, що дорівнює кількості
нових листів
- **`SA_UNSEEN`** - встановити `$status->unseen`, що дорівнює кількості
непрочитаних листів
- **`SA_UIDNEXT`** - встановити `$status->uidnext` рівним наступному
uid, який буде використаний у ящику
- **`SA_UIDVALIDITY`** - встановити `$status->uidvalidity` у значення
константи, яка змінюється, коли UID для поштової скриньки більше не
можуть бути дійсними
- **`SA_ALL`** - використовувати всі перелічені опції

### Значення, що повертаються

Функція повертає об'єкт, який містить інформацію про статус або
**`false`** у разі виникнення помилки. Об'єкт має такі
властивості: `messages`, `recent`, `unseen`, `uidnext` та `uidvalidity`.

`flags` також встановлений, він містить бітову маску яка може бути
перевірено за допомогою перерахованих вище констант.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_status()****

` <?php$mbox u003d|imap_open("{imap.example.com}", "username", "password", OP_HALFOPEN)       or die("не удалося підключитися: " . imap_last mbox, "{imap.example.org}INBOX", SA_ALL);if ($status) {  echo "Повідомлення:   " . $status->messages     . "<br />
";  echo "Останні:     " . $status->recent      . "<br />
";  echo "Непроглянуті:     " . $status->unseen      . "<br />
";  echo "UIDnext:    " . $status->uidnext     . "<br />
";  echo "UIDvalidity:" . $status->uidvalidity . "<br />
";} else {  echo "imap_status failed: " . imap_last_error() . "
";}imap_close($mbox);?> `
