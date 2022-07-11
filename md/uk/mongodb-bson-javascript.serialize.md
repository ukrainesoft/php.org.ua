- [«
MongoDB\BSON\Javascript::jsonSerialize](mongodb-bson-javascript.jsonserialize.md)
- [MongoDB\BSON\Javascript::\_\_toString
»](mongodb-bson-javascript.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md)
- Серіалізувати JavaScript

# MongoDB\BSON\Javascript::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Javascript::serialize — Серіалізувати JavaScript

### Опис

final public **MongoDB\BSON\Javascript::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Javascript::unserialize()](mongodb-bson-javascript.unserialize.md) -
Десеріалізувати JavaScript
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
