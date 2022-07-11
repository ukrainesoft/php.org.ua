- [«
MongoDB\BSON\Serializable::bsonSerialize](mongodb-bson-serializable.bsonserialize.md)
- [MongoDB\BSON\Unserializable::bsonUnserialize
»](mongodb-bson-unserializable.bsonunserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\Unserializable

# Інтерфейс MongoDB\BSON\Unserializable

(mongodb \>u003d1.0.0)

## Вступ

Класи, які реалізують цей інтерфейс, можуть бути зазначені в [карті
типів](mongodb.persistence.deserialization.md#mongodb.persistence.typemaps)
для десеріалізації масивів та документів BSON (як кореневих, так і
вбудованих).

## Огляд інтерфейсів

class **MongoDB\BSON\Unserializable** {

/\* Методи \*/

abstract public
[bsonUnserialize](mongodb-bson-unserializable.bsonunserialize.md)(array
`$data`): void

}

## Зміст

- [MongoDB\BSON\Unserializable::bsonUnserialize](mongodb-bson-unserializable.bsonunserialize.md)
— Створює об'єкт із масиву BSON або документа
