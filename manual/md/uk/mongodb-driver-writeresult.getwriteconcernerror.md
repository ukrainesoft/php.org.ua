- [«
MongoDB\Driver\WriteResult::getUpsertedIds](mongodb-driver-writeresult.getupsertedids.md)
- [MongoDB\Driver\WriteResult::getWriteErrors
»](mongodb-driver-writeresult.getwriteerrors.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Повертає будь-яку помилку гарантій запису, що відбувся

# MongoDB\Driver\WriteResult::getWriteConcernError

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteResult::getWriteConcernError — Повертає будь-яку
помилку гарантій запису, що відбувся

### Опис

final public **MongoDB\Driver\WriteResult::getWriteConcernError**():
?[MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає
[MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md),
якщо під час операції запису сталася помилка гарантій запису, та
**`null`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteResult::getWriteConcernError()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSetu003dmyReplicaSet");$bulk u003d new MongoDB\Driver\BulkWrite;$bulk ->insert(['x' u003d> 1]);$writeConcern u003d new MongoDB\Driver\WriteConcern(2, 1);try {    $manager->executeBulkWrite('db.collection', $bulk, $; } catch(MongoDB\Driver\Exception\BulkWriteException $e) {    var_dump($e->getWriteResult()->getWriteConcernError());}?> `

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\Driver\WriteConcernError)#6 (3) {
["message"]u003d>
string(33) "waiting for replication timed out"
["code"]u003d>
int(64)
["info"]u003d>
object(stdClass)#7 (1) {
["wtimeout"]u003d>
bool(true)
}
}

### Дивіться також

- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- [» Довідка за гарантіями
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
