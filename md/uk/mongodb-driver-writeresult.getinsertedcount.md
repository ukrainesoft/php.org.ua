- [«
MongoDB\Driver\WriteResult::getDeletedCount](mongodb-driver-writeresult.getdeletedcount.md)
- [MongoDB\Driver\WriteResult::getMatchedCount
»](mongodb-driver-writeresult.getmatchedcount.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Повертає кількість вставлених документів (за винятком злиття)

# MongoDB\Driver\WriteResult::getInsertedCount

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteResult::getInsertedCount — Повертає кількість
вставлених документів (за винятком злиття)

### Опис

final public **MongoDB\Driver\WriteResult::getInsertedCount**(): ?int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість вставлених документів (за винятком злиття) або
**`null`** якщо запис не був підтверджений.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteResult::getInsertedCount()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]);$bulk->update(['x' u003d> 1], ['$set' u003d> ['y' u003d> 3]]);$bulk->update(['x' u003d> 2], ['$set' u003d> ['y' u003d > 1]], ['upsert' u003d> true]);$bulk->update(['x' u003d> 3], ['$set' u003d> ['y' u003d> 2]], ['upsert ' u003d> true]);$bulk->delete(['x' u003d> 1]);$result u003d $manager->executeBulkWrite('db.collection', $bulk);var_dump($result->getInsertedCount( ));?> `

Результат виконання цього прикладу:

int(1)

### Дивіться також

- [MongoDB\Driver\WriteResult::isAcknowledged()](mongodb-driver-writeresult.isacknowledged.md) -
Повертає, чи був запис підтверджений
