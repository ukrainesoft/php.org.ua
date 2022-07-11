- [«
MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getDurationMicros](mongodb-driver-monitoring-serverheartbeatfailedevent.getdurationmicros.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getHost
»](mongodb-driver-monitoring-serverheartbeatfailedevent.gethost.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
- Повертає виняток, пов'язаний із невдалим виконанням heartbeat

# MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getError

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getError —
Повертає виняток, пов'язаний із невдалим виконанням heartbeat

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getError**():
[Exception](class.exception.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає виняток ([Exception](class.exception.md)), пов'язане з
невдалим виконанням heartbeat.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
