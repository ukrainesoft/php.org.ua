- [«
MongoDB\Driver\Exception\WriteException](class.mongodb-driver-exception-writeexception.md)
- [Class Tree »](mongodb.exceptions.tree.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Exception\WriteException](class.mongodb-driver-exception-writeexception.md)
- Повертає WriteResult для операції запису помилкою, що закінчилася

# MongoDB\Driver\Exception\WriteException::getWriteResult

(mongodb \>u003d 1.0.0)

MongoDB\Driver\Exception\WriteException::getWriteResult — Повертає
WriteResult для операції запису помилкою, що закінчилася

### Опис

final public
**MongoDB\Driver\Exception\WriteException::getWriteResult**():
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)

Повертає об'єкт
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md) для
операції запису, що закінчилася помилкою. Більш детальну інформацію
про помилку можна отримати за допомогою методів
[MongoDB\Driver\WriteResult::getWriteErrors()](mongodb-driver-writeresult.getwriteerrors.md)
і
[MongoDB\Driver\WriteResult::getWriteConcernError()](mongodb-driver-writeresult.getwriteconcernerror.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Об'єкт
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md) для
операції запису помилкою, що закінчилася.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Exception\WriteException::getWriteResult()****

` <?php$manager u003d new MongoDB\Driver\Manager('mongodb://localhost');$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['_id' u003d> 1]);$ bulk->insert(['_id' u003d> 1]);try {   $manager->executeBulkWrite('db.collection', $bulk);} catch (MongoDB\Driver\Exception\WriteException $e)   $e->getWriteResult(); if ($writeConcernError u003d $writeResult->getWriteConcernError()) {       var_dump($writeConcernError); }   if ($writeErrors u003d $writeResult->getWriteErrors()) {       var_dump($writeErrors); }}?> `

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
object(MongoDB\Driver\WriteError)#5 (4) {
["message"]u003d>
string(70) "E11000 duplicate key error index: db.collection.$_id_ dup key: { : 1 }"
["code"]u003d>
int(11000)
["index"]u003d>
int(1)
["info"]u003d>
NULL
}
}

### Дивіться також

- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- [MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md) -
Виконує одну або кілька операцій запису
