- [«ZMQSocket::\_\_construct](zmqsocket.construct.md)
- [ZMQSocket::getEndpoints »](zmqsocket.getendpoints.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Вимкнути сокет

# ZMQSocket::disconnect

(PECL zmq \>u003d 1.0.4)

ZMQSocket::disconnect — Вимкнути сокет

### Опис

public **ZMQSocket::disconnect**(string `$dsn`):
[ZMQSocket](class.zmqsocket.md)

Видалити раніше створене з'єднання сокета з кінцевою точкою. Кінцева
точка визначається у форматі `transport://address`, де transport може
бути одним із наступних значень: inproc, ipc, tcp, pgm або epgm.

### Список параметрів

`dsn`
Кінцева точка, наприклад `transport://address`.

### Значення, що повертаються

Повертає поточний об'єкт. У разі виникнення помилки викидає
виняток ZMQSocketException.
