- [«
MongoDB\BSON\MaxKey::serialize](mongodb-bson-maxkey.serialize.md)
- [MongoDB\BSON\MinKey »](class.mongodb-bson-minkey.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md)
- Десеріалізує MaxKey

# MongoDB\BSON\MaxKey::unserialize

(mongodb \>u003d1.2.0)

MongoDB\BSON\MaxKey::unserialize — Десеріалізує MaxKey

### Опис

final public **MongoDB\BSON\MaxKey::unserialize**(string `$serialized`):
void

### Список параметрів

`serialized`
Серіалізований [MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\MaxKey::serialize()](mongodb-bson-maxkey.serialize.md) -
Серіалізує MaxKey
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
