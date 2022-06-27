- [«
MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatsucceededevent.isawaited.md)
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getNewDescription
»](mongodb-driver-monitoring-topologychangedevent.getnewdescription.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\TopologyChangedEvent

# Клас MongoDB\Driver\Monitoring\TopologyChangedEvent

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\TopologyChangedEvent** інкапсулює
інформацію про зміненому описі топології.

## Огляд класів

final class **MongoDB\Driver\Monitoring\TopologyChangedEvent** {

/\* Методи \*/

final public
[getNewDescription](mongodb-driver-monitoring-topologychangedevent.getnewdescription.md)():
[MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)

final public
[getPreviousDescription](mongodb-driver-monitoring-topologychangedevent.getpreviousdescription.md)():
[MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)

final public
[getTopologyId](mongodb-driver-monitoring-topologychangedevent.gettopologyid.md)():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

}

## Зміст

- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getNewDescription](mongodb-driver-monitoring-topologychangedevent.getnewdescription.md)
— Повертає новий опис топології
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getPreviousDescription](mongodb-driver-monitoring-topologychangedevent.getpreviousdescription.md)
— Повертає попередній опис топології
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getTopologyId](mongodb-driver-monitoring-topologychangedevent.gettopologyid.md)
- Повертає ідентифікатор топології
