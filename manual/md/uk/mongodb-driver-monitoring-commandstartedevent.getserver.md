- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId](mongodb-driver-monitoring-commandstartedevent.getrequestid.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getServerConnectionId
»](mongodb-driver-monitoring-commandstartedevent.getserverconnectionid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає сервер, на якому було виконано команду

# MongoDB\Driver\Monitoring\CommandStartedEvent::getServer

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getServer — Повертає
сервер, на якому було виконано команду

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getServer**():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md), на
якому було виконано команду.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md), на
якому було виконано команду.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\CommandFailedEvent::getServer()](mongodb-driver-monitoring-commandfailedevent.getserver.md) -
Повертає сервер, на якому було виконано команду
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer()](mongodb-driver-monitoring-commandsucceededevent.getserver.md) -
Повертає сервер, на якому було виконано команду
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
