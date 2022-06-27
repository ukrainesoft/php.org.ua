- [«
MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getPort](mongodb-driver-monitoring-serverheartbeatstartedevent.getport.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent
»](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md)
- Повертає, чи використовувався в heartbeat потоковий протокол

# MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::isAwaited

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::isAwaited —
Повертає, чи використовувався в heartbeat потоковий протокол

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::isAwaited**():
bool

Повертає, чи використовувався в heartbeat потоковий протокол. Драйвер PHP
не використовує потоковий протокол для моніторингу, тому цей метод
завжди повертатиме **`false`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`false`**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
