- [«
MongoDB\Driver\TopologyDescription::getType](mongodb-driver-topologydescription.gettype.md)
- [MongoDB\Driver\TopologyDescription::hasWritableServer
»](mongodb-driver-topologydescription.haswritableserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)
- Повертає, чи є у топології сервер, доступний для читання

# MongoDB\Driver\TopologyDescription::hasReadableServer

(mongodb \>u003d1.13.0)

MongoDB\Driver\TopologyDescription::hasReadableServer - Повертає, є
чи в топології сервер, доступний для читання

### Опис

final public
**MongoDB\Driver\TopologyDescription::hasReadableServer**(?[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
`$readPreference` u003d **`null`**): bool

Повертає, чи є в топології сервер, доступний для читання, або якщо
вказано параметр `readPreference`, сервер, що відповідає вказаному
перевагу читання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає, чи є в топології сервер, доступний для читання, або якщо
вказано параметр `readPreference`, сервер, що відповідає вказаному
перевагу читання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
