- [«
MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId](mongodb-driver-monitoring-commandsucceededevent.getrequestid.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getServerConnectionId
»](mongodb-driver-monitoring-commandsucceededevent.getserverconnectionid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Повертає сервер, на якому було виконано команду

# MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer — Повертає
сервер, на якому було виконано команду

### Опис

final public
**MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer**():
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
- [MongoDB\Driver\Cursor::getServer()](mongodb-driver-cursor.getserver.md) -
Повертає сервер, пов'язаний із курсором
- [MongoDB\Driver\WriteResult::getServer()](mongodb-driver-writeresult.getserver.md) -
Повертає сервер, пов'язаний із цим результатом запису
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
