- [«
MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getPort
»](mongodb-driver-monitoring-serveropeningevent.getport.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
- Повертає ім'я сервера хоста

# MongoDB\Driver\Monitoring\ServerOpeningEvent::getHost

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerOpeningEvent::getHost — Повертає ім'я
хоста сервера

### Опис

final public
**MongoDB\Driver\Monitoring\ServerOpeningEvent::getHost**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я сервера хоста.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
