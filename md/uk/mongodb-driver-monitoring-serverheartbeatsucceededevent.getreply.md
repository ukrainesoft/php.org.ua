- [«
MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getPort](mongodb-driver-monitoring-serverheartbeatsucceededevent.getport.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited
»](mongodb-driver-monitoring-serverheartbeatsucceededevent.isawaited.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- Повертає документ відповіді heartbeat

# MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getReply

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getReply
Повертає документ відповіді heartbeat

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getReply**():
object

Документ відповіді буде перетворено з BSON на PHP з використанням правил
[десеріалізації](mongodb.persistence.deserialization.md) за замовчуванням
(наприклад, документи BSON будуть перетворені на stdClass).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає документ відповіді heartbeat як об'єкт **stdClass**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
- [Постійні дані](mongodb.persistence.md)
