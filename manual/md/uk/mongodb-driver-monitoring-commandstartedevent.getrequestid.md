- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getOperationId](mongodb-driver-monitoring-commandstartedevent.getoperationid.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getServer
»](mongodb-driver-monitoring-commandstartedevent.getserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає ідентифікатор запиту команди

# MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId — Повертає
ідентифікатор запиту команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId**():
string

Ідентифікатор запиту генерується драйвером і може використовуватись для
зв'язування
[MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
з наступним
[MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
або
[MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор запиту команди.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\CommandFailedEvent::getRequestId()](mongodb-driver-monitoring-commandfailedevent.getrequestid.md) -
Повертає ідентифікатор запиту команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId()](mongodb-driver-monitoring-commandsucceededevent.getrequestid.md) -
Повертає ідентифікатор запиту команди
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
