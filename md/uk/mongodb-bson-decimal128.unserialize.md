- [«
MongoDB\BSON\Decimal128::\_\_toString](mongodb-bson-decimal128.tostring.md)
- [MongoDB\BSON\Javascript »](class.mongodb-bson-javascript.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Decimal128](class.mongodb-bson-decimal128.md)
- Десеріалізує Decimal128

# MongoDB\BSON\Decimal128::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Decimal128::unserialize — Десеріалізує Decimal128

### Опис

final public **MongoDB\BSON\Decimal128::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\BSON\Decimal128](class.mongodb-bson-decimal128.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо властивості не можуть бути десеріалізовані (наприклад, параметр
`serialized` був спотворений).
- Видає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо властивості недійсні (наприклад, відсутні поля або
неприпустимі значення).

### Дивіться також

- [MongoDB\BSON\Decimal128::serialize()](mongodb-bson-decimal128.serialize.md) -
Серіалізує Decimal128
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
