- [« parallel\Channel::recv](parallel-channel.recv.md)
- [parallel\Channel::close »](parallel-channel.close.md)

- [PHP Manual](index.md)
- [parallel\Channel](class.parallel-channel.md)
-   Спільне використання

# parallel\Channel::send

(0.9.0)

parallel\Channel::send — Спільне використання

### Опис

public
**parallel\Channel::send**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Відправляє задане значення каналу

### Помилки

**Увага**

Викидає parallel\Channel\Error\Closed, якщо канал закритий.

**Увага**

Викидає parallel\Channel\Error\IllegalValue, якщо значення
неприпустимо.
