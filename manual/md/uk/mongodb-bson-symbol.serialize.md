- [«
MongoDB\BSON\Symbol::jsonSerialize](mongodb-bson-symbol.jsonserialize.md)
- [MongoDB\BSON\Symbol::\_\_toString
»](mongodb-bson-symbol.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Symbol](class.mongodb-bson-symbol.md)
- Серіалізує Symbol

# MongoDB\BSON\Symbol::serialize

(mongodb \>u003d1.4.0)

MongoDB\BSON\Symbol::serialize — Серіалізує Symbol

### Опис

final public **MongoDB\BSON\Symbol::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\Symbol](class.mongodb-bson-symbol.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Symbol::unserialize()](mongodb-bson-symbol.unserialize.md) -
Десеріалізує Symbol
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
