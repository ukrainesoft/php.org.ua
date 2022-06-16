- [« parallel\Events::setInput](parallel-events.setinput.md)
- [parallel\Events::addFuture »](parallel-events.addfuture.md)

- [PHP Manual](index.md)
- [parallel\Events](class.parallel-events.md)
- Цілі

# parallel\Events::addChannel

(0.9.0)

parallel\Events::addChannel — Цілі

### Опис

public
**parallel\Events::addChannel**([parallel\Channel](class.parallel-channel.md)
`$channel`): void

Стежить за подіями у заданому `channel`

### Помилки

**Увага**

Викидає parallel\Events\Error\Existence, якщо канал вже був
додано.
