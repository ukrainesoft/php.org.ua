- [«
MongoDB\BSON\MinKey::serialize](mongodb-bson-minkey.serialize.md)
- [MongoDB\BSON\ObjectId »](class.mongodb-bson-objectid.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\MinKey](class.mongodb-bson-minkey.md)
- Десеріалізує MinKey

# MongoDB\BSON\MinKey::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\MinKey::unserialize — Десеріалізує MinKey

### Опис

final public **MongoDB\BSON\MinKey::unserialize**(string `$serialized`):
void

### Список параметрів

`serialized`
Серіалізований [MongoDB\BSON\MinKey](class.mongodb-bson-minkey.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\MinKey::serialize()](mongodb-bson-minkey.serialize.md) -
Серіалізує MinKey
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
