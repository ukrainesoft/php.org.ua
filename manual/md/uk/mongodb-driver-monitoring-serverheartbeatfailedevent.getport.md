- [«
MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getHost](mongodb-driver-monitoring-serverheartbeatfailedevent.gethost.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::isAwaited
»](mongodb-driver-monitoring-serverheartbeatfailedevent.isawaited.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
- Повертає порт, на якому прослуховується сервер

# MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getPort

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getPort
Повертає порт, на якому прослуховується сервер

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getPort**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, у якому прослуховується сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
