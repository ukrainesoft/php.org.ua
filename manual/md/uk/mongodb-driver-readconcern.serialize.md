- [«
MongoDB\Driver\ReadConcern::isDefault](mongodb-driver-readconcern.isdefault.md)
- [MongoDB\Driver\ReadConcern::unserialize
»](mongodb-driver-readconcern.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Серіалізація ReadConcern

# MongoDB\Driver\ReadConcern::serialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\ReadConcern::serialize — Серіалізація ReadConcern

### Опис

final public **MongoDB\Driver\ReadConcern::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\ReadConcern::unserialize()](mongodb-driver-readconcern.unserialize.md) -
Десеріалізація ReadConcern
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
