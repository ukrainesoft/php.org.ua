- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getCommandName](mongodb-driver-monitoring-commandstartedevent.getcommandname.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getOperationId
»](mongodb-driver-monitoring-commandstartedevent.getoperationid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає базу даних, на якій виконувалась команда

# MongoDB\Driver\Monitoring\CommandStartedEvent::getDatabaseName

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getDatabaseName
Повертає базу даних, на якій виконувалась команда

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getDatabaseName**():
string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає базу даних, на якій було виконано команду.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
