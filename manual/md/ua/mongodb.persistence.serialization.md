- [« Постійні дані](mongodb.persistence.md)
- [Десеріалізація з BSON »](mongodb.persistence.deserialization.md)

- [PHP Manual](index.md)
- [Постійні дані](mongodb.persistence.md)
- Серіалізація у BSON

## Серіалізація в BSON

## Масиви

Якщо масив є *упакованим масивом* - тобто порожній масив або,
якщо ключі починаються з 0 і є послідовними без пробілів:
*Масив BSON*.

Якщо масив не упакований - тобто має асоціативні (рядкові) ключі,
ключі не починаються з 0 або за наявності пробілів: *об'єкт BSON*

Документ верхнього рівня (кореневий), * завжди * серіалізується, як
документ BSON.

## Приклади

Серіалізація як масив BSON:

``` textcode
[ 8, 5, 2, 3 ] u003d> [ 8, 5, 2, 3 ]
[ 0 u003d> 4, 1 u003d> 9 ] u003d> [ 4, 9 ]
````

Серіалізація як документ BSON:

``` textcode
[ 0 u003d> 1, 2 u003d> 8, 3 u003d> 12 ] u003d> { "0" : 1, "2" : 8, "3" : 12 }
[ "foo" u003d> 42 ] u003d> { "foo" : 42 }
[ 1 u003d> 9, 0 u003d> 10 ] u003d> { "1" : 9, "0" : 10 }
````

Зверніть увагу, що п'ять прикладів є витримками з повного
документа і представляють лише *одно* значення всередині документа.

## Об'єкти

Якщо об'єкт належить до класу **stdClass**, серіалізуйте як
*документ BSON*.

Якщо об'єкт є підтримуваним класом, який реалізує
[MongoDB\BSON\Type](class.mongodb-bson-type.md), використовуйте логіку
Серіалізація BSON для цього конкретного типу. Примірники
[MongoDB\BSON\Type](class.mongodb-bson-type.md) (за винятком
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md) можна
серіалізувати лише як значення поля документа. Спроба серіалізації
такого об'єкта як кореневий документ призведе до викиду
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)

Якщо об'єкт невідомого класу реалізує інтерфейс
[MongoDB\BSON\Type](class.mongodb-bson-type.md), видається виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)

Якщо об'єкт відноситься до будь-якого іншого класу, без реалізації
будь-якого спеціального інтерфейсу, серіалізуйте, як *документ BSON*.
Залишайте тільки *public* властивості та ігноруйте *protected* та
*private* властивості.

Якщо об'єкт належить до класу, який реалізує інтерфейс
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md),
викличте
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md)
та використовуйте повернутий масив або **stdClass** для серіалізації в
як документ BSON або масиву. Тип BSON визначатиметься
наступним:

1. Кореневі документи мають бути серіалізовані як документ BSON.

2. [MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md)
об'єкти повинні бути серіалізовані як документ BSON.

3. Якщо
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md)
повертає упакований масив, серіалізуйте його як масив BSON.

4. Якщо
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md)
повертає невпакований масив або **stdClass**, серіалізуйте, як
документ BSON.

5. Якщо
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md)
не повернув масив або **stdClass**, видасть виняток
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md).

Якщо об'єкт належить до класу, який реалізує інтерфейс
[MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md) (що
має на увазі
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md)),
отримайте властивості аналогічно до попередніх абзаців, але *також* додайте
додаткова властивість \_\_pclass як Binary значення з підтипом
`0x80` і даними, що містять повне ім'я класу об'єкта, що серіалізується.

Властивість \_\_pclass додається в масив або об'єкт, що повертається
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md),
що означає, що воно буде перезаписувати будь-який ключ/властивість
\_\_pclass у значенні, що повертається
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md).
Якщо ви хочете уникнути такої поведінки та встановити власне
значення \_\_pclass, ви *не* повинні реалізовувати
[MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md) і замість
цього мають реалізовувати
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md)
безпосередньо.

## Приклади

`<?phpclass stdClass {  public $foo u003d 42;} // u003d> { "foo" : 42 }class MyClass { public $foo u003d 42; protected $prot u003d "wine"; private $fpr u003d "cheese";} // u003d> { "foo" : 42 }class AnotherClass1 implements MongoDB\BSON\Serializable { public|$foo u003d 42; protected $prot u003d "wine"; private $fpr u003d "cheese"; function bsonSerialize() {       return [ 'foo' u003d>$this->foo, 'prot' u003d> $this->prot ]; }} // u003d> { "foo" : 42, "prot" : "wine" }class AnotherClass2 implements MongoDB\BSON\Serializable { public|$foo u003d 42; function bsonSerialize() {      return $this; }} // u003d> MongoDB\Driver\Exception\UnexpectedValueException("bsonSerialize() did not return an array or stdClass")class AnotherClass3 implements MongoDB\'' function bsonSerialize() {      return $this->elements; }} // u003d> { "0" : "foo", "1" : "bar" }class ContainerClass implements MongoDB\BSON\Serializable {  public $things u003d AnotherClass4         u003d> 'foo', 2 u003d> 'bar' ]; function bsonSerialize() {      return $this->elements; }  } function bsonSerialize() {      return [ 'things' u003d> $this->things ]; }} // u003d> { "things" : { "0" : "foo", "2" : "bar" } }class ContainerClass implements MongoDB\BSON\Serializable {  public private $elements u003d [ 0 u003d> 'foo', 2 u003d> 'bar' ]; function bsonSerialize() {       return array_values($this->elements); }  } function bsonSerialize() {      return [ 'things' u003d> $this->things ]; }} // u003d> { "things" : [ "foo", "bar" ] }class ContainerClass implements MongoDB\BSON\Serializable {  public $things u003d AnotherClass6          , 'bar' ]; function bsonSerialize() {       return (object) $this->elements; }  } function bsonSerialize() {      return [ 'things' u003d> $this->things ]; }} // u003d> { "things" : { "0" : "foo", "1" : "bar" } }class UpperClass implements MongoDB\BSON\Persistable { public $foo; protected $prot u003d "wine"; private $fpr u003d "cheese"; function bsonSerialize() {       return [ 'foo' u003d>$this->foo, 'prot' u003d> $this->prot ]; }} // u003d> { "foo" : 42, "prot" : "wine", "__pclass" : { "$type" : "80", "$binary" : "VXBwZXJDbG 
