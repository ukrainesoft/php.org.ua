- [«
MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- [MongoDB\Driver\WriteConcern::\_\_construct
»](mongodb-driver-writeconcern.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Повертає об'єкт серіалізації BSON

# MongoDB\Driver\WriteConcern::bsonSerialize

(mongodb \>u003d1.2.0)

MongoDB\Driver\WriteConcern::bsonSerialize — Повертає об'єкт
серіалізації BSON

### Опис

final public **MongoDB\Driver\WriteConcern::bsonSerialize**(): object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт серіалізації WriteConcern як BSON.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 **MongoDB\Driver\WriteConcern::bsonSerialize()** з
більшістю гарантії запису**

` <?php$wc u003d new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY);var_dump($wc->bsonSerialize());echo "
", MongoDB\BSON oJSON(MongoDB\BSON romPHP($wc));?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#2 (1) {
["w"]u003d>
string(8) "majority"
}

{ "w" : "majority" }

**Приклад #2 **MongoDB\Driver\WriteConcern::bsonSerialize()** з часом
очікування та журналом**

` <?php$wc u003d new MongoDB\Driver\WriteConcern(2, 1000, true);var_dump($wc->bsonSerialize());echo "
", MongoDB\BSON oJSON(MongoDB\BSON romPHP($wc));?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#2 (3) {
["w"]u003d>
int(2)
["j"]u003d>
bool(true)
["wtimeout"]u003d>
int(1000)
}

{ "w": 2, "j": true, "wtimeout": 1000}

### Дивіться також

- [MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md) -
Надає масив або документ для серіалізації у BSON
- [» Довідкова інформація щодо гарантії
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
