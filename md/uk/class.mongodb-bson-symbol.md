- [«
MongoDB\BSON\Int64::unserialize](mongodb-bson-int64.unserialize.md)
- [MongoDB\BSON\Symbol::\_\_construct
»](mongodb-bson-symbol.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Symbol (застарілий)

# Клас MongoDB\BSON\Symbol (застарілий)

(mongodb \>u003d1.4.0)

## Вступ

Тип BSON типу "Symbol". Цей тип BSON застарів і цей клас не може
бути створено. Він буде створений із типу символу BSON під час
перетворення BSON на PHP, а також при перетворенні назад на BSON при
зберігання документів у базі даних.

## Огляд класів

class **MongoDB\BSON\Symbol** implements
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final private [\_\_construct](mongodb-bson-symbol.construct.md)()

final public [jsonSerialize](mongodb-bson-symbol.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-symbol.serialize.md)(): string

final public [\_\_toString](mongodb-bson-symbol.tostring.md)(): string

final public [unserialize](mongodb-bson-symbol.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|--------------------------- --------------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |

## Зміст

- [MongoDB\BSON\Symbol::\_\_construct](mongodb-bson-symbol.construct.md)
— Створює новий Symbol (не використовується)
- [MongoDB\BSON\Symbol::jsonSerialize](mongodb-bson-symbol.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\Symbol::serialize](mongodb-bson-symbol.serialize.md)
- Серіалізує Symbol
- [MongoDB\BSON\Symbol::\_\_toString](mongodb-bson-symbol.tostring.md)
— Повертає Symbol у вигляді рядка
- [MongoDB\BSON\Symbol::unserialize](mongodb-bson-symbol.unserialize.md)
- Десеріалізує Symbol
