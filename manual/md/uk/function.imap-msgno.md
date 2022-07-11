- [« imap_mime_header_decode](function.imap-mime-header-decode.md)
- [imap_mutf7_to_utf8 »](function.imap-mutf7-to-utf8.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати номер повідомлення із заданим UID

#imap_msgno

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_msgno — Отримати номер повідомлення із заданим UID

### Опис

**imap_msgno**([IMAP\Connection](class.imap-connection.md) `$imap`,
int `$message_uid`): int

Повертає номер повідомлення для вказаного 'message_uid'.

Ця функція є зворотною до [imap_uid()](function.imap-uid.md).

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

`message_uid`
UID повідомлення

### Значення, що повертаються

Повертає номер повідомлення для вказаного 'message_uid'.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_uid()](function.imap-uid.md) - Отримати UID за номером
повідомлення
