- [«
MongoDB\BSON\MaxKey::jsonSerialize](mongodb-bson-maxkey.jsonserialize.md)
- [MongoDB\BSON\MaxKey::unserialize
»](mongodb-bson-maxkey.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md)
- Серіалізує MaxKey

# MongoDB\BSON\MaxKey::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\MaxKey::serialize — Серіалізує MaxKey

### Опис

final public **MongoDB\BSON\MaxKey::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\MaxKey::unserialize()](mongodb-bson-maxkey.unserialize.md) -
Десеріалізує MaxKey
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
