- [«
MongoDB\Driver\TopologyDescription::getServers](mongodb-driver-topologydescription.getservers.md)
- [MongoDB\Driver\TopologyDescription::hasReadableServer
»](mongodb-driver-topologydescription.hasreadableserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)
- Повертає рядок, що позначає тип топології

# MongoDB\Driver\TopologyDescription::getType

(mongodb \>u003d1.13.0)

MongoDB\Driver\TopologyDescription::getType — Повертає рядок,
що позначає тип топології

### Опис

final public **MongoDB\Driver\TopologyDescription::getType**(): string

Повертає рядок (string), що означає тип топології. Значення буде
співвідноситися з константою
[MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок (string), що означає тип топології.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
