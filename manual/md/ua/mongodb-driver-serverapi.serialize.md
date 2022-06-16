- [«
MongoDB\Driver\ServerApi::\_\_construct](mongodb-driver-serverapi.construct.md)
- [MongoDB\Driver\ServerApi::unserialize
»](mongodb-driver-serverapi.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md)
- Серіалізує ServerApi

# MongoDB\Driver\ServerApi::serialize

(mongodb \>u003d1.10.0)

MongoDB\Driver\ServerApi::serialize — Серіалізує ServerApi

### Опис

final public **MongoDB\Driver\ServerApi::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\ServerApi::unserialize()](mongodb-driver-serverapi.unserialize.md) -
Десеріалізує ServerApi
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
