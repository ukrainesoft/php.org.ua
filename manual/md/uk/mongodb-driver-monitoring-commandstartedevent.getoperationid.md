- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getDatabaseName](mongodb-driver-monitoring-commandstartedevent.getdatabasename.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId
»](mongodb-driver-monitoring-commandstartedevent.getrequestid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає ідентифікатор операції команди

# MongoDB\Driver\Monitoring\CommandStartedEvent::getOperationId

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getOperationId
Повертає ідентифікатор операції команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getOperationId**():
string

Ідентифікатор операції генерується драйвером і може використовуватись для
зв'язування подій разом, таких як операцій масового запису, які
можуть бути поділені на кілька команд на рівні протоколу.

> **Примітка**: Оскільки кілька команд можуть спільно використовувати
> той самий ідентифікатор операції, недоцільно використовувати його
> для зв'язування об'єктів подій між собою. Натомість слід
> використовувати ідентифікатор запиту, повернутий
> [MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId()](mongodb-driver-monitoring-commandstartedevent.getrequestid.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор операції команди.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\CommandFailedEvent::getOperationId()](mongodb-driver-monitoring-commandfailedevent.getoperationid.md) -
Повертає ідентифікатор операції команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getOperationId()](mongodb-driver-monitoring-commandsucceededevent.getoperationid.md) -
Повертає ідентифікатор операції команди
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId()](mongodb-driver-monitoring-commandstartedevent.getrequestid.md) -
Повертає ідентифікатор запиту команди
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
