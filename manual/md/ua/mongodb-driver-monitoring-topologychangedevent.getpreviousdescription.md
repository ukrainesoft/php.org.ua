- [«
MongoDB\Driver\Monitoring\TopologyChangedEvent::getNewDescription](mongodb-driver-monitoring-topologychangedevent.getnewdescription.md)
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getTopologyId
»](mongodb-driver-monitoring-topologychangedevent.gettopologyid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
- Повертає попередній опис топології

# MongoDB\Driver\Monitoring\TopologyChangedEvent::getPreviousDescription

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\TopologyChangedEvent::getPreviousDescription -
Повертає попередній опис топології

### Опис

final public
**MongoDB\Driver\Monitoring\TopologyChangedEvent::getPreviousDescription**():
[MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає попередній опис
([MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md))
топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
