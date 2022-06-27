- [«
MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getCommandName
»](mongodb-driver-monitoring-commandstartedevent.getcommandname.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає документ команди

# MongoDB\Driver\Monitoring\CommandStartedEvent::getCommand

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getCommand — Повертає
документ команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getCommand**(): object

Документ відповіді буде перетворено з BSON в PHP, використовуючи правила
[десеріалізації](mongodb.persistence.deserialization.md) (наприклад,
документи BSON будуть перетворені на stdClass).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає документ команди як об'єкт **stdClass**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
- [Постійні дані](mongodb.persistence.md)
