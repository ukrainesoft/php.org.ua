- [« MongoDB \ BSON \ Type] (class.mongodb-bson-type.md)
- [MongoDB\BSON\Serializable »](class.mongodb-bson-serializable.md)

- [PHP Manual](index.md)
- [MongoDB\BSON](book.bson.md)
- Інтерфейс MongoDB\BSON\Persistable

# Інтерфейс MongoDB\BSON\Persistable

(mongodb \>u003d1.0.0)

## Вступ

Класи можуть реалізовувати цей інтерфейс для використання переваг
автоматичного ODM (порівняння документів об'єкта) поведінки в
драйвері. Під час серіалізації драйвер вставляє властивість \_\_pclass,
містить ім'я класу PHP, дані, що повертаються
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md).
Під час десеріалізації та ж властивість \_\_pclass буде використовуватись
для виведення класу PHP (незалежного від будь-якої конфігурації [типу
карти](mongodb.persistence.deserialization.md#mongodb.persistence.typemaps)),
яка має бути створена до виклику
[MongoDB\BSON\Unserializable::bsonUnserialize()](mongodb-bson-unserializable.bsonunserialize.md).
Дивіться [Постійні дані](mongodb.persistence.md) для отримання
додаткову інформацію.

> **Примітка**: Навіть якщо
> [MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md)
> поверне послідовний масив, використання якості \_\_pclass приведе
> до серіалізації об'єкта як документа BSON.

## Огляд інтерфейсів

class **MongoDB\BSON\Persistable** implements
[MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md),
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md) {

/\* Наслідувані методи \*/

abstract public
[MongoDB\BSON\Serializable::bsonSerialize](mongodb-bson-serializable.bsonserialize.md)():
array\|object

abstract public
[MongoDB\BSON\Unserializable::bsonUnserialize](mongodb-bson-unserializable.bsonunserialize.md)(array
`$data`): void

}
