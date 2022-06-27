- [«ZMQ::\_\_construct](zmq.construct.md)
- [ZMQContext::\_\_construct »](zmqcontext.construct.md)

- [PHP Manual](index.md)
- [Обмін повідомленнями 0MQ](book.zmq.md)
- Клас ZMQContext

# Клас ZMQContext

(PECL zmq \>u003d 0.5.0)

## Вступ

## Огляд класів

class **ZMQContext** {

/\* Методи \*/

public [\_\_construct](zmqcontext.construct.md)(int `$io_threads` u003d 1,
bool `$is_persistent` u003d **`true`**)

public [getOpt](zmqcontext.getopt.md)(string `$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getSocket](zmqcontext.getsocket.md)(int `$type`, string
`$persistent_id` u003d **`null`**, [callable](language.types.callable.md)
`$on_new_socket` u003d **`null`**): [ZMQSocket](class.zmqsocket.md)

public [isPersistent](zmqcontext.ispersistent.md)(): bool

public [setOpt](zmqcontext.setopt.md)(int `$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): [ZMQContext](class.zmqcontext.md)

}

## Зміст

- [ZMQContext::\_\_construct](zmqcontext.construct.md) - Конструктор
ZMQContext
- [ZMQContext::getOpt](zmqcontext.getopt.md) — Отримати опцію
контексту
- [ZMQContext::getSocket](zmqcontext.getsocket.md) — Створює новий
сокет
- [ZMQContext::isPersistent](zmqcontext.ispersistent.md) — Є
чи контекст постійним
- [ZMQContext::setOpt](zmqcontext.setopt.md) — Встановити опцію
сокету
