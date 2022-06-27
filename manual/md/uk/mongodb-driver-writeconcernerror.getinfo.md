- [«
MongoDB\Driver\WriteConcernError::getCode](mongodb-driver-writeconcernerror.getcode.md)
- [MongoDB\Driver\WriteConcernError::getMessage
»](mongodb-driver-writeconcernerror.getmessage.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)
- Повертає документ метаданих для WriteConcernError

# MongoDB\Driver\WriteConcernError::getInfo

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteConcernError::getInfo — Повертає документ
метаданих для WriteConcernError

### Опис

final public **MongoDB\Driver\WriteConcernError::getInfo**(): ?object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає документ метаданих для WriteConcernError або **`null`**,
якщо немає метаданих.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcernError::getInfo()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSetu003dmyReplicaSet");$bulk u003d new MongoDB\Driver\BulkWrite;$bulk ->insert(['x' u003d> 1]);$writeConcern u003d new MongoDB\Driver\WriteConcern(2, 1);try {    $manager->executeBulkWrite('db.collection', $bulk, $; } catch(MongoDB\Driver\Exception\BulkWriteException $e) {   var_dump($e->getWriteResult()->getWriteConcernError()->getInfo());}?> `

Результатом виконання цього прикладу буде щось подібне:

object(stdClass)#1 (1) {
["wtimeout"]u003d>
bool(true)
}

### Дивіться також

- [» Довідка за гарантіями
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
