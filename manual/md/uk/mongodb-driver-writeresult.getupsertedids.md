- [«
MongoDB\Driver\WriteResult::getUpsertedCount](mongodb-driver-writeresult.getupsertedcount.md)
- [MongoDB\Driver\WriteResult::getWriteConcernError
»](mongodb-driver-writeresult.getwriteconcernerror.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Повертає масив ідентифікаторів для об'єднаних документів

# MongoDB\Driver\WriteResult::getUpsertedIds

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteResult::getUpsertedIds — Повертає масив
ідентифікаторів для об'єднаних документів

### Опис

final public **MongoDB\Driver\WriteResult::getUpsertedIds**(): array

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив ідентифікаторів (тобто значення полів ``_id'') для
об'єднаних документів. Ключі масиву будуть відповідати індексу
операції запису (з
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)),
відповідальної за злиття.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteResult::getUpsertedIds()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]);$bulk->update(['x' u003d> 1], ['$set' u003d> ['y' u003d> 3]]);$bulk->update(['x' u003d> 2], ['$set' u003d> ['y' u003d > 1]], ['upsert' u003d> true]);$bulk->update(['x' u003d> 3], ['$set' u003d> ['y' u003d> 2]], ['upsert ' u003d> true]);$bulk->delete(['x' u003d> 1]);$result u003d $manager->executeBulkWrite('db.collection', $bulk);var_dump($result->getUpsertedIds( ));?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
[2]u003d>
object(MongoDB\BSON\ObjectId)#4 (1) {
["oid"]u003d>
string(24) "580e62a224f2302f191b880b"
}
[3]u003d>
object(MongoDB\BSON\ObjectId)#5 (1) {
["oid"]u003d>
string(24) "580e62a224f2302f191b880c"
}
}

### Дивіться також

- [MongoDB\Driver\WriteResult::getUpsertedCount()](mongodb-driver-writeresult.getupsertedcount.md) -
Повертає кількість документів, вставлених злиттям
- [MongoDB\Driver\WriteResult::isAcknowledged()](mongodb-driver-writeresult.isacknowledged.md) -
Повертає, чи був запис підтверджений
