- [« SessionHandlerInterface](class.sessionhandlerinterface.md)
- [SessionHandlerInterface::destroy
»](sessionhandlerinterface.destroy.md)

- [PHP Manual](index.md)
- [SessionHandlerInterface](class.sessionhandlerinterface.md)
- Закриває сесію

# SessionHandlerInterface::close

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::close — Закриває сесію

### Опис

public **SessionHandlerInterface::close**(): bool

Закриває поточну сесію. Ця функція автоматично виконується при
закриття сесії або явно через
[session_write_close()](function.session-write-close.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Значення сесійного сховища, що повертається (зазвичай **`true`** у випадку
успішного виконання, **`false`** у разі виникнення помилки). Це
значення повертається назад до PHP для внутрішньої обробки.
