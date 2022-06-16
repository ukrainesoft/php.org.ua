- [«
MongoDB\Driver\Monitoring\ServerClosedEvent::getPort](mongodb-driver-monitoring-serverclosedevent.getport.md)
- [MongoDB\Driver\Monitoring\ServerOpeningEvent
»](class.mongodb-driver-monitoring-serveropeningevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
- Повертає ідентифікатор топології, пов'язаний із цим сервером

# MongoDB\Driver\Monitoring\ServerClosedEvent::getTopologyId

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerClosedEvent::getTopologyId — Повертає
ідентифікатор топології, пов'язаний із цим сервером

### Опис

final public
**MongoDB\Driver\Monitoring\ServerClosedEvent::getTopologyId**():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
