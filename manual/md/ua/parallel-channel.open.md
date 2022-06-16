- [« parallel\Channel::make](parallel-channel.make.md)
- [parallel\Channel::recv »](parallel-channel.recv.md)

- [PHP Manual](index.md)
- [parallel\Channel](class.parallel-channel.md)
- Доступ

# parallel\Channel::open

(0.9.0)

parallel\Channel::open — Доступ

### Опис

public **parallel\Channel::open**(string `$name`): Channel

Відкриває канал із заданим ім'ям

### Помилки

**Увага**

Якщо канал не існує, викидає parallel\Channel\Error\Existence.
