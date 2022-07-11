- [«
MongoDB\Driver\CursorId::\_\_construct](mongodb-driver-cursorid.construct.md)
- [MongoDB\Driver\CursorId::\_\_toString
»](mongodb-driver-cursorid.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)
- Серіалізація CursorId

# MongoDB\Driver\CursorId::serialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\CursorId::serialize — Серіалізація CursorId

### Опис

final public **MongoDB\Driver\CursorId::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\CursorId::unserialize()](mongodb-driver-cursorid.unserialize.md) -
Десеріалізація CursorId
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
