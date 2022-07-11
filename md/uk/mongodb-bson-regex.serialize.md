- [«
MongoDB\BSON\Regex::jsonSerialize](mongodb-bson-regex.jsonserialize.md)
- [MongoDB\BSON\Regex::\_\_toString
»](mongodb-bson-regex.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Regex](class.mongodb-bson-regex.md)
- Серіалізує Regex

# MongoDB\BSON\Regex::serialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Regex::serialize — Серіалізує Regex

### Опис

final public **MongoDB\BSON\Regex::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\BSON\Regex](class.mongodb-bson-regex.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Regex::unserialize()](mongodb-bson-regex.unserialize.md) -
Десеріалізує Regex
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
