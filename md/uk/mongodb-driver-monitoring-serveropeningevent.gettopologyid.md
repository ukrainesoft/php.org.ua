- [«
MongoDB\Driver\Monitoring\ServerOpeningEvent::getPort](mongodb-driver-monitoring-serveropeningevent.getport.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent
»](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
- Returns the topology ID associated with this server

# MongoDB\Driver\Monitoring\ServerOpeningEvent::getTopologyId

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerOpeningEvent::getTopologyId — Returns
the topology ID associated with this server

### Опис

final public
**MongoDB\Driver\Monitoring\ServerOpeningEvent::getTopologyId**():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Returns the topology ID.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
