- [«
MongoDB\BSON\Regex::\_\_toString](mongodb-bson-regex.tostring.md)
- [MongoDB\BSON\Timestamp »](class.mongodb-bson-timestamp.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Regex](class.mongodb-bson-regex.md)
- десеріалізує Regex

# MongoDB\BSON\Regex::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\Regex::unserialize — Десеріалізує Regex

### Опис

final public **MongoDB\BSON\Regex::unserialize**(string `$serialized`):
void

### Список параметрів

`serialized`
Серіалізований [MongoDB\BSON\Regex](class.mongodb-bson-regex.md).

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

- [MongoDB\BSON\Regex::serialize()](mongodb-bson-regex.serialize.md) -
Серіалізує Regex
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
