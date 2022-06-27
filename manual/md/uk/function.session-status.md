- [« session_start](function.session-start.md)
- [session_unset »](function.session-unset.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Повертає стан поточної сесії

# session_status

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

session_status — Повертає стан поточної сесії

### Опис

**session_status**(): int

Функція **session_status()** повертає стан поточної сесії.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

- **`PHP_SESSION_DISABLED`**, якщо механізм сесій вимкнено.
- **`PHP_SESSION_NONE`**, якщо механізм сесій увімкнено, але сесія не
створено.
- **`PHP_SESSION_ACTIVE`**, якщо механізм сесій включений та сесія
створено.

### Дивіться також

- [session_start()](function.session-start.md) - Стартує нову
сесію, або відновлює існуючу
