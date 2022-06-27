- [«
MongoDB\Driver\ReadPreference::getTagSets](mongodb-driver-readpreference.gettagsets.md)
- [MongoDB\Driver\ReadPreference::unserialize
»](mongodb-driver-readpreference.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Серіалізація ReadPreference

# MongoDB\Driver\ReadPreference::serialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\ReadPreference::serialize — Серіалізація ReadPreference

### Опис

final public **MongoDB\Driver\ReadPreference::serialize**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає серіалізовану виставу
[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\ReadPreference::unserialize()](mongodb-driver-readpreference.unserialize.md) -
Десеріалізація ReadPreference
- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [Серіалізація об'єктів](language.oop5.serialization.md)
