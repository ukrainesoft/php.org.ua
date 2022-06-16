- [«
MongoDB\Driver\WriteConcernError::getInfo](mongodb-driver-writeconcernerror.getinfo.md)
- [MongoDB\Driver\WriteError »](class.mongodb-driver-writeerror.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)
- Повертає повідомлення про помилку WriteConcernError

# MongoDB\Driver\WriteConcernError::getMessage

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteConcernError::getMessage — Повертає повідомлення про
помилка WriteConcernError

### Опис

final public **MongoDB\Driver\WriteConcernError::getMessage**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає повідомлення про помилку WriteConcernError.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcernError::getMessage()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSetu003dmyReplicaSet");$bulk u003d new MongoDB\Driver\BulkWrite;$bulk ->insert(['x' u003d> 1]);$writeConcern u003d new MongoDB\Driver\WriteConcern(2, 1);try {    $manager->executeBulkWrite('db.collection', $bulk, $; } catch(MongoDB\Driver\Exception\BulkWriteException $e) {    var_dump($e->getWriteResult()->getWriteConcernError()->getMessage());}?> `

Результатом виконання цього прикладу буде щось подібне:

string(33) "waiting for replication timed out"

### Дивіться також

- [» Довідка за гарантіями
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
