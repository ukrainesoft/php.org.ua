- [«ZMQSocket](class.zmqsocket.md)
- [ZMQSocket::connect »](zmqsocket.connect.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Прив'язка сокету

# ZMQSocket::bind

(PECL zmq \>u003d 0.5.0)

ZMQSocket::bind — Прив'язка сокету

### Опис

public **ZMQSocket::bind**(string `$dsn`, bool `$force` u003d **`false`**):
[ZMQSocket](class.zmqsocket.md)

Прив'язка сокета до кінцевої точки. Кінцева точка визначається у форматі
`transport://address`. Як транспорт можуть використовуватися
наступні протоколи: inproc, ipc, tcp, pgm або epgm

### Список параметрів

`dsn`
Кінцева точка, наприклад `transport://address`.

`force`
Вказує, чи намагатиметься підключитися, якщо підключення до зазначеної точки
вже було встановлено.

### Значення, що повертаються

Повертає поточний об'єкт. У разі виникнення помилки викидає
виняток ZMQSocketException.
