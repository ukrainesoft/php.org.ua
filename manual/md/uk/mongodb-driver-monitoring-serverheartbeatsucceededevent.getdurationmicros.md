- [«
MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getHost
»](mongodb-driver-monitoring-serverheartbeatsucceededevent.gethost.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- Повертає тривалість heartbeat у мікросекундах

# MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getDurationMicros

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getDurationMicros
— Повертає тривалість heartbeat у мікросекундах

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getDurationMicros**():
int

Тривалість heartbeat - це розрахункове значення, яке включає
час відправлення повідомлення та отримання відповіді від сервера.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає тривалість heartbeat в мікросекундах.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
