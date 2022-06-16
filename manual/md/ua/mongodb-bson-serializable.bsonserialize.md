- [«MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md)
- [MongoDB\BSON\Unserializable
»](class.mongodb-bson-unserializable.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md)
- Надає масив або документ для серіалізації у BSON

# MongoDB\BSON\Serializable::bsonSerialize

(mongodb \>u003d1.0.0)

MongoDB\BSON\Serializable::bsonSerialize — Надає масив або
документ для серіалізації у BSON

### Опис

abstract public **MongoDB\BSON\Serializable::bsonSerialize**():
array\|object

Викликається під час серіалізації об'єкта BSON. Метод має повертати
array або **stdClass**.

Кореневі документи (наприклад,
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md),
передані в
[MongoDB\BSON romPHP()](function.mongodb.bson-fromphp.md)) завжди
будуть серіалізовані як документ BSON. Для значень полів асоціативні
масиви та екземпляри **stdClass** будуть серіалізовані у вигляді документа
BSON, а послідовні масиви (наприклад, послідовні числові
індекси, що починаються з `0`), будуть серіалізовані у вигляді масиву BSON.

Користувачам рекомендується включати властивість \_id (наприклад,
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md),
ініціалізований у вашому конструкторі) при поверненні даних для
кореневий документ BSON; інакше драйвер або база даних
повинні будуть згенерувати
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md) при вставці
або злиття документа, відповідно.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

array або **stdClass** для серіалізації у вигляді масиву чи документа
BSON.

### Приклади

**Приклад #1 **MongoDB\BSON\Serializable::bsonSerialize()** повернення
асоціативного масиву для кореневого документа**

`<?phpclass MyDocument implements MongoDB\BSON\Serializable{    private $id; function __construct()    {        $this->id u003d new MongoDB\BSON\ObjectId; }   function bsonSerialize()    {        return ['_id' u003d>$this->id, 'foo' u003d> 'bar']; }}$bson u003dMongoDB\BSON romPHP(new MyDocument);echo MongoDB\BSON oJSON($bson), "
";?> `

Результатом виконання цього прикладу буде щось подібне:

{ "_id" : { "$oid" : "56cccdcada14d8755a58c591" }, "foo" : "bar" }

**Приклад #2 **MongoDB\BSON\Serializable::bsonSerialize()** повернення
послідовного масиву для кореневого документа**

`<?phpclass MyArray implements MongoDB\BSON\Serializable{    function bsonSerialize()    {       return [1, 2, 3]; }}$bson u003dMongoDB\BSON romPHP(new MyArray);echo MongoDB\BSON oJSON($bson), "
";?> `

Результат виконання цього прикладу:

{ "0": 1, "1": 2, "2": 3}

**Приклад #3 **MongoDB\BSON\Serializable::bsonSerialize()** повернення
асоціативного масиву для поля документа**

` <?phpclass MyDocument implements MongoDB\BSON\Serializable{; }}$value u003d ['document' u003d> new MyDocument];$bson u003d MongoDB\BSON romPHP($value);echo MongoDB\BSON oJSON($bson), "
";?> `

Результат виконання цього прикладу:

{ "document" : { "foo" : "bar" } }

**Приклад #4 **MongoDB\BSON\Serializable::bsonSerialize()** повернення
послідовного масиву для поля документа**

`<?phpclass MyArray implements MongoDB\BSON\Serializable{    function bsonSerialize()    {       return [1, 2, 3]; }}$value u003d ['array' u003d> new MyArray];$bson u003d MongoDB\BSON romPHP($value);echo MongoDB\BSON oJSON($bson), "
";?> `

Результат виконання цього прикладу:

{ "array" : [ 1, 2, 3 ] }

### Дивіться також

- [MongoDB\BSON\Unserializable::bsonUnserialize()](mongodb-bson-unserializable.bsonunserialize.md) -
Створює об'єкт із масиву BSON або документа
- [MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md)
- [Постійні дані](mongodb.persistence.md)
