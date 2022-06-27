- [«
MongoDB\Driver\ServerDescription::getRoundTripTime](mongodb-driver-serverdescription.getroundtriptime.md)
- [MongoDB\Driver\TopologyDescription
»](class.mongodb-driver-topologydescription.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
- Повертає рядок, що позначає тип сервера

# MongoDB\Driver\ServerDescription::getType

(mongodb \>u003d1.13.0)

MongoDB\Driver\ServerDescription::getType — Повертає рядок,
що позначає тип сервера

### Опис

final public **MongoDB\Driver\ServerDescription::getType**(): string

Повертає рядок (string), що позначає тип сервера. Значення
співвідноситиметься з константою
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок (string), що позначає тип сервера.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getType()](mongodb-driver-server.gettype.md) -
Повертає ціле число, що означає тип цього сервера
