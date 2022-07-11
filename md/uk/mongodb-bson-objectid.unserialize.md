- [«
MongoDB\BSON\ObjectId::\_\_toString](mongodb-bson-objectid.tostring.md)
- [MongoDB\BSON\Regex »](class.mongodb-bson-regex.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)
- Десеріалізує ObjectId

# MongoDB\BSON\ObjectId::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\ObjectId::unserialize — Десеріалізує ObjectId

### Опис

final public **MongoDB\BSON\ObjectId::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо властивості не можуть бути десеріалізовані (наприклад, `serialized`
був неправильно сформований).
- Видає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо властивості недійсні (наприклад, відсутні поля або
неприпустимі значення).

### Дивіться також

- [MongoDB\BSON\ObjectId::serialize()](mongodb-bson-objectid.serialize.md) -
Серіалізує ObjectId
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
