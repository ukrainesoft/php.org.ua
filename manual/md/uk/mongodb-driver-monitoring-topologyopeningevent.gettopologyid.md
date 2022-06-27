- [«
MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber
»](class.mongodb-driver-monitoring-commandsubscriber.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md)
- Повертає ідентифікатор топології

# MongoDB\Driver\Monitoring\TopologyOpeningEvent::getTopologyId

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\TopologyOpeningEvent::getTopologyId -
Повертає ідентифікатор топології

### Опис

final public
**MongoDB\Driver\Monitoring\TopologyOpeningEvent::getTopologyId**():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
