- [«
MongoDB\BSON\Javascript::unserialize](mongodb-bson-javascript.unserialize.md)
- [MongoDB\BSON\MaxKey::\_\_construct
»](mongodb-bson-maxkey.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\MaxKey

# Клас MongoDB\BSON\MaxKey

(mongodb \>u003d1.0.0)

## Вступ

Спеціальний тип BSON, який порівнює вище за всіх інших можливих
значень елемента BSON

> **Примітка**: Це внутрішній тип MongoDB, який використовується для індексації
> та шардингу.

## Огляд класів

final class **MongoDB\BSON\MaxKey** implements
[MongoDB\BSON\MaxKeyInterface](class.mongodb-bson-maxkeyinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md) {

/\* Методи \*/

final public [\_\_construct](mongodb-bson-maxkey.construct.md)()

final public [jsonSerialize](mongodb-bson-maxkey.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-maxkey.serialize.md)(): string

final public [unserialize](mongodb-bson-maxkey.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -----------------------------------|
| PECL mongodb 1.3.0 | Реалізує інтерфейс [MongoDB\BSON\MaxKeyInterface](class.mongodb-bson-maxkeyinterface.md). |
| PECL mongodb 1.2.0 | Реалізує інтерфейси [Serializable](class.serializable.md) та [JsonSerializable](class.jsonserializable.md). |

## Зміст

- [MongoDB\BSON\MaxKey::\_\_construct](mongodb-bson-maxkey.construct.md)
- Конструктор MaxKey
- [MongoDB\BSON\MaxKey::jsonSerialize](mongodb-bson-maxkey.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\MaxKey::serialize](mongodb-bson-maxkey.serialize.md)
- Серіалізує MaxKey
- [MongoDB\BSON\MaxKey::unserialize](mongodb-bson-maxkey.unserialize.md)
- Десеріалізує MaxKey
