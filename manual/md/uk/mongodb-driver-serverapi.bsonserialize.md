- [«MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md)
- [MongoDB\Driver\ServerApi::\_\_construct
»](mongodb-driver-serverapi.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md)
- Повертає об'єкт для серіалізації BSON

# MongoDB\Driver\ServerApi::bsonSerialize

(mongodb \>u003d1.10.0)

MongoDB\Driver\ServerApi::bsonSerialize — Повертає об'єкт для
серіалізації BSON

### Опис

final public **MongoDB\Driver\ServerApi::bsonSerialize**(): object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт для серіалізації ServerApi як BSON.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md) -
Надає масив або документ для серіалізації у BSON
