- [«
MongoDB\Driver\Server::getPort](mongodb-driver-server.getport.md)
- [MongoDB\Driver\Server::getTags
»](mongodb-driver-server.gettags.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Повертає ServerDescription сервера

# MongoDB\Driver\Server::getServerDescription

(mongodb \>u003d1.13.0)

MongoDB\Driver\Server::getServerDescription — Повертає
ServerDescription сервера

### Опис

final public **MongoDB\Driver\Server::getServerDescription**():
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)

Повертає
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
сервера. Це незмінний об'єкт значення, який описуватиме
сервер під час виклику методу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
сервера.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
