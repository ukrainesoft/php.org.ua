- [«
MongoDB\Driver\CursorId::\_\_toString](mongodb-driver-cursorid.tostring.md)
- [MongoDB\Driver\CursorInterface
»](class.mongodb-driver-cursorinterface.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)
- Десеріалізація CursorId

# MongoDB\Driver\CursorId::unserialize

(mongodb \>u003d1.7.0)

MongoDB\Driver\CursorId::unserialize - Десеріалізація CursorId

### Опис

final public **MongoDB\Driver\CursorId::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md).

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

- [MongoDB\Driver\CursorId::serialize()](mongodb-driver-cursorid.serialize.md) -
Серіалізація CursorId
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
