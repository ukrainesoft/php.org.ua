- [«
MongoDB\Driver\TopologyDescription::hasReadableServer](mongodb-driver-topologydescription.hasreadableserver.md)
- [MongoDB\Driver\WriteConcernError
»](class.mongodb-driver-writeconcernerror.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)
- Повертає, чи є у топології сервер, доступний для запису

# MongoDB\Driver\TopologyDescription::hasWritableServer

(mongodb \>u003d1.13.0)

MongoDB\Driver\TopologyDescription::hasWritableServer - Повертає, є
чи в топології сервер, доступний для запису

### Опис

final public
**MongoDB\Driver\TopologyDescription::hasWritableServer**(): bool

Повертає, чи є у топології сервер, доступний для запису.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає, чи є у топології сервер, доступний для запису.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
