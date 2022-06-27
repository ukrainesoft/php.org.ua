- [«
MongoDB\BSON\Int64::\_\_toString](mongodb-bson-int64.tostring.md)
- [MongoDB\BSON\Symbol »](class.mongodb-bson-symbol.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Int64](class.mongodb-bson-int64.md)
- Десеріалізує Int64

# MongoDB\BSON\Int64::unserialize

(mongodb \>u003d1.5.0)

MongoDB\BSON\Int64::unserialize — Десеріалізує Int64

### Опис

final public **MongoDB\BSON\Int64::unserialize**(string `$serialized`):
void

### Список параметрів

`serialized`
Серіалізований [MongoDB\BSON\Int64](class.mongodb-bson-int64.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо властивості не можуть бути не серіалізовані (тобто `serialized`
був неправильно сформований).
- Видає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо властивості неприпустимі (наприклад, відсутні поля або
неприпустимі значення).

### Дивіться також

- [MongoDB\BSON\Int64::serialize()](mongodb-bson-int64.serialize.md) -
Серіалізує Int64
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
