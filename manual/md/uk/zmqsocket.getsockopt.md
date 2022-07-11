- [«ZMQSocket::getSocketType](zmqsocket.getsockettype.md)
- [ZMQSocket::isPersistent »](zmqsocket.ispersistent.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Отримати опцію сокету

# ZMQSocket::getSockOpt

(PECL zmq \>u003d 0.5.0)

ZMQSocket::getSockOpt — Отримати опцію сокету

### Опис

public **ZMQSocket::getSockOpt**(string `$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає значення опції сокету.

### Список параметрів

`key`
Ціле число, яке представляє опцію сокету. Дивіться константи
**`ZMQ::SOCKOPT_*`**.

### Значення, що повертаються

Повертає string або int, залежно від значення параметра `key`.
У разі помилки викидає виняток ZMQSocketException.
