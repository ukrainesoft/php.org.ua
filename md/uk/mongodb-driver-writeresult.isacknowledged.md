- [«
MongoDB\Driver\WriteResult::getWriteErrors](mongodb-driver-writeresult.getwriteerrors.md)
- [MongoDB\BSON »](book.bson.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Повертає, чи був запис підтверджений

# MongoDB\Driver\WriteResult::isAcknowledged

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteResult::isAcknowledged — Повертає запис.
підтверджено

### Опис

final public **MongoDB\Driver\WriteResult::isAcknowledged**(): bool

Якщо запис підтверджено, інші поля будуть доступні в об'єкті
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо запис був підтверджений, та **`false`** в
інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteResult::isAcknowledged()** з підтвердженими
гарантіями запису**

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]);$result u003d $manager->executeBulkWrite(' db.collection', $bulk);var_dump($result->isAcknowledged());?> `

Результат виконання цього прикладу:

bool(true)

**Приклад #2 Приклад використання
**MongoDB\Driver\WriteResult::isAcknowledged()** з непідтвердженими
гарантіями запису**

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]);$result u003d $manager->executeBulkWrite(' db.collection', $bulk, new MongoDB\Driver\WriteConcern(0));var_dump($result->isAcknowledged());?> `

Результат виконання цього прикладу:

bool(false)

### Дивіться також

- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- [» Довідка за гарантіями
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
