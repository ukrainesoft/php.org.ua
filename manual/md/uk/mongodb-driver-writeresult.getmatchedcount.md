- [«
MongoDB\Driver\WriteResult::getInsertedCount](mongodb-driver-writeresult.getinsertedcount.md)
- [MongoDB\Driver\WriteResult::getModifiedCount
»](mongodb-driver-writeresult.getmodifiedcount.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Повертає кількість документів, вибраних для оновлення

# MongoDB\Driver\WriteResult::getMatchedCount

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteResult::getMatchedCount — Повертає кількість
документів, вибраних для оновлення

### Опис

final public **MongoDB\Driver\WriteResult::getMatchedCount**(): ?int

Якщо операція оновлення не змінює документ (наприклад,
встановлення значення поля в його поточне значення), зіставлене
кількість може бути більшою, ніж значення, що повертається
[MongoDB\Driver\WriteResult::getModifiedCount()](mongodb-driver-writeresult.getmodifiedcount.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість документів, вибраних для оновлення, або
**`null`** якщо запис не був підтверджений.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteResult::getMatchedCount()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]);$bulk->update(['x' u003d> 1], ['$set' u003d> ['y' u003d> 3]]);$bulk->update(['x' u003d> 2], ['$set' u003d> ['y' u003d > 1]], ['upsert' u003d> true]);$bulk->update(['x' u003d> 3], ['$set' u003d> ['y' u003d> 2]], ['upsert ' u003d> true]);$bulk->delete(['x' u003d> 1]);$result u003d $manager->executeBulkWrite('db.collection', $bulk);var_dump($result->getMatchedCount( ));?> `

Результат виконання цього прикладу:

int(1)

### Дивіться також

- [MongoDB\Driver\WriteResult::getModifiedCount()](mongodb-driver-writeresult.getmodifiedcount.md) -
Повертає кількість існуючих оновлених документів
- [MongoDB\Driver\WriteResult::isAcknowledged()](mongodb-driver-writeresult.isacknowledged.md) -
Повертає, чи був запис підтверджений
