- [«
MongoDB\BSON\UTCDateTime::\_\_toString](mongodb-bson-utcdatetime.tostring.md)
- [MongoDB\BSON\Type »](class.mongodb-bson-type.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)
- Десеріалізує UTCDateTime

# MongoDB\BSON\UTCDateTime::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\UTCDateTime::unserialize — Десеріалізує UTCDateTime

### Опис

final public **MongoDB\BSON\UTCDateTime::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md).

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

- [MongoDB\BSON\UTCDateTime::serialize()](mongodb-bson-utcdatetime.serialize.md) -
Серіалізує UTCDateTime
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
