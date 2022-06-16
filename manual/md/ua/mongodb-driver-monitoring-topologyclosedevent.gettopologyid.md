- [«
MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md)
- [MongoDB\Driver\Monitoring\TopologyOpeningEvent
»](class.mongodb-driver-monitoring-topologyopeningevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md)
- Повертає ідентифікатор топології

# MongoDB\Driver\Monitoring\TopologyClosedEvent::getTopologyId

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\TopologyClosedEvent::getTopologyId -
Повертає ідентифікатор топології

### Опис

final public
**MongoDB\Driver\Monitoring\TopologyClosedEvent::getTopologyId**():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
