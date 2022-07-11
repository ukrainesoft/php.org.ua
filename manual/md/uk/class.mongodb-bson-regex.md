- [«
MongoDB\BSON\ObjectId::unserialize](mongodb-bson-objectid.unserialize.md)
- [MongoDB\BSON\Regex::\_\_construct
»](mongodb-bson-regex.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\Regex

# Клас MongoDB\BSON\Regex

(mongodb \>u003d1.0.0)

## Вступ

Тип BSON для шаблону регулярного вираження та додаткові
[»прапори](https://www.mongodb.com/docs/manual/reference/operator/query/regex/#op._S_options).

> **Примітка**: Цей тип BSON в основному використовується при запитах до
> базі даних. Як альтернативу можна використовувати оператор
> запиту
> [»$regex](https://www.mongodb.com/docs/manual/reference/operator/query/regex).

## Огляд класів

final class **MongoDB\BSON\Regex** implements
[MongoDB\BSON\RegexInterface](class.mongodb-bson-regexinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final public [\_\_construct](mongodb-bson-regex.construct.md)(string
`$pattern`, string `$flags` u003d "")

final public [getFlags](mongodb-bson-regex.getflags.md)(): string

final public [getPattern](mongodb-bson-regex.getpattern.md)(): string

final public [jsonSerialize](mongodb-bson-regex.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-regex.serialize.md)(): string

final public [\_\_toString](mongodb-bson-regex.tostring.md)(): string

final public [unserialize](mongodb-bson-regex.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|---------------------|---------------------------- -------------------------------------------------- ------------------------------------|
| PECL mongodb 1.12.0 | Реалізує інтерфейс [Stringable](class.stringable.md) для PHP 8.0+. |
| PECL mongodb 1.3.0 | Реалізує інтерфейс [MongoDB\BSON\RegexInterface](class.mongodb-bson-regexinterface.md). |
| PECL mongodb 1.2.0 Реалізує інтерфейси [Serializable](class.serializable.md) та [JsonSerializable](class.jsonserializable.md). |

## Зміст

- [MongoDB\BSON\Regex::\_\_construct](mongodb-bson-regex.construct.md)
- Створює новий Regex
- [MongoDB\BSON\Regex::getFlags](mongodb-bson-regex.getflags.md) -
Повертає прапори Regex
- [MongoDB\BSON\Regex::getPattern](mongodb-bson-regex.getpattern.md)
— Повертає шаблон Regex
- [MongoDB\BSON\Regex::jsonSerialize](mongodb-bson-regex.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\Regex::serialize](mongodb-bson-regex.serialize.md) -
Серіалізує Regex
- [MongoDB\BSON\Regex::\_\_toString](mongodb-bson-regex.tostring.md)
— Повертає рядкову виставу Regex
- [MongoDB\BSON\Regex::unserialize](mongodb-bson-regex.unserialize.md)
- Десеріалізує Regex
