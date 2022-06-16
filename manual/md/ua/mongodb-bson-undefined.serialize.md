- [«
MongoDB\BSON\Undefined::jsonSerialize](mongodb-bson-undefined.jsonserialize.md)
- [MongoDB\BSON\Undefined::\_\_toString
»](mongodb-bson-undefined.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Undefined](class.mongodb-bson-undefined.md)
- Серіалізує Undefined

# MongoDB\BSON\Undefined::serialize

(mongodb \>u003d1.4.0)

MongoDB\BSON\Undefined::serialize — Серіалізує Undefined

### Опис

final public **MongoDB\BSON\Undefined::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\Undefined](class.mongodb-bson-undefined.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Undefined::unserialize()](mongodb-bson-undefined.unserialize.md) -
Десеріалізує Undefined
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
