- [«
MongoDB\Driver\Server::isArbiter](mongodb-driver-server.isarbiter.md)
- [MongoDB\Driver\Server::isPassive
»](mongodb-driver-server.ispassive.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Перевіряє, чи сервер прихованим членом набору реплік

# MongoDB\Driver\Server::isHidden

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::isHidden — Перевіряє, чи сервер прихований
членом набору реплік

### Опис

final public **MongoDB\Driver\Server::isHidden**(): bool

Повертає, чи є цей сервер [» прихованим
членом](https://www.mongodb.com/docs/manual/reference/glossary/#term-hidden-member)
набір реплік.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо цей сервер є прихованим членом набору
реплік, і **`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
