- [«
MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getHost](mongodb-driver-monitoring-serverheartbeatsucceededevent.gethost.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getReply
»](mongodb-driver-monitoring-serverheartbeatsucceededevent.getreply.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- Повертає порт, на якому прослуховується сервер

# MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getPort

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getPort
Повертає порт, на якому прослуховується сервер

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getPort**():
int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, у якому прослуховується сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
