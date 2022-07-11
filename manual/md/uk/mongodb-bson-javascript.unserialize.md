- [«
MongoDB\BSON\Javascript::\_\_toString](mongodb-bson-javascript.tostring.md)
- [MongoDB\BSON\MaxKey »](class.mongodb-bson-maxkey.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md)
- Десеріалізувати JavaScript

# MongoDB\BSON\Javascript::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Javascript::unserialize — Десеріалізувати JavaScript

### Опис

final public **MongoDB\BSON\Javascript::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Викидає
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо властивості не можуть бути десеріалізовані (тобто `serialized`
неправильний).
- Викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо властивості некоректні (наприклад, відсутні поля або
неправильні неправильні значення).

### Дивіться також

- [MongoDB\BSON\Javascript::serialize()](mongodb-bson-javascript.serialize.md) -
Серіалізувати JavaScript
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
