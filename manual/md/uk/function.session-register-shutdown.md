- [« session_regenerate_id](function.session-regenerate-id.md)
- [session_reset »](function.session-reset.md)

- [PHP Manual](index.md)
- [Функції для роботи з сесіями](ref.session.md)
- Функція завершення сесії

# session_register_shutdown

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

session_register_shutdown — Функція завершення сесії

### Опис

**session_register_shutdown**(): void

Реєструє функцію
[session_write_close()](function.session-write-close.md) як
функції завершення сесії.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

При невдалій реєстрації завершальної функції генерує помилку рівня
**`E_WARNING`**.
