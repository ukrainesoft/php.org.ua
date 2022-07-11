- [«
MongoDB\BSON\ObjectId::jsonSerialize](mongodb-bson-objectid.jsonserialize.md)
- [MongoDB\BSON\ObjectId::\_\_toString
»](mongodb-bson-objectid.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)
- Серіалізує ObjectId

# MongoDB\BSON\ObjectId::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\ObjectId::serialize — Серіалізує ObjectId

### Опис

final public **MongoDB\BSON\ObjectId::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\ObjectId::unserialize()](mongodb-bson-objectid.unserialize.md) -
Десеріалізує ObjectId
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
