- [«
MongoDB\Driver\TopologyDescription::hasWritableServer](mongodb-driver-topologydescription.haswritableserver.md)
- [MongoDB\Driver\WriteConcernError::getCode
»](mongodb-driver-writeconcernerror.getcode.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас The MongoDB\Driver\WriteConcernError

# Клас The MongoDB\Driver\WriteConcernError

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\WriteConcernError** інкапсулює інформацію про
помилку запису і може бути повернутий
[MongoDB\Driver\WriteResult::getWriteConcernError()](mongodb-driver-writeresult.getwriteconcernerror.md).

## Огляд класів

final class **MongoDB\Driver\WriteConcernError** {

/\* Методи \*/

final public [getCode](mongodb-driver-writeconcernerror.getcode.md)():
int

final public [getInfo](mongodb-driver-writeconcernerror.getinfo.md)():
?object

final public
[getMessage](mongodb-driver-writeconcernerror.getmessage.md)(): string

}

## Зміст

- [MongoDB\Driver\WriteConcernError::getCode](mongodb-driver-writeconcernerror.getcode.md)
— Повертає код помилки WriteConcernError
- [MongoDB\Driver\WriteConcernError::getInfo](mongodb-driver-writeconcernerror.getinfo.md)
— Повертає документ метаданих для WriteConcernError
- [MongoDB\Driver\WriteConcernError::getMessage](mongodb-driver-writeconcernerror.getmessage.md)
— Повертає повідомлення про помилку WriteConcernError
