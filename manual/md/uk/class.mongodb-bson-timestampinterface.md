- [«
MongoDB\BSON\RegexInterface::\_\_toString](mongodb-bson-regexinterface.tostring.md)
- [MongoDB\BSON\TimestampInterface::getIncrement
»](mongodb-bson-timestampinterface.getincrement.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\TimestampInterface

# Інтерфейс MongoDB\BSON\TimestampInterface

(mongodb \>u003d1.3.0)

## Вступ

Цей інтерфейс реалізований за допомогою
[MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md), але також
може використовуватися як параметр, що повертається значення або
типу якості у класах користувальницького простору.

## Огляд класів

class **MongoDB\BSON\TimestampInterface** {

/\* Методи \*/

abstract public
[getIncrement](mongodb-bson-timestampinterface.getincrement.md)(): int

abstract public
[getTimestamp](mongodb-bson-timestampinterface.gettimestamp.md)(): int

abstract public
[\_\_toString](mongodb-bson-timestampinterface.tostring.md)(): string

}

## Зміст

- [MongoDB\BSON\TimestampInterface::getIncrement](mongodb-bson-timestampinterface.getincrement.md)
- Повертає інкрементний компонент TimestampInterface
- [MongoDB\BSON\TimestampInterface::getTimestamp](mongodb-bson-timestampinterface.gettimestamp.md)
- Повертає компонент позначки часу TimestampInterface
- [MongoDB\BSON\TimestampInterface::\_\_toString](mongodb-bson-timestampinterface.tostring.md)
— Повертає рядкову виставу TimestampInterface
