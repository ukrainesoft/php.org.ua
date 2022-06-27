- [«
MongoDB\BSON\Binary::\_\_toString](mongodb-bson-binary.tostring.md)
- [MongoDB\BSON\Decimal128 »](class.mongodb-bson-decimal128.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
- Десеріалізує Binary

# MongoDB\BSON\Binary::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Binary::unserialize — Десеріалізує Binary

### Опис

final public **MongoDB\BSON\Binary::unserialize**(string `$serialized`):
void

### Список параметрів

`serialized`
Серіалізований [MongoDB\BSON\Binary](class.mongodb-bson-binary.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо властивості не можуть бути десеріалізовані (наприклад, `serialized`
був неправильно сформований).
- Видає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо властивості неприпустимі (наприклад, відсутні поля або
неприпустимі значення).

### Дивіться також

- [MongoDB\BSON\Binary::serialize()](mongodb-bson-binary.serialize.md) -
Серіалізує Binary
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
