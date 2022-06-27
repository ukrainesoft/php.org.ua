- [«
MongoDB\Driver\Server::isHidden](mongodb-driver-server.ishidden.md)
- [MongoDB\Driver\Server::isPrimary
»](mongodb-driver-server.isprimary.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Перевіряє, чи є сервер пасивним членом набору реплік

# MongoDB\Driver\Server::isPassive

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::isPassive — Перевіряє, чи є сервер
пасивним членом набору реплік

### Опис

final public **MongoDB\Driver\Server::isPassive**(): bool

Повертає, чи є сервер [» пасивним
членом](https://www.mongodb.com/docs/manual/reference/glossary/#term-passive-member)
набору реплік (тобто його пріоритет дорівнює `0`).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо цей сервер є пасивним членом набору
реплік, і **`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
