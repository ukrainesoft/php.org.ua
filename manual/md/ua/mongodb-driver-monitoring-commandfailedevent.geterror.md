- [«
MongoDB\Driver\Monitoring\CommandFailedEvent::getDurationMicros](mongodb-driver-monitoring-commandfailedevent.getdurationmicros.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getOperationId
»](mongodb-driver-monitoring-commandfailedevent.getoperationid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Повертає виняток, пов'язаний із невдалою командою

# MongoDB\Driver\Monitoring\CommandFailedEvent::getError

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandFailedEvent::getError — Повертає
виняток, пов'язаний із невдалою командою

### Опис

final public
**MongoDB\Driver\Monitoring\CommandFailedEvent::getError**():
[Exception](class.exception.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає виняток ([Exception](class.exception.md)), пов'язане з
невдалою командою.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
