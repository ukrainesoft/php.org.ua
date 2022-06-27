- [«
MongoDB\BSON\Timestamp::\_\_toString](mongodb-bson-timestamp.tostring.md)
- [MongoDB\BSON\UTCDateTime »](class.mongodb-bson-utcdatetime.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)
- Десеріалізує Timestamp

# MongoDB\BSON\Timestamp::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Timestamp::unserialize - Десеріалізує Timestamp

### Опис

final public **MongoDB\BSON\Timestamp::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо властивості не можуть бути не серіалізовані (наприклад, `serialized`
був неправильно сформований).
- Видає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо властивості неприпустимі (наприклад, відсутні поля або
неприпустимі значення).

### Дивіться також

- [MongoDB\BSON\Timestamp::serialize()](mongodb-bson-timestamp.serialize.md) -
Серіалізує Timestamp
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
