- [«
MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)
- [MongoDB\Driver\TopologyDescription::getType
»](mongodb-driver-topologydescription.gettype.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)
- Повертає сервери у топології

# MongoDB\Driver\TopologyDescription::getServers

(mongodb \>u003d1.13.0)

MongoDB\Driver\TopologyDescription::getServers — Повертає сервери до
топології

### Опис

final public **MongoDB\Driver\TopologyDescription::getServers**(): array

Повертає масив об'єктів
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md),
відповідних відомих серверів у топології.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив об'єктів
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md),
відповідних відомих серверів у топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
