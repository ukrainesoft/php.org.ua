- [«
MongoDB\Driver\WriteConcern::isDefault](mongodb-driver-writeconcern.isdefault.md)
- [MongoDB\Driver\WriteConcern::unserialize
»](mongodb-driver-writeconcern.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Серіалізація WriteConcern

# MongoDB\Driver\WriteConcern::serialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\WriteConcern::serialize — Серіалізація WriteConcern

### Опис

final public **MongoDB\Driver\WriteConcern::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\WriteConcern::unserialize()](mongodb-driver-writeconcern.unserialize.md) -
Десеріалізація WriteConcern
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
