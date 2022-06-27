- [«imap_mail](function.imap-mail.md)
- [imap_mime_header_decode »](function.imap-mime-header-decode.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати інформацію про поточну поштову скриньку

#imap_mailboxmsginfo

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mailboxmsginfo — Отримати інформацію про поточну поштову скриньку

### Опис

**imap_mailboxmsginfo**([IMAP\Connection](class.imap-connection.md)
`$imap`): stdClass

Перевірка статусу поточної поштової скриньки на сервері. Аналогічно
[imap_status()](function.imap-status.md), але додатково обчислює
сумарний розмір усіх листів у ящику, через що працює кілька
повільніше.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

### Значення, що повертаються

Повертає об'єкт із наступними полями:

| | |
|---------|------------------------------------------- -----------|
| Date | дата останньої зміни (поточна дата та час) |
| Driver | драйвер |
| Mailbox | ім'я поштової скриньки |
| Nmsgs | кількість листів |
| Recent | кількість нових |
| Unread | кількість непрочитаних |
| Deleted | кількість віддалених |
| Size | розмір ящика

**Властивості поштової скриньки**

У разі виникнення помилки повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_mailboxmsginfo()****

` <?php$mbox u003dimap_open("{imap.example.org}INBOX", "username", "password")      or die("не вдалося підключитися: " . imap_last_error())box );if ($check) {   echo "Date: "      . $check->Date     . "<br />
" ;    echo "Driver: "   . $check->Driver  . "<br />
" ;    echo "Mailbox: "  . $check->Mailbox . "<br />
" ;    echo "Messages: " . $check->Nmsgs   . "<br />
" ;    echo "Recent: "   . $check->Recent  . "<br />
" ;    echo "Unread: "   . $check->Unread  . "<br />
" ;    echo "Deleted: "  . $check->Deleted . "<br />
" ;    echo "Size: "     . $check->Size    . "<br />
" ;} else {    echo "Виклик imap_mailboxmsginfo() закінчився з помилкою: " . imap_last_error() . "<br />
";}imap_close($mbox);?> `
