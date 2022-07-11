- [« imap_deletemailbox](function.imap-deletemailbox.md)
- [imap_expunge »](function.imap-expunge.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати всі помилки, що відбулися IMAP

#imap_errors

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_errors — Отримати всі помилки, що відбулися IMAP

### Опис

**imap_errors**(): array\|false

Повертає всі помилки IMAP (якщо є), що відбулися з моменту
запиту поточної сторінки або з останнього скидання стека помилок.

Коли функція **imap_errors()** викликається, стек помилок очищається.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ця функція повертає масив усіх помилок IMAP, що виникли з моменту
останнього запуску **imap_errors()** або від початку сторінки. Якщо таких
ні, повертає **`false`**.

### Дивіться також

- [imap_last_error()](function.imap-last-error.md) - Отримати
останню помилку IMAP у поточному запиті
- [imap_alerts()](function.imap-alerts.md) - Повертає все
попередження IMAP
