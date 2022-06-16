- [«
MongoDB\BSON\DBPointer::\_\_toString](mongodb-bson-dbpointer.tostring.md)
- [MongoDB\BSON\Int64 »](class.mongodb-bson-int64.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\DBPointer](class.mongodb-bson-dbpointer.md)
- Десеріалізує DBPointer

# MongoDB\BSON\DBPointer::unserialize

(mongodb \>u003d1.4.0)

MongoDB\BSON\DBPointer::unserialize — Десеріалізує DBPointer

### Опис

final public **MongoDB\BSON\DBPointer::unserialize**(string
`$serialized`): void

### Список параметрів

`serialized`
Серіалізований
[MongoDB\BSON\DBPointer](class.mongodb-bson-dbpointer.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\DBPointer::serialize()](mongodb-bson-dbpointer.serialize.md) -
Серіалізує DBPointer
- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [Серіалізація об'єктів](language.oop5.serialization.md)
