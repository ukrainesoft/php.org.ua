- [«
MongoDB\Driver\WriteResult::getServer](mongodb-driver-writeresult.getserver.md)
- [MongoDB\Driver\WriteResult::getUpsertedIds
»](mongodb-driver-writeresult.getupsertedids.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Повертає кількість документів, вставлених злиттям

# MongoDB\Driver\WriteResult::getUpsertedCount

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteResult::getUpsertedCount — Повертає кількість
документів, вставлених злиттям

### Опис

final public **MongoDB\Driver\WriteResult::getUpsertedCount**(): ?int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість документів, які вставлені злиттям.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteResult::getUpsertedCount()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]);$bulk->update(['x' u003d> 1], ['$set' u003d> ['y' u003d> 3]]);$bulk->update(['x' u003d> 2], ['$set' u003d> ['y' u003d > 1]], ['upsert' u003d> true]);$bulk->update(['x' u003d> 3], ['$set' u003d> ['y' u003d> 2]], ['upsert ' u003d> true]);$bulk->delete(['x' u003d> 1]);$result u003d $manager->executeBulkWrite('db.collection', $bulk);var_dump($result->getUpsertedCount( ));?> `

Результат виконання цього прикладу:

int(2)

### Дивіться також

- [MongoDB\Driver\WriteResult::getUpsertedIds()](mongodb-driver-writeresult.getupsertedids.md) -
Повертає масив ідентифікаторів для об'єднаних документів
- [MongoDB\Driver\WriteResult::isAcknowledged()](mongodb-driver-writeresult.isacknowledged.md) -
Повертає, чи був запис підтверджений
