- [«
MongoDB\Driver\Monitoring\CommandSucceededEvent::getOperationId](mongodb-driver-monitoring-commandsucceededevent.getoperationid.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId
»](mongodb-driver-monitoring-commandsucceededevent.getrequestid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Повертає документ відповіді команди

# MongoDB\Driver\Monitoring\CommandSucceededEvent::getReply

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandSucceededEvent::getReply — Повертає
документ відповіді команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandSucceededEvent::getReply**(): object

Документ відповіді буде перетворено з BSON на PHP з використанням правил
[десеріалізації](mongodb.persistence.deserialization.md) (наприклад,
документи BSON будуть перетворені на stdClass).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає документ відповіді команди як об'єкт **stdClass**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
- [Постійні дані](mongodb.persistence.md)
