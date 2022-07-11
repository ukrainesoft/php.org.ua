- [«
MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getReply](mongodb-driver-monitoring-serverheartbeatsucceededevent.getreply.md)
- [MongoDB\Driver\Monitoring\TopologyChangedEvent
»](class.mongodb-driver-monitoring-topologychangedevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- Повертає, чи використовувався в heartbeat потоковий протокол

# MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited —
Повертає, чи використовувався в heartbeat потоковий протокол

### Опис

final public
**MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited**():
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
