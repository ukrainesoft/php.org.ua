- [«MongoDB\Driver\Cursor::getId](mongodb-driver-cursor.getid.md)
- [MongoDB\Driver\Cursor::isDead »](mongodb-driver-cursor.isdead.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- Повертає сервер, пов'язаний із курсором

# MongoDB\Driver\Cursor::getServer

(mongodb \>u003d1.0.0)

MongoDB\Driver\Cursor::getServer — Повертає сервер, пов'язаний з
курсором

### Опис

final public **MongoDB\Driver\Cursor::getServer**():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md),
пов'язаний із курсором. Це сервер, який виконав
[MongoDB\Driver\Query](class.mongodb-driver-query.md) або
[MongoDB\Driver\Command](class.mongodb-driver-command.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md),
пов'язаний із курсором.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Cursor::getServer()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017");$query u003d new MongoDB\Driver\Query([]);$bulk u003d new MongoDB\Driver\BulkWrite; bulk->insert(['x' u003d> 1]);$manager->executeBulkWrite('db.collection', $bulk);$cursor u003d $manager->executeQuery('db.collection', $query); var_dump($cursor->getServer());?> `

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\Driver\Server)#5 (10) {
["host"]u003d>
string(9) "localhost"
["port"]u003d>
int(27017)
["type"]u003d>
int(1)
["is_primary"]u003d>
bool(false)
["is_secondary"]u003d>
bool(false)
["is_arbiter"]u003d>
bool(false)
["is_hidden"]u003d>
bool(false)
["is_passive"]u003d>
bool(false)
["last_hello_response"]u003d>
array(8) {
["isWritablePrimary"]u003d>
bool(true)
["maxBsonObjectSize"]u003d>
int(16777216)
["maxMessageSizeBytes"]u003d>
int(48000000)
["maxWriteBatchSize"]u003d>
int(1000)
["localTime"]u003d>
object(MongoDB\BSON\UTCDateTime)#6 (1) {
["milliseconds"]u003d>
int(1446505367907)
}
["maxWireVersion"]u003d>
int(3)
["minWireVersion"]u003d>
int(0)
["ok"]u003d>
float(1)
}
["round_trip_time"]u003d>
int(584)
}

### Дивіться також

- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
