- [«
MongoDB\Driver\Monitoring\CommandSucceededEvent::getReply](mongodb-driver-monitoring-commandsucceededevent.getreply.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer
»](mongodb-driver-monitoring-commandsucceededevent.getserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Повертає ідентифікатор запиту команди

# MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId
Повертає ідентифікатор запиту команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId**():
string

Ідентифікатор запиту генерується драйвером і може використовуватись для
зв'язування
[MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
з попереднім
[MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор запиту команди.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId()](mongodb-driver-monitoring-commandstartedevent.getrequestid.md) -
Повертає ідентифікатор запиту команди
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
