- [«
MongoDB\Driver\Monitoring\TopologyChangedEvent::getPreviousDescription](mongodb-driver-monitoring-topologychangedevent.getpreviousdescription.md)
- [MongoDB\Driver\Monitoring\TopologyClosedEvent
»](class.mongodb-driver-monitoring-topologyclosedevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
- Повертає ідентифікатор топології

# MongoDB\Driver\Monitoring\TopologyChangedEvent::getTopologyId

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\TopologyChangedEvent::getTopologyId
Повертає ідентифікатор топології

### Опис

final public
**MongoDB\Driver\Monitoring\TopologyChangedEvent::getTopologyId**():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
