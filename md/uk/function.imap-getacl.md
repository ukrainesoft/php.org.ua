- [« imap_get_quotaroot](function.imap-get-quotaroot.md)
- [imap_getmailboxes »](function.imap-getmailboxes.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати ACL для заданої поштової скриньки

#imap_getacl

(PHP 5, PHP 7, PHP 8)

imap_getacl — Отримати ACL для заданої поштової скриньки

### Опис

**imap_getacl**([IMAP\Connection](class.imap-connection.md) `$imap`,
string `$mailbox`): array\|false

Повертає ACL для заданої поштової скриньки.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`mailbox`
Ім'я поштової скриньки. Докладніше читайте у розділі, присвяченому
функції [imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

### Значення, що повертаються

Повертає асоціативний масив виду "folder" u003d\>"acl" або **`false`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_getacl()****

` <?phpprint_r(imap_getacl($imap, 'user.joecool')));?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[asubfolder] u003d> lrswipcda
[anothersubfolder] u003d> lrswipcda
)

### Примітки

Ця функція доступна лише при використанні бібліотеки c-client2000
чи новіше.

### Дивіться також

- [imap_setacl()](function.imap-setacl.md) - Встановлення ACL для
заданої поштової скриньки
