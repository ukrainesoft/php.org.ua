- [«
MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getError
»](mongodb-driver-monitoring-serverheartbeatfailedevent.geterror.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
- Повертає тривалість heartbeat у мікросекундах

# MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getDurationMicros

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getDurationMicros
— Повертає тривалість heartbeat у мікросекундах

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getDurationMicros**():
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
