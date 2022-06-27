- [«
MongoDB\BSON\UTCDateTimeInterface::\_\_toString](mongodb-bson-utcdatetimeinterface.tostring.md)
- [MongoDB\BSON\DBPointer::\_\_construct
»](mongodb-bson-dbpointer.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\DBPointer (застарілий)

# Клас MongoDB\BSON\DBPointer (застарілий)

(mongodb \>u003d1.4.0)

## Вступ

Тип BSON типу "DBPointer". Цей тип BSON застарів, і цей клас не
може бути створено. Він буде створено з типу BSON DBPointer під час
перетворення BSON на PHP, а також при перетворенні назад на BSON при
зберігання документів у базі даних.

## Огляд класів

class **MongoDB\BSON\DBPointer** implements
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final private [\_\_construct](mongodb-bson-dbpointer.construct.md)()

final public
[jsonSerialize](mongodb-bson-dbpointer.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-dbpointer.serialize.md)():
string

final public [\_\_toString](mongodb-bson-dbpointer.tostring.md)():
string

final public
[unserialize](mongodb-bson-dbpointer.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|--------------------------- --------------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |

## Зміст

- [MongoDB\BSON\DBPointer::\_\_construct](mongodb-bson-dbpointer.construct.md)
- Створює новий DBPointer (не використовується)
- [MongoDB\BSON\DBPointer::jsonSerialize](mongodb-bson-dbpointer.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\DBPointer::serialize](mongodb-bson-dbpointer.serialize.md)
- Серіалізує DBPointer
- [MongoDB\BSON\DBPointer::\_\_toString](mongodb-bson-dbpointer.tostring.md)
— Повертає пустий рядок
- [MongoDB\BSON\DBPointer::unserialize](mongodb-bson-dbpointer.unserialize.md)
- Десеріалізує DBPointer
