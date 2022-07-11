- [«
MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getHost](mongodb-driver-monitoring-serverheartbeatstartedevent.gethost.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::isAwaited
»](mongodb-driver-monitoring-serverheartbeatstartedevent.isawaited.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md)
- Повертає порт, на якому прослуховується сервер

# MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getPort

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getPort
Повертає порт, на якому прослуховується сервер

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getPort**():
int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, у якому прослуховується сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
