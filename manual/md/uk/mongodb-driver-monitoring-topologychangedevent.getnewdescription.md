- [«
MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getPreviousDescription
»](mongodb-driver-monitoring-topologychangedevent.getpreviousdescription.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
- Повертає новий опис топології

# MongoDB\Driver\Monitoring\TopologyChangedEvent::getNewDescription

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\TopologyChangedEvent::getNewDescription -
Повертає новий опис топології

### Опис

final public
**MongoDB\Driver\Monitoring\TopologyChangedEvent::getNewDescription**():
[MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає новий опис
([MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md))
топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
