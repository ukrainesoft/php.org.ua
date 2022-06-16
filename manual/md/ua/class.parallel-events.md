- [« parallel\Channel::close](parallel-channel.close.md)
- [parallel\Events::setBlocking »](parallel-events.setblocking.md)

- [PHP Manual](index.md)
- [parallel](book.parallel.md)
- Клас parallel\Events

# Клас parallel\Events

(0.9.0)

## Цикл подій

Цикл подій відстежує стан наборів об'єктів Future та/або Channel
(цілей) для виконання операцій читання
([parallel\Future::value()](parallel-future.value.md),
[parallel\Channel::recv()](parallel-channel.recv.md)) та записи
([parallel\Channel::send()](parallel-channel.send.md)) у міру того,
як цілі стають доступними та операції можуть виконуватися без
блокування циклу подій.

## Огляд класів

final class **parallel\Events** implements
[Countable](class.countable.md), [Traversable](class.traversable.md)
{

/\* Вхідні дані \*/

public [setInput](parallel-events.setinput.md)(Input `$input`): void

/\* Цілі \*/

public
[addChannel](parallel-events.addchannel.md)([parallel\Channel](class.parallel-channel.md)
`$channel`): void

public [addFuture](parallel-events.addfuture.md)(string `$name`,
[parallel\Future](class.parallel-future.md) `$future`): void

public [remove](parallel-events.remove.md)(string `$target`): void

/\* Поведінка \*/

public [setBlocking](parallel-events.setblocking.md)(bool
`$blocking`): void

public [setTimeout](parallel-events.settimeout.md)(int `$timeout`):
void

/\* Опитування \*/

public [poll](parallel-events.poll.md)():
?[parallel\Events\Event](class.parallel-events-event.md)

}

## Зміст

- [parallel\Events::setBlocking](parallel-events.setblocking.md) -
Поведінка
- [parallel\Events::setTimeout](parallel-events.settimeout.md) -
Поведінка
- [parallel\Events::setInput](parallel-events.setinput.md) — Вхід
- [parallel\Events::addChannel](parallel-events.addchannel.md) -
Цілі
- [parallel\Events::addFuture](parallel-events.addfuture.md) - Цілі
- [parallel\Events::remove](parallel-events.remove.md) - Цілі
- [parallel\Events::poll](parallel-events.poll.md) — Опитування
