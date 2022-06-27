- [«
MongoDB\BSON\MinKey::unserialize](mongodb-bson-minkey.unserialize.md)
- [MongoDB\BSON\ObjectId::\_\_construct
»](mongodb-bson-objectid.construct.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Клас MongoDB\BSON\ObjectId

# Клас MongoDB\BSON\ObjectId

(mongodb \>u003d1.0.0)

## Вступ

Тип BSON для
[» ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid).
Значення складається з 12 байтів, де перші чотири байти є міткою
часу, що відображає створення ObjectId. Зокрема, значення
складається з:

- 4-байтове значення, що становить секунди з початку епохи Unix,
- 5-байтове випадкове число, унікальне для машини та процесу, та
- 3-байтовий лічильник, що починається з випадкового значення.

У MongoDB кожен документ, який зберігається в колекції, вимагає унікального
поля `_id`, що діє як первинний ключ. Якщо у вставленому
документі пропущено поле `_id`, драйвер автоматично створює ObjectId
для поля `_id`.

Використання ObjectIds для поля `_id` забезпечує наступні
додаткові переваги:

- Час створення ObjectId можна отримати за допомогою методу
[MongoDB\BSON\ObjectId::getTimestamp()](mongodb-bson-objectid.gettimestamp.md).
- Сортування по полю `_id`, у якому зберігаються значення ObjectId,
приблизно еквівалентна сортуванню за часом створення.

## Огляд класів

final class **MongoDB\BSON\ObjectId** implements
[MongoDB\BSON\ObjectIdInterface](class.mongodb-bson-objectidinterface.md),
[MongoDB\BSON\Type](class.mongodb-bson-type.md),
[Serializable](class.serializable.md),
[JsonSerializable](class.jsonserializable.md),
[Stringable](class.stringable.md) {

/\* Методи \*/

final public
[\_\_construct](mongodb-bson-objectid.construct.md)(string `$id` u003d ?)

final public [getTimestamp](mongodb-bson-objectid.gettimestamp.md)():
int

final public
[jsonSerialize](mongodb-bson-objectid.jsonserialize.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

final public [serialize](mongodb-bson-objectid.serialize.md)(): string

final public [\_\_toString](mongodb-bson-objectid.tostring.md)():
string

final public
[unserialize](mongodb-bson-objectid.unserialize.md)(string
`$serialized`): void

}

## Список змін

[TABLE]

## Зміст

- [MongoDB\BSON\ObjectId::\_\_construct](mongodb-bson-objectid.construct.md)
- Створює новий ObjectId
- [MongoDB\BSON\ObjectId::getTimestamp](mongodb-bson-objectid.gettimestamp.md)
— Повертає позначку часу ObjectId
- [MongoDB\BSON\ObjectId::jsonSerialize](mongodb-bson-objectid.jsonserialize.md)
— Повертає уявлення, яке можна перетворити на JSON
- [MongoDB\BSON\ObjectId::serialize](mongodb-bson-objectid.serialize.md)
- Серіалізує ObjectId
- [MongoDB\BSON\ObjectId::\_\_toString](mongodb-bson-objectid.tostring.md)
— Повертає шістнадцяткову виставу ObjectId
- [MongoDB\BSON\ObjectId::unserialize](mongodb-bson-objectid.unserialize.md)
- Десеріалізує ObjectId
