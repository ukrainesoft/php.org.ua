- [«
MongoDB\Driver\Monitoring\CommandFailedEvent::getRequestId](mongodb-driver-monitoring-commandfailedevent.getrequestid.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getServerConnectionId
»](mongodb-driver-monitoring-commandfailedevent.getserverconnectionid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Повертає сервер, на якому було виконано команду

# MongoDB\Driver\Monitoring\CommandFailedEvent::getServer

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandFailedEvent::getServer — Повертає
сервер, на якому було виконано команду

### Опис

final public
**MongoDB\Driver\Monitoring\CommandFailedEvent::getServer**():
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

- [MongoDB\Driver\Monitoring\CommandStartedEvent::getServer()](mongodb-driver-monitoring-commandstartedevent.getserver.md) -
Повертає сервер, на якому було виконано команду
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
