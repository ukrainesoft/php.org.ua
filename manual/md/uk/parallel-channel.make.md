- [« parallel\Channel::\_\_construct](parallel-channel.construct.md)
- [parallel\Channel::open »](parallel-channel.open.md)

- [PHP Manual](index.md)
- [parallel\Channel](class.parallel-channel.md)
- Доступ

# parallel\Channel::make

(0.9.0)

parallel\Channel::make — Доступ

### Опис

public **parallel\Channel::make**(string `$name`): Channel

Створює небуферизований канал із заданим ім'ям

public **parallel\Channel::make**(string `$name`, int `$capacity`):
Channel

Створює буферизований канал із заданим ім'ям та ємністю.

### Список параметрів

`name`
Назва каналу.

`capacity`
Може бути Channel::Infinite або позитивним цілим числом

### Помилки

**Увага**

Якщо канал вже існує, викидає parallel\Channel\Error\Existence.
