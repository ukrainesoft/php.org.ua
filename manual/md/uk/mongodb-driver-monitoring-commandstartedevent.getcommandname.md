- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getCommand](mongodb-driver-monitoring-commandstartedevent.getcommand.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getDatabaseName
»](mongodb-driver-monitoring-commandstartedevent.getdatabasename.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає ім'я команди

# MongoDB\Driver\Monitoring\CommandStartedEvent::getCommandName

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getCommandName
Повертає ім'я команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getCommandName**():
string

Повертає ім'я команди (наприклад, 'find', 'aggregate').

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я команди.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
