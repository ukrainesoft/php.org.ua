- [«
MongoDB\BSON\DBPointer::jsonSerialize](mongodb-bson-dbpointer.jsonserialize.md)
- [MongoDB\BSON\DBPointer::\_\_toString
»](mongodb-bson-dbpointer.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\DBPointer](class.mongodb-bson-dbpointer.md)
- Серіалізує DBPointer

# MongoDB\BSON\DBPointer::serialize

(mongodb \>u003d1.4.0)

MongoDB\BSON\DBPointer::serialize — Серіалізує DBPointer

### Опис

final public **MongoDB\BSON\DBPointer::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\DBPointer](class.mongodb-bson-dbpointer.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\DBPointer::unserialize()](mongodb-bson-dbpointer.unserialize.md) -
Десеріалізує DBPointer
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
