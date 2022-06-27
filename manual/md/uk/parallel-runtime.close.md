- [« parallel\Runtime::run](parallel-runtime.run.md)
- [parallel\Runtime::kill »](parallel-runtime.kill.md)

- [PHP Manual](index.md)
- [parallel\Runtime](class.parallel-runtime.md)
- Витончене з'єднання під час виконання

# parallel\Runtime::close

(0.8.0)

parallel\Runtime::close — Витончене з'єднання під час виконання

### Опис

public **parallel\Runtime::close**(): void

Запитує завершення роботи середовища виконання.

> **Примітка**:
>
> Заплановані для виконання завдання будуть виконані до завершення
> роботи.

### Помилки

**Увага**

Викидає parallel\Runtime\Error\Closed, якщо Runtime вже було закрито.
