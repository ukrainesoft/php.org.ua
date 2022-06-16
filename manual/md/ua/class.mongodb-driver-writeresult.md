- [«
MongoDB\Driver\WriteError::getMessage](mongodb-driver-writeerror.getmessage.md)
- [MongoDB\Driver\WriteResult::getDeletedCount
»](mongodb-driver-writeresult.getdeletedcount.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\WriteResult

# Клас MongoDB\Driver\WriteResult

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\WriteResult** інкапсулює інформацію про
виконаному
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md) і може
бути повернутий
[MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md).

## Огляд класів

final class **MongoDB\Driver\WriteResult** {

/\* Методи \*/

final public
[getDeletedCount](mongodb-driver-writeresult.getdeletedcount.md)():
?int

final public
[getInsertedCount](mongodb-driver-writeresult.getinsertedcount.md)():
?int

final public
[getMatchedCount](mongodb-driver-writeresult.getmatchedcount.md)():
?int

final public
[getModifiedCount](mongodb-driver-writeresult.getmodifiedcount.md)():
?int

final public [getServer](mongodb-driver-writeresult.getserver.md)():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

final public
[getUpsertedCount](mongodb-driver-writeresult.getupsertedcount.md)():
?int

final public
[getUpsertedIds](mongodb-driver-writeresult.getupsertedids.md)():
array

final public
[getWriteConcernError](mongodb-driver-writeresult.getwriteconcernerror.md)():
?[MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)

final public
[getWriteErrors](mongodb-driver-writeresult.getwriteerrors.md)():
array

final public
[isAcknowledged](mongodb-driver-writeresult.isacknowledged.md)(): bool

}

## Зміст

- [MongoDB\Driver\WriteResult::getDeletedCount](mongodb-driver-writeresult.getdeletedcount.md)
— Повертає кількість видалених документів
- [MongoDB\Driver\WriteResult::getInsertedCount](mongodb-driver-writeresult.getinsertedcount.md)
— Повертає кількість вставлених документів (за винятком злиття)
- [MongoDB\Driver\WriteResult::getMatchedCount](mongodb-driver-writeresult.getmatchedcount.md)
— Повертає кількість вибраних документів для оновлення
- [MongoDB\Driver\WriteResult::getModifiedCount](mongodb-driver-writeresult.getmodifiedcount.md)
— Повертає кількість існуючих оновлених документів
- [MongoDB\Driver\WriteResult::getServer](mongodb-driver-writeresult.getserver.md)
— Повертає сервер, пов'язаний із цим результатом запису
- [MongoDB\Driver\WriteResult::getUpsertedCount](mongodb-driver-writeresult.getupsertedcount.md)
— Повертає кількість документів, вставлених злиттям
- [MongoDB\Driver\WriteResult::getUpsertedIds](mongodb-driver-writeresult.getupsertedids.md)
— Повертає масив ідентифікаторів для об'єднаних документів
- [MongoDB\Driver\WriteResult::getWriteConcernError](mongodb-driver-writeresult.getwriteconcernerror.md)
— Повертає будь-яку помилку гарантій запису, що відбувся
- [MongoDB\Driver\WriteResult::getWriteErrors](mongodb-driver-writeresult.getwriteerrors.md)
— Повертає будь-які помилки запису, що відбулися
- [MongoDB\Driver\WriteResult::isAcknowledged](mongodb-driver-writeresult.isacknowledged.md)
— Повертає, чи був запис підтверджений
