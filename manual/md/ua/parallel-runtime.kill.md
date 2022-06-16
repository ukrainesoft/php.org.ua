- [« parallel\Runtime::close](parallel-runtime.close.md)
- [parallel\Future »](class.parallel-future.md)

- [PHP Manual](index.md)
- [parallel\Runtime](class.parallel-runtime.md)
- З'єднання під час виконання

# parallel\Runtime::kill

(0.8.0)

parallel\Runtime::kill — З'єднання під час виконання

### Опис

public **parallel\Runtime::kill**(): void

Намагається примусово завершити роботу середовища виконання.

> **Примітка**:
>
> Заплановані для виконання завдання не будуть виконані, поточне завдання
> буде перервано.

**Увага**

Внутрішні виклики функцій не можуть бути перервані.

### Помилки

**Увага**

Викидає parallel\Runtime\Error\Closed, якщо Runtime вже було закрито.
