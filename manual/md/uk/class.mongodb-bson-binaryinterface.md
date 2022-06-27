- [«
MongoDB\BSON\Unserializable::bsonUnserialize](mongodb-bson-unserializable.bsonunserialize.md)
- [MongoDB\BSON\BinaryInterface::getData
»](mongodb-bson-binaryinterface.getdata.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\BinaryInterface

# Інтерфейс MongoDB\BSON\BinaryInterface

(mongodb \>u003d1.3.0)

## Вступ

Цей інтерфейс реалізовано
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md), але також може
використовуватися як параметр, значення, що повертається, або типу
властивості у класах користувальницького простору.

## Огляд класів

class **MongoDB\BSON\BinaryInterface** {

/\* Методи \*/

abstract public [getData](mongodb-bson-binaryinterface.getdata.md)():
string

abstract public [getType](mongodb-bson-binaryinterface.gettype.md)():
int

abstract public
[\_\_toString](mongodb-bson-binaryinterface.tostring.md)(): string

}

## Зміст

- [MongoDB\BSON\BinaryInterface::getData](mongodb-bson-binaryinterface.getdata.md)
- Повертає дані BinaryInterface
- [MongoDB\BSON\BinaryInterface::getType](mongodb-bson-binaryinterface.gettype.md)
- Повертає тип BinaryInterface
- [MongoDB\BSON\BinaryInterface::\_\_toString](mongodb-bson-binaryinterface.tostring.md)
- Повертає дані BinaryInterface
