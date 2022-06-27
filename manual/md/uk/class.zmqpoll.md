- [«ZMQSocket::unbind](zmqsocket.unbind.md)
- [ZMQPoll::add »](zmqpoll.add.md)

- [PHP Manual](index.md)
- [Обмін повідомленнями 0MQ](book.zmq.md)
- Клас ZMQPoll

# Клас ZMQPoll

(PECL zmq \>u003d 0.5.0)

## Вступ

## Огляд класів

class **ZMQPoll** {

/\* Методи \*/

public
[add](zmqpoll.add.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$entry`, int `$type`): string

public [clear](zmqpoll.clear.md)(): [ZMQPoll](class.zmqpoll.md)

public [count](zmqpoll.count.md)(): int

public [getLastErrors](zmqpoll.getlasterrors.md)(): array

public [poll](zmqpoll.poll.md)(array `&$readable`, array `&$writable`,
int `$timeout` u003d -1): int

public
[remove](zmqpoll.remove.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$item`): bool

}

## Зміст

- [ZMQPoll::add](zmqpoll.add.md) — Додати елемент у пул опитування
- [ZMQPoll::clear](zmqpoll.clear.md) — Очистити пул опитування
- [ZMQPoll::count](zmqpoll.count.md) — Кількість елементів у пулі
опитування
- [ZMQPoll::getLastErrors](zmqpoll.getlasterrors.md) — Повертає
помилки останнього опитування
- [ZMQPoll::poll](zmqpoll.poll.md) — Опитати всі елементи пулу
- [ZMQPoll::remove](zmqpoll.remove.md) — Видалити елемент із пулу
опитування
