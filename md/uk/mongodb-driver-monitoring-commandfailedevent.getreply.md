- [«
MongoDB\Driver\Monitoring\CommandFailedEvent::getOperationId](mongodb-driver-monitoring-commandfailedevent.getoperationid.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getRequestId
»](mongodb-driver-monitoring-commandfailedevent.getrequestid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Повертає документ відповіді команди

# MongoDB\Driver\Monitoring\CommandFailedEvent::getReply

(mongodb \>u003d1.5.0)

MongoDB\Driver\Monitoring\CommandFailedEvent::getReply — Повертає
документ відповіді команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandFailedEvent::getReply**(): object

У відповідь документ буде перетворено з BSON в PHP з використанням
правил [десеріалізації](mongodb.persistence.deserialization.md) за
замовчуванням (наприклад, документи BSON будуть перетворені на stdClass).

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
