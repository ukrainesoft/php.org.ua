- [«connection_aborted](function.connection-aborted.md)
- [constant »] (function.constant.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- Повертає статус з'єднання у бітах

# connection_status

(PHP 4, PHP 5, PHP 7, PHP 8)

connection_status — Повертає статус з'єднання в бітах

### Опис

**connection_status**(): int

Отримує статус з'єднання у бітах.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає статус з'єднання в бітах, який можна використовувати в
константах `CONNECTION_XXX` для визначення статусу з'єднання.

### Дивіться також

- [connection_aborted()](function.connection-aborted.md) -
Перевірити, чи відключено клієнта
- [ignore_user_abort()](function.ignore-user-abort.md) - Встановити,
чи має відключення клієнта переривати виконання скрипту
- Дивіться [Керування з'єднанням](features.connection-handling.md)
для повної інформації про управління з'єднанням PHP.
