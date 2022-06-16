- [«
MongoDB\Driver\Monitoring\ServerChangedEvent::getPreviousDescription](mongodb-driver-monitoring-serverchangedevent.getpreviousdescription.md)
- [MongoDB\Driver\Monitoring\ServerClosedEvent
»](class.mongodb-driver-monitoring-serverclosedevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
- Повертає ідентифікатор топології, пов'язаний із цим сервером

# MongoDB\Driver\Monitoring\ServerChangedEvent::getTopologyId

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerChangedEvent::getTopologyId — Повертає
ідентифікатор топології, пов'язаний із цим сервером

### Опис

final public
**MongoDB\Driver\Monitoring\ServerChangedEvent::getTopologyId**():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
