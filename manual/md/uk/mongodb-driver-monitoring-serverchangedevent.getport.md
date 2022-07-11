- [«
MongoDB\Driver\Monitoring\ServerChangedEvent::getNewDescription](mongodb-driver-monitoring-serverchangedevent.getnewdescription.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getPreviousDescription
»](mongodb-driver-monitoring-serverchangedevent.getpreviousdescription.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
- Повертає порт, на якому прослуховується сервер

# MongoDB\Driver\Monitoring\ServerChangedEvent::getPort

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerChangedEvent::getPort — Повертає порт,
на якому прослуховується сервер

### Опис

final public
**MongoDB\Driver\Monitoring\ServerChangedEvent::getPort**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, у якому прослуховується сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
