- [«ZMQSocket::setSockOpt](zmqsocket.setsockopt.md)
- [ZMQPoll »](class.zmqpoll.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Відв'язати сокет

# ZMQSocket::unbind

(PECL zmq \>u003d 1.0.4)

ZMQSocket::unbind — Відв'язати сокет

### Опис

public **ZMQSocket::unbind**(string `$dsn`):
[ZMQSocket](class.zmqsocket.md)

Відв'язує сокет від кінцевої точки. Кінцева точка визначається в
форматі `transport://address`, де transport може бути одним з
наступних значень: inproc, ipc, tcp, pgm чи epgm.

### Список параметрів

`dsn`
Попередньо прив'язана кінцева точка, наприклад
`transport://address`.

### Значення, що повертаються

Повертає поточний об'єкт. У разі виникнення помилки викидає
виняток ZMQSocketException.
