- [«ZMQPoll::remove](zmqpoll.remove.md)
- [ZMQDevice::\_\_construct »](zmqdevice.construct.md)

- [PHP Manual](index.md)
- [Обмін повідомленнями 0MQ](book.zmq.md)
- Клас ZMQDevice

# Клас ZMQDevice

(PECL zmq \>u003d 0.5.0)

## Вступ

## Огляд класів

class **ZMQDevice** {

/\* Методи \*/

public
[\_\_construct](zmqdevice.construct.md)([ZMQSocket](class.zmqsocket.md)
`$frontend`, [ZMQSocket](class.zmqsocket.md) `$backend`,
[ZMQSocket](class.zmqsocket.md) `$listener` u003d ?)

public [getIdleTimeout](zmqdevice.getidletimeout.md)():
[ZMQDevice](class.zmqdevice.md)

public [getTimerTimeout](zmqdevice.gettimertimeout.md)():
[ZMQDevice](class.zmqdevice.md)

public [run](zmqdevice.run.md)(): void

public
[setIdleCallback](zmqdevice.setidlecallback.md)([callable](language.types.callable.md)
`$cb_func`, int `$timeout`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$user_data` u003d ?): [ZMQDevice](class.zmqdevice.md)

public [setIdleTimeout](zmqdevice.setidletimeout.md)(int `$timeout`):
[ZMQDevice](class.zmqdevice.md)

public
[setTimerCallback](zmqdevice.settimercallback.md)([callable](language.types.callable.md)
`$cb_func`, int `$timeout`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$user_data` u003d ?): [ZMQDevice](class.zmqdevice.md)

public [setTimerTimeout](zmqdevice.settimertimeout.md)(int
`$timeout`): [ZMQDevice](class.zmqdevice.md)

}

## Зміст

- [ZMQDevice::\_\_construct](zmqdevice.construct.md) — Створює нове
пристрій
- [ZMQDevice::getIdleTimeout](zmqdevice.getidletimeout.md) -
Отримати час очікування бездіяльності
- [ZMQDevice::getTimerTimeout](zmqdevice.gettimertimeout.md) -
Отримати час очікування таймера
- [ZMQDevice::run](zmqdevice.run.md) — Запуск нового пристрою
- [ZMQDevice::setIdleCallback](zmqdevice.setidlecallback.md) -
Встановити callback-функцію бездіяльності
- [ZMQDevice::setIdleTimeout](zmqdevice.setidletimeout.md) -
Встановити час очікування простою
- [ZMQDevice::setTimerCallback](zmqdevice.settimercallback.md) -
Встановити callback-функцію за таймером
- [ZMQDevice::setTimerTimeout](zmqdevice.settimertimeout.md) -
Встановити час очікування таймера
