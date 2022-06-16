- [«
MongoDB\BSON\MaxKey::unserialize](mongodb-bson-maxkey.unserialize.md)
- [MongoDB\BSON\MinKey::\_\_construct
»](mongodb-bson-minkey.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\MinKey

# Клас MongoDB\BSON\MinKey

(mongodb \>u003d1.0.0)

## Вступ

Спеціальний тип BSON, який порівнює нижче за всіх інших можливих
значень елемента BSON

> **Примітка**: Це внутрішній тип MongoDB, який використовується для індексації
> та шардингу.

## Огляд класів

final class **MongoDB\BSON\MinKey** implements
[MongoDB\BSON\MinKeyInterface](class.mongodb-bson-minkeyinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md) {

/\* Методи \*/

final public [\_\_construct](mongodb-bson-minkey.construct.md)()

final public [jsonSerialize](mongodb-bson-minkey.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-minkey.serialize.md)(): string

final public [unserialize](mongodb-bson-minkey.unserialize.md)(string
`$serialized`): void

}

## Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -----------------------------------|
| PECL mongodb 1.3.0 | Реалізує інтерфейс [MongoDB\BSON\MinKeyInterface](class.mongodb-bson-minkeyinterface.md). |
| PECL mongodb 1.2.0 | Реалізує інтерфейси [Serializable](class.serializable.md) та [JsonSerializable](class.jsonserializable.md). |

## Зміст

- [MongoDB\BSON\MinKey::\_\_construct](mongodb-bson-minkey.construct.md)
- Конструктор MinKey
- [MongoDB\BSON\MinKey::jsonSerialize](mongodb-bson-minkey.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\MinKey::serialize](mongodb-bson-minkey.serialize.md)
- Серіалізує MinKey
- [MongoDB\BSON\MinKey::unserialize](mongodb-bson-minkey.unserialize.md)
- Десеріалізує MinKey
