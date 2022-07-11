- [« parallel\Events::addChannel](parallel-events.addchannel.md)
- [parallel\Events::remove »](parallel-events.remove.md)

- [PHP Manual](index.md)
- [parallel\Events](class.parallel-events.md)
- Цілі

# parallel\Events::addFuture

(0.9.0)

parallel\Events::addFuture — Цілі

### Опис

public **parallel\Events::addFuture**(string `$name`,
[parallel\Future](class.parallel-future.md) `$future`): void

Стежить за подіями у заданому `future`

### Помилки

**Увага**

Викидає parallel\Events\Error\Existence, якщо ціль з даним ім'ям
вже було додано.
