- [« imap_headers](function.imap-headers.md)
- [imap_list »](function.imap-list.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати останню помилку IMAP у поточному запиті

#imap_last_error

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_last_error — Отримати останню помилку IMAP у поточному запиті

### Опис

**imap_last_error**(): string\|false

Повертає повний текст помилки IMAP на поточній сторінці. Стек
помилок не буде порушено; наступний виклик **imap_last_error()**, якщо
помилок більше не було, поверне ту саму помилку.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає повний текст помилки IMAP на поточній сторінці. Якщо
помилок не було - поверне "false".

### Дивіться також

- [imap_errors()](function.imap-errors.md) - Отримати всі
помилки, що відбулися IMAP
