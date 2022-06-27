- [«
MongoDB\BSON\Symbol::unserialize](mongodb-bson-symbol.unserialize.md)
- [MongoDB\BSON\Undefined::\_\_construct
»](mongodb-bson-undefined.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Undefined (застаріло)

# Клас MongoDB\BSON\Undefined (застаріло)

(mongodb \>u003d1.4.0)

## Вступ

Тип BSON типу "Undefined". Цей тип BSON застарів, і цей клас не
може бути створено. Він буде створений з невизначеного типу BSON при
перетворення BSON в PHP, а також може бути перетворений назад в
BSON під час зберігання документів у базі даних.

## Огляд класів

final class **MongoDB\BSON\Undefined** implements
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final private [\_\_construct](mongodb-bson-undefined.construct.md)()

final public
[jsonSerialize](mongodb-bson-undefined.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-undefined.serialize.md)():
string

final public [\_\_toString](mongodb-bson-undefined.tostring.md)():
string

final public
[unserialize](mongodb-bson-undefined.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|--------------------------- --------------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |

## Зміст

- [MongoDB\BSON\Undefined::\_\_construct](mongodb-bson-undefined.construct.md)
- Створює новий Undefined (не використовується)
- [MongoDB\BSON\Undefined::jsonSerialize](mongodb-bson-undefined.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\Undefined::serialize](mongodb-bson-undefined.serialize.md)
- Серіалізує Undefined
- [MongoDB\BSON\Undefined::\_\_toString](mongodb-bson-undefined.tostring.md)
— Повертає пустий рядок
- [MongoDB\BSON\Undefined::unserialize](mongodb-bson-undefined.unserialize.md)
- Десеріалізує Undefined
