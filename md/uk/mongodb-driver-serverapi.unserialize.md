- [«
MongoDB\Driver\ServerApi::serialize](mongodb-driver-serverapi.serialize.md)
- [MongoDB\Driver\WriteConcern
»](class.mongodb-driver-writeconcern.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md)
- Десеріалізує ServerApi

# MongoDB\Driver\ServerApi::unserialize

(mongodb \>u003d1.10.0)

MongoDB\Driver\ServerApi::unserialize - Десеріалізує ServerApi

### Опис

final public **MongoDB\Driver\ServerApi::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Викидає
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо властивості не можуть бути десеріалізовані (наприклад, `serialized`
був некоректно сформований.
- Викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо властивості некоректні (наприклад, відсутні поля або містяться
неприпустимі значення).

### Дивіться також

- [MongoDB\Driver\ServerApi::serialize()](mongodb-driver-serverapi.serialize.md) -
Серіалізує ServerApi
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
