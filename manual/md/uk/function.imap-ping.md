- [« imap_open](function.imap-open.md)
- [imap_qprint »](function.imap-qprint.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Перевірити, чи активний потік IMAP

#imap_ping

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_ping — Перевірити, чи активний потік IMAP.

### Опис

**imap_ping**([IMAP\Connection](class.imap-connection.md) `$imap`):
bool

**imap_ping()** перевіряє, чи активний ще відкритий потік. За допомогою нього
можна дізнаватись, чи є нова пошта. Це кращий метод
перевіряти чи є нові повідомлення та аналог "keep alive" для серверів з
налаштованим часом очікування неактивності.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

### Значення, що повертаються

Повертає **`true`**, якщо потік активний і **`false`**, якщо ні.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання **imap_ping()****

` <?php$imap u003d imap_open("{imap.example.org}", "mailadmin", "password");
