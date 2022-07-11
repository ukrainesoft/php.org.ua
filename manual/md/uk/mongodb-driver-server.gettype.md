- [«
MongoDB\Driver\Server::getTags](mongodb-driver-server.gettags.md)
- [MongoDB\Driver\Server::isArbiter
»](mongodb-driver-server.isarbiter.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Повертає ціле число, яке позначає тип сервера

# MongoDB\Driver\Server::getType

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::getType - Повертає ціле число, що позначає
тип цього сервера

### Опис

final public **MongoDB\Driver\Server::getType**(): int

Повертає int, що означає тип сервера. Значення буде
відповідати константі
[MongoDB\Driver\Server](class.mongodb-driver-server.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає int, що означає тип сервера.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
- [MongoDB\Driver\ServerDescription::getType()](mongodb-driver-serverdescription.gettype.md) -
Повертає рядок, що позначає тип сервера
