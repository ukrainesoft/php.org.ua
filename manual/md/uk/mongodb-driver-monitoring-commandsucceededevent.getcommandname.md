- [«
MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getDurationMicros
»](mongodb-driver-monitoring-commandsucceededevent.getdurationmicros.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Повертає ім'я команди

# MongoDB\Driver\Monitoring\CommandSucceededEvent::getCommandName

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandSucceededEvent::getCommandName
Повертає ім'я команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandSucceededEvent::getCommandName**():
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
