- [«
MongoDB\Driver\WriteResult::getMatchedCount](mongodb-driver-writeresult.getmatchedcount.md)
- [MongoDB\Driver\WriteResult::getServer
»](mongodb-driver-writeresult.getserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Повертає кількість існуючих оновлених документів

# MongoDB\Driver\WriteResult::getModifiedCount

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteResult::getModifiedCount — Повертає кількість
існуючих оновлених документів

### Опис

final public **MongoDB\Driver\WriteResult::getModifiedCount**(): ?int

Якщо операція оновлення не змінює документ (наприклад,
встановлення значення поля в його поточне значення), змінене число може
бути менше, ніж значення, що повертається
[MongoDB\Driver\WriteResult::getMatchedCount()](mongodb-driver-writeresult.getmatchedcount.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість існуючих оновлених документів або
**`null`**, якщо запис не був підтверджений.

Змінений лічильник недоступний у версіях MongoDB до версії 2.6, де
використовувалася застаріла версія дротового протоколу (тобто OP_UPDATE).
У цьому випадку змінена кількість також дорівнюватиме **`null`**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteResult::getModifiedCount()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]);$bulk->update(['x' u003d> 1], ['$set' u003d> ['y' u003d> 3]]);$bulk->update(['x' u003d> 2], ['$set' u003d> ['y' u003d > 1]], ['upsert' u003d> true]);$bulk->update(['x' u003d> 3], ['$set' u003d> ['y' u003d> 2]], ['upsert ' u003d> true]);$bulk->delete(['x' u003d> 1]);$result u003d $manager->executeBulkWrite('db.collection', $bulk);var_dump($result->getModifiedCount( ));?> `

Результат виконання цього прикладу:

int(1)

### Дивіться також

- [MongoDB\Driver\WriteResult::getMatchedCount()](mongodb-driver-writeresult.getmatchedcount.md) -
Повертає кількість документів, вибраних для оновлення
- [MongoDB\Driver\WriteResult::isAcknowledged()](mongodb-driver-writeresult.isacknowledged.md) -
Повертає, чи був запис підтверджений
