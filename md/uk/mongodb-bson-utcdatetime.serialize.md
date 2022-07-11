- [«
MongoDB\BSON\UTCDateTime::jsonSerialize](mongodb-bson-utcdatetime.jsonserialize.md)
- [MongoDB\BSON\UTCDateTime::toDateTime
»](mongodb-bson-utcdatetime.todatetime.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)
- Серіалізує UTCDateTime

# MongoDB\BSON\UTCDateTime::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\UTCDateTime::serialize — Серіалізує UTCDateTime

### Опис

final public **MongoDB\BSON\UTCDateTime::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\UTCDateTime::unserialize()](mongodb-bson-utcdatetime.unserialize.md) -
Десеріалізує UTCDateTime
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
