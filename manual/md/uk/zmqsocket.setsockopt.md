- [«ZMQSocket::sendmulti](zmqsocket.sendmulti.md)
- [ZMQSocket::unbind »](zmqsocket.unbind.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Встановити опцію сокету

# ZMQSocket::setSockOpt

(PECL zmq \>u003d 0.5.0)

ZMQSocket::setSockOpt — Встановити опцію сокету

### Опис

public **ZMQSocket::setSockOpt**(int `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [ZMQSocket](class.zmqsocket.md)

Встановлює опцію сокету ZMQ. Тип параметра `value` залежить від
значення параметра `key`. Дивіться [Типи констант
ZMQ](class.zmq.md#zmq.constants).

### Список параметрів

`key`
Одна з констант **`ZMQ::SOCKOPT_*`**.

`value`
Значення, що встановлюється.

### Значення, що повертаються

Повертає поточний об'єкт. У разі виникнення помилки викидає
виняток ZMQSocketException.
