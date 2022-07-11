- [«
MongoDB\BSON\MinKeyInterface](class.mongodb-bson-minkeyinterface.md)
- [MongoDB\BSON\ObjectIdInterface::getTimestamp
»](mongodb-bson-objectidinterface.gettimestamp.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\ObjectIdInterface

# Інтерфейс MongoDB\BSON\ObjectIdInterface

(mongodb \>u003d1.3.0)

## Вступ

Цей інтерфейс реалізований за допомогою
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md), але також
може бути використаний як параметр, що повертається значення
або типу властивості в класах простору користувача.

## Огляд класів

class **MongoDB\BSON\ObjectIdInterface** {

/\* Методи \*/

abstract public
[getTimestamp](mongodb-bson-objectidinterface.gettimestamp.md)(): int

abstract public
[\_\_toString](mongodb-bson-objectidinterface.tostring.md)(): string

}

## Зміст

- [MongoDB\BSON\ObjectIdInterface::getTimestamp](mongodb-bson-objectidinterface.gettimestamp.md)
— Повертає компонент позначки часу ObjectIdInterface
- [MongoDB\BSON\ObjectIdInterface::\_\_toString](mongodb-bson-objectidinterface.tostring.md)
— Повертає шістнадцяткову виставу ObjectIdInterface
