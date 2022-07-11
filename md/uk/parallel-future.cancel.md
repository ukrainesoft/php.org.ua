- [«parallel\Future](class.parallel-future.md)
- [parallel\Future::cancelled »](parallel-future.cancelled.md)

- [PHP Manual](index.md)
- [parallel\Future](class.parallel-future.md)
- Припинення

# parallel\Future::cancel

(0.9.0)

parallel\Future::cancel — Припинення

### Опис

public **parallel\Future::cancel**(): bool

Намагається перервати завдання.

> **Примітка**:
>
> Якщо завдання запущено, його буде перервано.

**Увага**

Внутрішні виклики функцій не можуть бути перервані.

### Винятки

**Увага**

Викидає parallel\Future\Error\Killed, якщо
[parallel\Runtime](class.parallel-runtime.md) виконання завдання було
перервано.

**Увага**

Викидає parallel\Future\Error\Cancelled, якщо завдання вже було
перервано.
