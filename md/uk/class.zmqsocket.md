- [«ZMQContext::setOpt](zmqcontext.setopt.md)
- [ZMQSocket::bind »](zmqsocket.bind.md)

- [PHP Manual](index.md)
- [Обмін повідомленнями 0MQ](book.zmq.md)
- Клас ZMQSocket

# Клас ZMQSocket

(PECL zmq \>u003d 0.5.0)

## Вступ

## Огляд класів

class **ZMQSocket** {

/\* Методи \*/

public [bind](zmqsocket.bind.md)(string `$dsn`, bool `$force` u003d
**`false`**): [ZMQSocket](class.zmqsocket.md)

public [connect](zmqsocket.connect.md)(string `$dsn`, bool `$force` u003d
**`false`**): [ZMQSocket](class.zmqsocket.md)

public [\_\_construct](zmqsocket.construct.md)(
[ZMQContext](class.zmqcontext.md) `$context`,
int `$type`,
string `$persistent_id` u003d **`null`**,
[callable](language.types.callable.md) `$on_new_socket` u003d
**`null`**
)

public [disconnect](zmqsocket.disconnect.md)(string `$dsn`):
[ZMQSocket](class.zmqsocket.md)

public [getEndpoints](zmqsocket.getendpoints.md)(): array

public [getPersistentId](zmqsocket.getpersistentid.md)(): string

public [getSocketType](zmqsocket.getsockettype.md)(): int

public [getSockOpt](zmqsocket.getsockopt.md)(string `$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [isPersistent](zmqsocket.ispersistent.md)(): bool

public [recv](zmqsocket.recv.md)(int `$mode` u003d 0): string

public [recvMulti](zmqsocket.recvmulti.md)(int `$mode` u003d 0): array

public [send](zmqsocket.send.md)(string `$message`, int `$mode` u003d 0):
[ZMQSocket](class.zmqsocket.md)

public [sendmulti](zmqsocket.sendmulti.md)(array `$message`, int
`$mode` u003d 0): [ZMQSocket](class.zmqsocket.md)

public [setSockOpt](zmqsocket.setsockopt.md)(int `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [ZMQSocket](class.zmqsocket.md)

public [unbind](zmqsocket.unbind.md)(string `$dsn`):
[ZMQSocket](class.zmqsocket.md)

}

## Зміст

- [ZMQSocket::bind](zmqsocket.bind.md) — Прив'язка сокету
- [ZMQSocket::connect](zmqsocket.connect.md) — Підключення до сокету
- [ZMQSocket::\_\_construct](zmqsocket.construct.md) - Конструктор
класу ZMQSocket
- [ZMQSocket::disconnect](zmqsocket.disconnect.md) — Вимкнути сокет
- [ZMQSocket::getEndpoints](zmqsocket.getendpoints.md) — Отримати
список кінцевих точок
- [ZMQSocket::getPersistentId](zmqsocket.getpersistentid.md) -
Отримати ідентифікатор постійного сокету
- [ZMQSocket::getSocketType](zmqsocket.getsockettype.md) — Отримати
тип сокету
- [ZMQSocket::getSockOpt](zmqsocket.getsockopt.md) — Отримати опцію
сокету
- [ZMQSocket::isPersistent](zmqsocket.ispersistent.md) — Визначити,
чи є сокет постійним
- [ZMQSocket::recv](zmqsocket.recv.md) — Отримати повідомлення
- [ZMQSocket::recvMulti](zmqsocket.recvmulti.md) — Отримати
повідомлення, що складається з кількох частин
- [ZMQSocket::send](zmqsocket.send.md) — Надіслати повідомлення
- [ZMQSocket::sendmulti](zmqsocket.sendmulti.md) — Надіслати
повідомлення, що складається з кількох частин
- [ZMQSocket::setSockOpt](zmqsocket.setsockopt.md) — Встановити
опцію сокету
- [ZMQSocket::unbind](zmqsocket.unbind.md) — Відв'язати сокет
