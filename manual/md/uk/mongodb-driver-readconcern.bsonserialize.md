- [«
MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- [MongoDB\Driver\ReadConcern::\_\_construct
»](mongodb-driver-readconcern.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Повертає об'єкт для серіалізації BSON

# MongoDB\Driver\ReadConcern::bsonSerialize

(mongodb \>u003d1.2.0)

MongoDB\Driver\ReadConcern::bsonSerialize — Повертає об'єкт для
серіалізації BSON

### Опис

final public **MongoDB\Driver\ReadConcern::bsonSerialize**(): object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт для серіалізації ReadConcern як BSON.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadConcern::bsonSerialize()** з порожніми гарантіями
читання**

` <?php$rc u003d new MongoDB\Driver\ReadConcern;var_dump($rc->bsonSerialize());echo "
", MongoDB\BSON oJSON(MongoDB\BSON romPHP($rc));?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#2 (0) {
}

{}

**Приклад #2 Приклад використання
**MongoDB\Driver\ReadConcern::bsonSerialize()** з локальними гарантіями
читання**

` <?php$rc u003d new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::LOCAL);var_dump($rc->bsonSerialize());echo "
", MongoDB\BSON oJSON(MongoDB\BSON romPHP($rc));?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#2 (1) {
["level"]u003d>
string(5) "local"
}

{ "level" : "local" }

### Дивіться також

- [MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md) -
Надає масив або документ для серіалізації у BSON
- [» Довідка за гарантіями
читання](https://www.mongodb.com/docs/manual/reference/read-concern/)
