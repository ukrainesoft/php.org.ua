- [«ZMQDevice](class.zmqdevice.md)
- [ZMQDevice::getIdleTimeout »](zmqdevice.getidletimeout.md)

- [PHP Manual](index.md)
- [ZMQDevice](class.zmqdevice.md)
- Створює новий пристрій

# ZMQDevice::\_\_construct

(PECL zmq \>u003d 0.5.0)

ZMQDevice::\_\_construct — Створює новий пристрій

### Опис

public **ZMQDevice::\_\_construct**([ZMQSocket](class.zmqsocket.md)
`$frontend`, [ZMQSocket](class.zmqsocket.md) `$backend`,
[ZMQSocket](class.zmqsocket.md) `$listener` u003d ?)

Пристрої ØMQ можуть представляти адреси, служби, черги або будь-яку
іншу абстракцію, яку ви хочете визначити над шарами повідомлень та
сокетів.

### Список параметрів

`frontend`
Фронтенд пристрою. Зазвичай сюди надходять повідомлення.

`backend`
Бекенд пристрою. Зазвичай звідси повідомлення надсилаються.

`listener`
Сокет слухач, який приймає копії всіх повідомлень, які
приймаються чи передаються. Тип сокету має бути SUB, PULL або DEALER.

### Значення, що повертаються

Виклик цього методу готує пристрій. Зазвичай пристрої
використовуються для дуже довгограючих завдань, так що викликати цей метод
із інтерактивних скриптів не рекомендується. Якщо не вдалося
запустити пристрій, викидається виняток ZMQDeviceException.
