- [«
MongoDB\Driver\ReadConcern::serialize](mongodb-driver-readconcern.serialize.md)
- [MongoDB\Driver\Cursor »](class.mongodb-driver-cursor.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Десеріалізація ReadConcern

# MongoDB\Driver\ReadConcern::unserialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\ReadConcern::unserialize - Десеріалізація ReadConcern

### Опис

final public **MongoDB\Driver\ReadConcern::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md).

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

- [MongoDB\Driver\ReadConcern::serialize()](mongodb-driver-readconcern.serialize.md) -
Серіалізація ReadConcern
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
