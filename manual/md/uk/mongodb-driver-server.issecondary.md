- [«
MongoDB\Driver\Server::isPrimary](mongodb-driver-server.isprimary.md)
- [MongoDB\Driver\ServerDescription
»](class.mongodb-driver-serverdescription.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Перевіряє, чи є сервер другорядним членом набору
реплік

# MongoDB\Driver\Server::isSecondary

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::isSecondary — Перевіряє, чи є цей сервер
другорядним членом набору реплік

### Опис

final public **MongoDB\Driver\Server::isSecondary**(): bool

Повертає, чи є цей сервер [» другорядним
членом](https://www.mongodb.com/docs/manual/reference/glossary/#term-secondary)
набір реплік.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо цей сервер є другорядним членом
набору реплік, і **`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
