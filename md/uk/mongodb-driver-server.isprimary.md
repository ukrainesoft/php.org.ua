- [«
MongoDB\Driver\Server::isPassive](mongodb-driver-server.ispassive.md)
- [MongoDB\Driver\Server::isSecondary
»](mongodb-driver-server.issecondary.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Перевіряє, чи є сервер основним членом набору реплік

# MongoDB\Driver\Server::isPrimary

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::isPrimary — Перевіряє, чи є сервер
основним членом набору реплік

### Опис

final public **MongoDB\Driver\Server::isPrimary**(): bool

Повертає, чи є цей сервер [»основним
членом](https://www.mongodb.com/docs/manual/reference/glossary/#term-primary)
набір реплік.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо цей сервер є основним членом набору
реплік, і **`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
