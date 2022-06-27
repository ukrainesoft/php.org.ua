- [«
MongoDB\Driver\Monitoring\CommandFailedEvent::getCommandName](mongodb-driver-monitoring-commandfailedevent.getcommandname.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getError
»](mongodb-driver-monitoring-commandfailedevent.geterror.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Повертає тривалість команди у мікросекундах

# MongoDB\Driver\Monitoring\CommandFailedEvent::getDurationMicros

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandFailedEvent::getDurationMicros -
Повертає тривалість команди у мікросекундах

### Опис

final public
**MongoDB\Driver\Monitoring\CommandFailedEvent::getDurationMicros**():
int

Тривалість команди – це розраховане значення, яке включає час
надсилання повідомлення та отримання відповіді від сервера.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає тривалість команди у мікросекундах.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
