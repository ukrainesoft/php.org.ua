- [«
MongoDB\Driver\Monitoring\ServerChangedEvent::getPort](mongodb-driver-monitoring-serverchangedevent.getport.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getTopologyId
»](mongodb-driver-monitoring-serverchangedevent.gettopologyid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
- Повертає попередній опис сервера

# MongoDB\Driver\Monitoring\ServerChangedEvent::getPreviousDescription

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerChangedEvent::getPreviousDescription
Повертає попередній опис сервера

### Опис

final public
**MongoDB\Driver\Monitoring\ServerChangedEvent::getPreviousDescription**():
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає попередній опис
([MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md))
сервера.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
