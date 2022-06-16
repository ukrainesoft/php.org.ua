- [« MongoDB \ BSON \ Persistable] (class.mongodb-bson-persistable.md)
- [MongoDB\BSON\Serializable::bsonSerialize
»](mongodb-bson-serializable.bsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\Serializable

# Інтерфейс MongoDB\BSON\Serializable

(mongodb \>u003d1.0.0)

## Вступ

Класи, які реалізують цей інтерфейс, можуть повертати дані для
серіалізації у вигляді масиву BSON або документа замість відкритих властивостей
об'єкт.

## Огляд інтерфейсів

class **MongoDB\BSON\Serializable** implements
[MongoDB\BSON\Type](class.mongodb-bson-type.md) {

/\* Методи \*/

abstract public
[bsonSerialize](mongodb-bson-serializable.bsonserialize.md)():
array\|object

}

## Зміст

- [MongoDB\BSON\Serializable::bsonSerialize](mongodb-bson-serializable.bsonserialize.md)
— Надає масив або документ для серіалізації у BSON
