- [« imap_thread](function.imap-thread.md)
- [imap_uid »](function.imap-uid.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Встановити або отримати час очікування imap

#imap_timeout

(PHP 4 \>u003d 4.3.3, PHP 5, PHP 7, PHP 8)

imap_timeout — Встановити або отримати час очікування imap

### Опис

**imap_timeout**(int `$timeout_type`, int `$timeout` u003d -1): int\|bool

Встановлює або отримує час очікування imap.

### Список параметрів

`timeout_type`
Одна з констант: **`IMAP_OPENTIMEOUT`**, **`IMAP_READTIMEOUT`**,
**`IMAP_WRITETIMEOUT`** або **`IMAP_CLOSETIMEOUT`**.

`timeout`
Час очікування за секунди.

### Значення, що повертаються

Якщо заданий параметр `timeout`, ця функція поверне **`true`** або
**`false`** залежно від успішності виконання.

Якщо параметр timeout не заданий, або виставлений рівним -1, то буде
повернуто ціле число, що дорівнює поточній величині часу очікування,
відповідного заданого типу `timeout_type`.

### Приклади

**Приклад #1 Приклад використання **imap_timeout()****

`<?phpecho "Поточний час очікування читання " . imap_timeout(IMAP_READTIMEOUT) . "
";?> `
