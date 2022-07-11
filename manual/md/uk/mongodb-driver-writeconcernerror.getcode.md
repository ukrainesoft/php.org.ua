- [«
MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)
- [MongoDB\Driver\WriteConcernError::getInfo
»](mongodb-driver-writeconcernerror.getinfo.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)
- Повертає код помилки WriteConcernError

# MongoDB\Driver\WriteConcernError::getCode

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteConcernError::getCode — Повертає код помилки
WriteConcernError

### Опис

final public **MongoDB\Driver\WriteConcernError::getCode**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає код помилки WriteConcernError.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcernError::getCode()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSetu003dmyReplicaSet");$bulk u003d new MongoDB\Driver\BulkWrite;$bulk ->insert(['x' u003d> 1]);$writeConcern u003d new MongoDB\Driver\WriteConcern(2, 1);try {    $manager->executeBulkWrite('db.collection', $bulk, $; } catch(MongoDB\Driver\Exception\BulkWriteException $e) {   var_dump($e->getWriteResult()->getWriteConcernError()->getCode());}?> `

Результатом виконання цього прикладу буде щось подібне:

int(64)

### Дивіться також

- [» Довідка за гарантіями
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
