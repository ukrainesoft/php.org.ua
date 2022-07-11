- [«
MongoDB\BSON\Binary::jsonSerialize](mongodb-bson-binary.jsonserialize.md)
- [MongoDB\BSON\Binary::\_\_toString
»](mongodb-bson-binary.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
- Серіалізує Binary

# MongoDB\BSON\Binary::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Binary::serialize — Серіалізує Binary

### Опис

final public **MongoDB\BSON\Binary::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Binary::unserialize()](mongodb-bson-binary.unserialize.md) -
Десеріалізує Binary
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
