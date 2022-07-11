- [«
MongoDB\BSON\MinKey::jsonSerialize](mongodb-bson-minkey.jsonserialize.md)
- [MongoDB\BSON\MinKey::unserialize
»](mongodb-bson-minkey.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\MinKey](class.mongodb-bson-minkey.md)
- Серіалізує MinKey

# MongoDB\BSON\MinKey::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\MinKey::serialize — Серіалізує MinKey

### Опис

final public **MongoDB\BSON\MinKey::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\MinKey](class.mongodb-bson-minkey.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\MinKey::unserialize()](mongodb-bson-minkey.unserialize.md) -
Десеріалізує MinKey
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
