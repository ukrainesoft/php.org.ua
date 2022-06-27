- [«
MongoDB\BSON\Timestamp::unserialize](mongodb-bson-timestamp.unserialize.md)
- [MongoDB\BSON\UTCDateTime::\_\_construct
»](mongodb-bson-utcdatetime.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\UTCDateTime

# Клас MongoDB\BSON\UTCDateTime

(mongodb \>u003d1.0.0)

## Вступ

Представляє [» дату
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/#date).
Значення є 64-розрядним цілим числом, що представляє
кількість мілісекунд від початку епохи Unix (1 січня 1970 р.).
Негативні значення становлять дати до 1970 року.

## Огляд класів

final class **MongoDB\BSON\UTCDateTime** implements
[MongoDB\BSON\UTCDateTimeInterface](class.mongodb-bson-utcdatetimeinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final public
[\_\_construct](mongodb-bson-utcdatetime.construct.md)(int\|float\|string\|[DateTimeInterface](class.datetimeinterface.md)
`$milliseconds` u003d **`null`**)

final public
[jsonSerialize](mongodb-bson-utcdatetime.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-utcdatetime.serialize.md)():
string

final public [toDateTime](mongodb-bson-utcdatetime.todatetime.md)():
[DateTime](class.datetime.md)

final public [\_\_toString](mongodb-bson-utcdatetime.tostring.md)():
string

final public
[unserialize](mongodb-bson-utcdatetime.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|---------------------------- -------------------------------------------------- ------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |
| PECL mongodb 1.3.0 | Реалізує інтерфейс [MongoDB\BSON\UTCDateTimeInterface](class.mongodb-bson-utcdatetimeinterface.md). |
| PECL mongodb 1.2.0 Реалізує інтерфейси [Serializable](class.serializable.md) та [JsonSerializable](class.jsonserializable.md). |

## Зміст

- [MongoDB\BSON\UTCDateTime::\_\_construct](mongodb-bson-utcdatetime.construct.md)
- Створює новий UTCDateTime
- [MongoDB\BSON\UTCDateTime::jsonSerialize](mongodb-bson-utcdatetime.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\UTCDateTime::serialize](mongodb-bson-utcdatetime.serialize.md)
- Серіалізує UTCDateTime
- [MongoDB\BSON\UTCDateTime::toDateTime](mongodb-bson-utcdatetime.todatetime.md)
— Повертає уявлення DateTime цього UTCDateTime
- [MongoDB\BSON\UTCDateTime::\_\_toString](mongodb-bson-utcdatetime.tostring.md)
— Повертає рядкову виставу UTCDateTime
- [MongoDB\BSON\UTCDateTime::unserialize](mongodb-bson-utcdatetime.unserialize.md)
- Десеріалізує UTCDateTime
