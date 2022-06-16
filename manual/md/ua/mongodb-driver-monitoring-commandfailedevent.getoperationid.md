- [«
MongoDB\Driver\Monitoring\CommandFailedEvent::getError](mongodb-driver-monitoring-commandfailedevent.geterror.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getReply
»](mongodb-driver-monitoring-commandfailedevent.getreply.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Повертає ідентифікатор операції команди

# MongoDB\Driver\Monitoring\CommandFailedEvent::getOperationId

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandFailedEvent::getOperationId
Повертає ідентифікатор операції команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandFailedEvent::getOperationId**():
string

Ідентифікатор операції генерується драйвером і може використовуватись для
зв'язування подій разом, таких як операцій масового запису, які
можуть бути поділені на кілька команд на рівні протоколу.

> **Примітка**: Оскільки кілька команд можуть спільно використовувати
> той самий ідентифікатор операції, недоцільно використовувати його
> для зв'язування об'єктів подій між собою. Натомість слід
> використовувати ідентифікатор запиту, повернутий
> [MongoDB\Driver\Monitoring\CommandFailedEvent::getRequestId()](mongodb-driver-monitoring-commandfailedevent.getrequestid.md).

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
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getRequestId()](mongodb-driver-monitoring-commandfailedevent.getrequestid.md) -
Повертає ідентифікатор запиту команди
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
