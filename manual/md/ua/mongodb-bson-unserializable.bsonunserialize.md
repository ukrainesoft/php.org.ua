- [«
MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md)
- [MongoDB\BSON\BinaryInterface
»](class.mongodb-bson-binaryinterface.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md)
- Створює об'єкт із масиву BSON або документа

# MongoDB\BSON\Unserializable::bsonUnserialize

(mongodb \>u003d1.0.0)

MongoDB\BSON\Unserializable::bsonUnserialize — Створює об'єкт із масиву
BSON або документ

### Опис

abstract public **MongoDB\BSON\Unserializable::bsonUnserialize**(array
`$data`): void

Викликається під час десеріалізації об'єкта із BSON. Властивості масиву
BSON або документ буде передано в метод у вигляді масиву (array).

Не забудьте перевірити властивість \_id під час обробки даних із документа
BSON.

> **Примітка**: Цей метод служить як
> [конструктора](language.oop5.decon.md#language.oop5.decon.constructor)
> об'єкта Метод
> [\_\_construct()](language.oop5.decon.md#object.construct) *не*
> буде викликатись після цього методу.

### Список параметрів

`data` (array)
Властивості в масиві BSON або документі.

### Значення, що повертаються

Значення цього методу, що повертається, ігнорується.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Unserializable::bsonUnserialize()****

`<?phpclass MyDocument implements MongoDB\BSON\Unserializable{    private $data u003d []; function bsonUnserialize(array $data)    {        $this->data u003d $data; }}$bson u003dMongoDB\BSON romJSON('{ "foo": "bar" }');$value u003d MongoDB\BSON oPHP($bson, ['root' u003d> 'MyDocument']);var_dump($u );?> `

Результат виконання цього прикладу:

object(MyDocument)#1 (1) {
["data":"MyDocument":private]u003d>
array(1) {
["foo"]u003d>
string(3) "bar"
}
}

### Дивіться також

- [MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md) -
Надає масив або документ для серіалізації у BSON
- [MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md)
- [Постійні дані](mongodb.persistence.md)
