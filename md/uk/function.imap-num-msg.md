- [« imap_mutf7_to_utf8](function.imap-mutf7-to-utf8.md)
- [imap_num_recent »](function.imap-num-recent.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати кількість повідомлень у поточній поштовій скриньці

#imap_num_msg

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_num_msg — Отримати кількість повідомлень у поточній поштовій скриньці

### Опис

**imap_num_msg**([IMAP\Connection](class.imap-connection.md) `$imap`):
int\|false

Повертає кількість повідомлень у поточній поштовій скриньці.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

### Значення, що повертаються

Повертає кількість повідомлень у поточній поштовій скриньці у вигляді цілого
числа. У разі виникнення помилки повертає **`false`**.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Дивіться також

- [imap_num_recent()](function.imap-num-recent.md) - Отримати
кількість нових повідомлень у поточній поштовій скриньці
- [imap_status()](function.imap-status.md) - Отримати інформацію з
статусу поштової скриньки
