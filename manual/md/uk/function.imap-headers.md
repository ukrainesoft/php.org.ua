- [« imap_headerinfo](function.imap-headerinfo.md)
- [imap_last_error »](function.imap-last-error.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати заголовки всіх повідомлень у поштовій скриньці

#imap_headers

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_headers — Отримати заголовки всіх повідомлень у поштовій скриньці

### Опис

**imap_headers**([IMAP\Connection](class.imap-connection.md) `$imap`):
array\|false

Повертає заголовки всіх повідомлень у поштовій скриньці.

### Список параметрів

`imap`
Примірник [IMAP\Connection](class.imap-connection.md).

### Значення, що повертаються

Повертає масив із рядками, що містять заголовки повідомлень. Один
елемент – одне повідомлення. Повертає **`false`** у разі виникнення
помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `imap` тепер чекає на екземпляр [IMAP\Connection](class.imap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |
