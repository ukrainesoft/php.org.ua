- [«
MongoDB\BSON\TimestampInterface::\_\_toString](mongodb-bson-timestampinterface.tostring.md)
- [MongoDB\BSON\UTCDateTimeInterface::toDateTime
»](mongodb-bson-utcdatetimeinterface.todatetime.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\UTCDateTimeInterface

# Інтерфейс MongoDB\BSON\UTCDateTimeInterface

(mongodb \>u003d1.3.0)

## Вступ

Цей інтерфейс реалізований за допомогою
[MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md), але
також може використовуватися як параметр, що повертається значення
або типу властивості в класах простору користувача.

## Огляд класів

class **MongoDB\BSON\UTCDateTimeInterface** {

/\* Методи \*/

abstract public
[toDateTime](mongodb-bson-utcdatetimeinterface.todatetime.md)():
[DateTime](class.datetime.md)

abstract public
[\_\_toString](mongodb-bson-utcdatetimeinterface.tostring.md)():
string

}

## Зміст

- [MongoDB\BSON\UTCDateTimeInterface::toDateTime](mongodb-bson-utcdatetimeinterface.todatetime.md)
— Повертає уявлення DateTime цього UTCDateTimeInterface
- [MongoDB\BSON\UTCDateTimeInterface::\_\_toString](mongodb-bson-utcdatetimeinterface.tostring.md)
— Повертає рядкову виставу UTCDateTimeInterface
