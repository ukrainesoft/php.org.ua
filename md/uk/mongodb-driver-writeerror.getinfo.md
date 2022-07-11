- [«
MongoDB\Driver\WriteError::getIndex](mongodb-driver-writeerror.getindex.md)
- [MongoDB\Driver\WriteError::getMessage
»](mongodb-driver-writeerror.getmessage.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md)
- Повертає документ метаданих для WriteError

# MongoDB\Driver\WriteError::getInfo

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteError::getInfo — Повертає документ метаданих для
WriteError

### Опис

final public **MongoDB\Driver\WriteError::getInfo**(): ?object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає документ метаданих для WriteError, або **`null`**, якщо
метадані недоступні.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
