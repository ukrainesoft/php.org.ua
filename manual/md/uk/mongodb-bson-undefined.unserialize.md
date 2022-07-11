- [«
MongoDB\BSON\Undefined::\_\_toString](mongodb-bson-undefined.tostring.md)
- [MongoDB\Driver\Monitoring »](mongodb.monitoring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Undefined](class.mongodb-bson-undefined.md)
- Десеріалізує Undefined

# MongoDB\BSON\Undefined::unserialize

(mongodb \>u003d1.4.0)

MongoDB\BSON\Undefined::unserialize — Десеріалізує Undefined

### Опис

final public **MongoDB\BSON\Undefined::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\BSON\Undefined](class.mongodb-bson-undefined.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Undefined::serialize()](mongodb-bson-undefined.serialize.md) -
Серіалізує Undefined
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
