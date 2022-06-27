- [«
MongoDB\BSON\Timestamp::jsonSerialize](mongodb-bson-timestamp.jsonserialize.md)
- [MongoDB\BSON\Timestamp::\_\_toString
»](mongodb-bson-timestamp.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)
- Серіалізує Timestamp

# MongoDB\BSON\Timestamp::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Timestamp::serialize — Серіалізує Timestamp

### Опис

final public **MongoDB\BSON\Timestamp::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Timestamp::unserialize()](mongodb-bson-timestamp.unserialize.md) -
Десеріалізує Timestamp
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
