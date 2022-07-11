- [«
MongoDB\Driver\Monitoring\CommandSucceededEvent::getDurationMicros](mongodb-driver-monitoring-commandsucceededevent.getdurationmicros.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getReply
»](mongodb-driver-monitoring-commandsucceededevent.getreply.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Повертає ідентифікатор операції команди

# MongoDB\Driver\Monitoring\CommandSucceededEvent::getOperationId

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandSucceededEvent::getOperationId -
Повертає ідентифікатор операції команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandSucceededEvent::getOperationId**():
string

Ідентифікатор операції генерується драйвером і може використовуватись для
зв'язування подій разом, таких як операцій масового запису, які
можуть бути поділені на кілька команд на рівні протоколу.

> **Примітка**: Оскільки кілька команд можуть спільно використовувати
> той самий ідентифікатор операції, недоцільно використовувати його
> для зв'язування об'єктів подій між собою. Натомість слід
> використовувати ідентифікатор запиту, повернутий
> [MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId()](mongodb-driver-monitoring-commandsucceededevent.getrequestid.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор операції команди.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\CommandStartedEvent::getOperationId()](mongodb-driver-monitoring-commandstartedevent.getoperationid.md) -
Повертає ідентифікатор операції команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId()](mongodb-driver-monitoring-commandsucceededevent.getrequestid.md) -
Повертає ідентифікатор запиту команди
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
