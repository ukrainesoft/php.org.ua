- [«
MongoDB\BSON\Decimal128::unserialize](mongodb-bson-decimal128.unserialize.md)
- [MongoDB\BSON\Javascript::\_\_construct
»](mongodb-bson-javascript.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Javascript

# Клас MongoDB\BSON\Javascript

(mongodb \>u003d1.0.0)

## Вступ

Тип BSON для Javascript. Можливий необов'язковий документ
області видимості, який зіставляє ідентифікатори зі значеннями та
визначає область, де код повинен оцінюватися сервером.

> **Примітка**: Цей тип BSON в основному використовується під час виконання
> команд бази даних, які приймають функцію Javascript як
> параметри, наприклад
> [» mapReduce](https://www.mongodb.com/docs/manual/reference/command/mapReduce/).

## Огляд класів

final class **MongoDB\BSON\Javascript** implements
[MongoDB\BSON\JavascriptInterface](class.mongodb-bson-javascriptinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final public
[\_\_construct](mongodb-bson-javascript.construct.md)(string `$code`,
array\|object `$scope` u003d ?)

final public [getCode](mongodb-bson-javascript.getcode.md)(): string

final public [getScope](mongodb-bson-javascript.getscope.md)():
?object

final public
[jsonSerialize](mongodb-bson-javascript.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-javascript.serialize.md)():
string

final public [\_\_toString](mongodb-bson-javascript.tostring.md)():
string

final public
[unserialize](mongodb-bson-javascript.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|---------------------------- -------------------------------------------------- ------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |
| PECL mongodb 1.3.0 | Реалізує інтерфейс [MongoDB\BSON\JavascriptInterface](class.mongodb-bson-javascriptinterface.md). |
| PECL mongodb 1.2.0 Реалізує інтерфейси [Serializable](class.serializable.md) та [JsonSerializable](class.jsonserializable.md). |

## Зміст

- [MongoDB\BSON\Javascript::\_\_construct](mongodb-bson-javascript.construct.md)
- Конструктор Javascript
- [MongoDB\BSON\Javascript::getCode](mongodb-bson-javascript.getcode.md)
— Повертає код JavaScript
- [MongoDB\BSON\Javascript::getScope](mongodb-bson-javascript.getscope.md)
— Повертає область документа JavaScript
- [MongoDB\BSON\Javascript::jsonSerialize](mongodb-bson-javascript.jsonserialize.md)
— Повертає уявлення, яке може бути перетворено на JSON
- [MongoDB\BSON\Javascript::serialize](mongodb-bson-javascript.serialize.md)
— Серіалізувати JavaScript
- [MongoDB\BSON\Javascript::\_\_toString](mongodb-bson-javascript.tostring.md)
— Повертає код JavaScript
- [MongoDB\BSON\Javascript::unserialize](mongodb-bson-javascript.unserialize.md)
— Десеріалізувати JavaScript
