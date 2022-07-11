- [«
MongoDB\Driver\Monitoring\ServerChangedEvent::getHost](mongodb-driver-monitoring-serverchangedevent.gethost.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getPort
»](mongodb-driver-monitoring-serverchangedevent.getport.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
- Повертає новий опис сервера

# MongoDB\Driver\Monitoring\ServerChangedEvent::getNewDescription

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerChangedEvent::getNewDescription -
Повертає новий опис сервера

### Опис

final public
**MongoDB\Driver\Monitoring\ServerChangedEvent::getNewDescription**():
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає новий опис
([MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md))
сервера.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
