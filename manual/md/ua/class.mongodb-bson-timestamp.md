- [«
MongoDB\BSON\Regex::unserialize](mongodb-bson-regex.unserialize.md)
- [MongoDB\BSON\Timestamp::\_\_construct
»](mongodb-bson-timestamp.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Timestamp

# Клас MongoDB\BSON\Timestamp

(mongodb \>u003d1.0.0)

## Вступ

Представляє [» мітку часу
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/#timestamps).
Значення складається з 4-байтової мітки часу (тобто секунди з початку
епохи) та 4-байтового прирощення.

> **Примітка**: Це внутрішній тип MongoDB, який використовується для реплікації
> та поділу. Він призначений для загального зберігання дат (замість нього)
> слід використовувати
> [MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)).

## Огляд класів

final class **MongoDB\BSON\Timestamp** implements
[MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final public [\_\_construct](mongodb-bson-timestamp.construct.md)(int
`$increment`, int `$timestamp`)

final public [getIncrement](mongodb-bson-timestamp.getincrement.md)():
int

final public [getTimestamp](mongodb-bson-timestamp.gettimestamp.md)():
int

final public
[jsonSerialize](mongodb-bson-timestamp.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-timestamp.serialize.md)():
string

final public [\_\_toString](mongodb-bson-timestamp.tostring.md)():
string

final public
[unserialize](mongodb-bson-timestamp.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|---------------------------- -------------------------------------------------- ------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |
| PECL mongodb 1.3.0 | Реалізує інтерфейс [MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md). |
| PECL mongodb 1.2.0 Реалізує інтерфейси [Serializable](class.serializable.md) та [JsonSerializable](class.jsonserializable.md). |

## Зміст

- [MongoDB\BSON\Timestamp::\_\_construct](mongodb-bson-timestamp.construct.md)
- Створює новий Timestamp
- [MongoDB\BSON\Timestamp::getIncrement](mongodb-bson-timestamp.getincrement.md)
— Повертає компонент збільшення Timestamp
- [MongoDB\BSON\Timestamp::getTimestamp](mongodb-bson-timestamp.gettimestamp.md)
— Повертає компонент позначки часу Timestamp
- [MongoDB\BSON\Timestamp::jsonSerialize](mongodb-bson-timestamp.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\Timestamp::serialize](mongodb-bson-timestamp.serialize.md)
- Серіалізує Timestamp
- [MongoDB\BSON\Timestamp::\_\_toString](mongodb-bson-timestamp.tostring.md)
— Повертає рядкову виставу Timestamp
- [MongoDB\BSON\Timestamp::unserialize](mongodb-bson-timestamp.unserialize.md)
- Десеріалізує Timestamp
