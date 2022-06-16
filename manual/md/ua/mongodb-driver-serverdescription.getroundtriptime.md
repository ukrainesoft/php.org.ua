- [«
MongoDB\Driver\ServerDescription::getPort](mongodb-driver-serverdescription.getport.md)
- [MongoDB\Driver\ServerDescription::getType
»](mongodb-driver-serverdescription.gettype.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
- Повертає час обходу сервера у мілісекундах

# MongoDB\Driver\ServerDescription::getRoundTripTime

(mongodb \>u003d1.13.0)

MongoDB\Driver\ServerDescription::getRoundTripTime — Повертає час
обходу сервера в мілісекундах

### Опис

final public **MongoDB\Driver\ServerDescription::getRoundTripTime**():
int

Повертає час обходу сервера у мілісекундах. Це вимір
тривалості команди
[» Hello](https://www.mongodb.com/docs/manual/reference/command/hello/).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час обходу сервера у мілісекундах.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getLatency()](mongodb-driver-server.getlatency.md) -
Повертає затримку сервера у мілісекундах
