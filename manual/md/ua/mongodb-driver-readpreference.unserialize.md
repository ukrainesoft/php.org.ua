- [«
MongoDB\Driver\ReadPreference::serialize](mongodb-driver-readpreference.serialize.md)
- [MongoDB\Driver\ReadConcern
»](class.mongodb-driver-readconcern.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Десеріалізація ReadPreference

# MongoDB\Driver\ReadPreference::unserialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\ReadPreference::unserialize - Десеріалізація
ReadPreference

### Опис

final public **MongoDB\Driver\ReadPreference::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- кидає виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)якщо
виникла неможливо зробити десеріалізацію властивості, наприклад
якщо значення `serialized` не коректне.
- кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
якщо властивості не коректні, наприклад, пропущені поля або вони мають
некоректні значення.

### Дивіться також

- [MongoDB\Driver\ReadPreference::serialize()](mongodb-driver-readpreference.serialize.md) -
Серіалізація ReadPreference
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
