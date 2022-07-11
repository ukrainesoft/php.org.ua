- [« imap_timeout](function.imap-timeout.md)
- [imap_undelete »] (function.imap-undelete.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати UID за номером повідомлення

#imap_uid

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_uid — Отримати UID за номером повідомлення

### Опис

**imap_uid**([IMAP\Connection](class.imap-connection.md) `$imap`, int
`$message_num`): int\|false

Ця функція повертає UID для повідомлення із заданим номером. UID – це
унікальний ідентифікатор, який не змінюється з часом, у той час
як номер повідомлення в скриньці може змінюватися при зміні вмісту
поштової скриньки.

Ця функція обернена функції [imap_msgno()](function.imap-msgno.md).

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_num`
Номер повідомлення.

### Значення, що повертаються

UID заданого листа.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Примітки

> **Примітка**:
>
> Ця функція не підтримується для поштової скриньки POP3.

### Дивіться також

- [imap_msgno()](function.imap-msgno.md) - Отримати номер повідомлення
із заданим UID
