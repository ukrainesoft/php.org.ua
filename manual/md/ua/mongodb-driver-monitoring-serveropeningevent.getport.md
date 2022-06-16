- [«
MongoDB\Driver\Monitoring\ServerOpeningEvent::getHost](mongodb-driver-monitoring-serveropeningevent.gethost.md)
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getTopologyId
»](mongodb-driver-monitoring-serveropeningevent.gettopologyid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
- Повертає порт, на якому прослуховується сервер

# MongoDB\Driver\Monitoring\ServerOpeningEvent::getPort

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerOpeningEvent::getPort — Повертає порт,
на якому прослуховується сервер

### Опис

final public
**MongoDB\Driver\Monitoring\ServerOpeningEvent::getPort**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, у якому прослуховується сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
