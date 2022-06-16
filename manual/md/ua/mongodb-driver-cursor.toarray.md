- [«
MongoDB\Driver\Cursor::setTypeMap](mongodb-driver-cursor.settypemap.md)
- [MongoDB\Driver\Cursor::valid »](mongodb-driver-cursor.valid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- Повертає масив, що містить усі результати курсору

# MongoDB\Driver\Cursor::toArray

(mongodb \>u003d1.0.0)

MongoDB\Driver\Cursor::toArray — Повертає масив, що містить усі
результати курсору

### Опис

final public **MongoDB\Driver\Cursor::toArray**(): array

Ітерує курсор та повертає його результати у вигляді масиву.
[MongoDB\Driver\Cursor::setTypeMap()](mongodb-driver-cursor.settypemap.md)
може використовуватися для управління тим, як документи десеріалізовані в
значення PHP.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив (array), що містить усі результати курсору.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\Driver\Cursor::toArray()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017");$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]) ;$bulk->insert(['x' u003d> 2]);$bulk->insert(['x' u003d> 3]);$manager->executeBulkWrite('db.collection', $bulk);$ query u003d new MongoDB\Driver\Query([]);$cursor u003d $manager->executeQuery('db.collection', $query);var_dump($cursor->toArray());?> `

Результатом виконання цього прикладу буде щось подібне:

array(3) {
[0]u003d>
object(stdClass)#6 (2) {
["_id"]u003d>
object(MongoDB\BSON\ObjectId)#5 (1) {
["oid"]u003d>
string(24) "564259a96118fd40b41bcf61"
}
["x"]u003d>
int(1)
}
[1]u003d>
object(stdClass)#8 (2) {
["_id"]u003d>
object(MongoDB\BSON\ObjectId)#7 (1) {
["oid"]u003d>
string(24) "564259a96118fd40b41bcf62"
}
["x"]u003d>
int(2)
}
[2]u003d>
object(stdClass)#10 (2) {
["_id"]u003d>
object(MongoDB\BSON\ObjectId)#9 (1) {
["oid"]u003d>
string(24) "564259a96118fd40b41bcf63"
}
["x"]u003d>
int(3)
}
}

### Дивіться також

- [MongoDB\Driver\Cursor::setTypeMap()](mongodb-driver-cursor.settypemap.md) -
Встановлює карту типу для десеріалізації BSON
