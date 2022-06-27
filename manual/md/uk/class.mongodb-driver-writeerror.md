- [«
MongoDB\Driver\WriteConcernError::getMessage](mongodb-driver-writeconcernerror.getmessage.md)
- [MongoDB\Driver\WriteError::getCode
»](mongodb-driver-writeerror.getcode.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\WriteError

# Клас MongoDB\Driver\WriteError

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\WriteError** інкапсулює інформацію про помилку
запису і може бути повернутий як елемент масиву з
[MongoDB\Driver\WriteResult::getWriteErrors()](mongodb-driver-writeresult.getwriteerrors.md).

## Огляд класів

final class **MongoDB\Driver\WriteError** {

/\* Методи \*/

final public [getCode](mongodb-driver-writeerror.getcode.md)(): int

final public [getIndex](mongodb-driver-writeerror.getindex.md)(): int

final public [getInfo](mongodb-driver-writeerror.getinfo.md)():
?object

final public [getMessage](mongodb-driver-writeerror.getmessage.md)():
string

}

## Зміст

- [MongoDB\Driver\WriteError::getCode](mongodb-driver-writeerror.getcode.md)
— Повертає код помилки WriteError
- [MongoDB\Driver\WriteError::getIndex](mongodb-driver-writeerror.getindex.md)
— Повертає індекс запису, який відповідає цьому WriteError
- [MongoDB\Driver\WriteError::getInfo](mongodb-driver-writeerror.getinfo.md)
— Повертає документ метаданих для WriteError
- [MongoDB\Driver\WriteError::getMessage](mongodb-driver-writeerror.getmessage.md)
— Повертає повідомлення про помилку WriteError
