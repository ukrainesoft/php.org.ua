- [«
MongoDB\Driver\WriteConcern::serialize](mongodb-driver-writeconcern.serialize.md)
- [MongoDB\Driver\ReadPreference
»](class.mongodb-driver-readpreference.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Десеріалізація WriteConcern

# MongoDB\Driver\WriteConcern::unserialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\WriteConcern::unserialize - Десеріалізація WriteConcern

### Опис

final public **MongoDB\Driver\WriteConcern::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- кидає виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)
якщо виникла неможливо зробити десеріалізацію властивості,
наприклад, якщо значення `serialized` не коректне.
- кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
якщо властивості не коректні, наприклад, пропущені поля або вони мають
некоректні значення.

### Дивіться також

- [MongoDB\Driver\WriteConcern::serialize()](mongodb-driver-writeconcern.serialize.md) -
Серіалізація WriteConcern
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
