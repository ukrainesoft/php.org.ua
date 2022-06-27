- [«
MongoDB\BSON\Symbol::\_\_toString](mongodb-bson-symbol.tostring.md)
- [MongoDB\BSON\Undefined »](class.mongodb-bson-undefined.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Symbol](class.mongodb-bson-symbol.md)
- Десеріалізує Symbol

# MongoDB\BSON\Symbol::unserialize

(mongodb \>u003d1.4.0)

MongoDB\BSON\Symbol::unserialize — Десеріалізує Symbol

### Опис

final public **MongoDB\BSON\Symbol::unserialize**(string `$serialized`):
void

### Список параметрів

`serialized`
Серіалізований [MongoDB\BSON\Symbol](class.mongodb-bson-symbol.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Symbol::serialize()](mongodb-bson-symbol.serialize.md) -
Серіалізує Symbol
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
