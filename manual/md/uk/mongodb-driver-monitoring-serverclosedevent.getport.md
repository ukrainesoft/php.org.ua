- [«
MongoDB\Driver\Monitoring\ServerClosedEvent::getHost](mongodb-driver-monitoring-serverclosedevent.gethost.md)
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getTopologyId
»](mongodb-driver-monitoring-serverclosedevent.gettopologyid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
- Повертає порт, на якому прослуховується сервер

# MongoDB\Driver\Monitoring\ServerClosedEvent::getPort

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerClosedEvent::getPort — Повертає порт,
на якому прослуховується сервер

### Опис

final public **MongoDB\Driver\Monitoring\ServerClosedEvent::getPort**():
int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, у якому прослуховується сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
