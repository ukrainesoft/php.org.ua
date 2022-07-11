- [«
MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getPort
»](mongodb-driver-monitoring-serverclosedevent.getport.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
- Повертає ім'я сервера хоста

# MongoDB\Driver\Monitoring\ServerClosedEvent::getHost

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\ServerClosedEvent::getHost — Повертає ім'я
хоста сервера

### Опис

final public **MongoDB\Driver\Monitoring\ServerClosedEvent::getHost**():
string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я сервера хоста.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
