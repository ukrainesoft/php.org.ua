- [«
MongoDB\Driver\Server::getType](mongodb-driver-server.gettype.md)
- [MongoDB\Driver\Server::isHidden
»](mongodb-driver-server.ishidden.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Перевіряє, чи є сервер членом-арбітром у наборі реплік

# MongoDB\Driver\Server::isArbiter

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::isArbiter — Перевіряє, чи є сервер
членом-арбітром у наборі реплік

### Опис

final public **MongoDB\Driver\Server::isArbiter**(): bool

Повертає, чи є цей сервер
[» членом-арбітром](https://www.mongodb.com/docs/manual/reference/glossary/#term-arbiter)
набір реплік.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо цей сервер є членом-арбітром набору
реплік, і **`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
