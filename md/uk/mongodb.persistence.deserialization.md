- [« Серіалізація в BSON](mongodb.persistence.serialization.md)
- [Безпека »](mongodb.security.md)

- [PHP Manual](index.md)
- [Постійні дані](mongodb.persistence.md)
- Десеріалізація з BSON

## Десеріалізація з BSON

**Увага**

Документи BSON технічно можуть містити ключі, що повторюються, оскільки
документи зберігаються у вигляді списку пар ключ-значення; однак додаткам
слід утримуватися від створення документів із дублікатами ключів,
оскільки поведінка сервера та драйвера може бути невизначеною.
Оскільки об'єкти і масиви PHP не можуть мати ключів, що повторюються,
дані також можуть бути втрачені при декодуванні документа BSON з
ключами, що повторюються.

Застарілий модуль `mongo` десеріалізував як документи, так і масиви
BSON як масиви PHP. Хоча з PHP масивами зручно працювати,
така поведінка була проблематичною, оскільки різні типи BSON можуть
десеріалізуватися до одного і того ж значення PHP (наприклад,
`{"0": "foo"}` і `["foo"]`) і неможливо буде вивести оригінальний тип
BSON. За промовчанням поточний драйвер вирішує цю проблему, забезпечуючи
перетворення масивів та документів BSON на масиви та об'єкти PHP
відповідно.

Для складових типів існує три типи даних:

root
відноситься *лише* до документа верхнього рівня BSON

document
відноситься *лише* до вбудованих документів BSON

array
відноситься до масивів BSON

Крім трьох групових типів, також можна налаштувати певні поля в
документ для порівняння з типами даних, зазначеними нижче. В якості
Наприклад, наступна карта типів дозволяє порівняти кожен вбудований
документ у масиві ``addresses'` з класом **Address**, *а* кожне поле
`'city'' у цих документах з вбудованою адресою класу **City**:

``` textcode
[
'fieldPaths' u003d> [
'addresses.$' u003d> 'MyProject\Address',
'addresses.$.city' u003d> 'MyProject\City',
],
]
````

Кожен із цих трьох типів даних, а також зіставлення для конкретних
полів можна порівняти з різними типами PHP. Можливі
значення зіставлення:

*не вказано* або NULL (за замовчуванням)
- Масив BSON буде десеріалізовано, як PHP array.

- Документ BSON (кореневий або впроваджений) без властивості \_\_pclass
[^(\[1\])](#fnidmongodb.pclass) стає об'єктом PHP
**stdClass**, причому кожен ключ документа BSON встановлюється в
якість відкритої властивості **stdClass**.

- Документ BSON (кореневий або вбудований) з властивістю \_\_pclass
[^(\[1\])](#fnidmongodb.pclass) стає об'єктом PHP імені
класу, як визначено властивістю \_\_pclass.

Якщо вказаний клас реалізує інтерфейс
M[MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md), то
властивості документа BSON, включаючи властивість \_\_pclass, відправляються в
вигляді асоціативного масиву на функцію
[MongoDB\BSON\Unserializable::bsonUnserialize()](mongodb-bson-unserializable.bsonunserialize.md)
для ініціалізації властивостей об'єкта

Якщо названий клас не існує або не реалізує інтерфейс
[MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md),
буде використовуватися **stdClass**, і кожен ключ документа BSON
(включаючи \_\_pclass) буде встановлено як відкриту властивість
**stdClass**.

Функціональність \_\_pclass залежить від того, чи є властивість
частиною витягнутого документа MongoDB. Якщо ви використовуєте
[проекцію](mongodb-driver-query.construct.md#mongodb-driver-query.construct-queryOptions)
при запиті документів, потрібно включити поле \_\_pclass в
проекцію, щоб ця функція працювала.

``array'`
Перетворює масив BSON або документ BSON на масив PHP. Не буде
спеціальної обробки властивості \_\_pclass
[^(\[1\])](#fnidmongodb.pclass), але його можна встановити, як елемент у
повертається масиві, якщо він був присутній у документі BSON.

``object'' або ``stdClass'`
Перетворює масив BSON або документ BSON на об'єкт **stdClass**. Не буде
спеціальної обробки властивості \_\_pclass
[^(\[1\])](#fnidmongodb.pclass), але воно може бути встановлене, як
відкрита властивість у об'єкті, що повертається, якщо вона була присутня в
документі BSON.

будь-який інший рядок
Визначає ім'я класу, який має десеріалізувати масив BSON або
об'єкт BSON. Для об'єктів BSON, які містять властивості \_\_pclass,
цей клас матиме пріоритет.

Якщо названий клас не існує, не є конкретним (тобто
є абстрактним або інтерфейсом) або не реалізує
[MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md),
то видається виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

Якщо об'єкт BSON має властивість \_\_pclass, і цей клас існує і
реалізує
[MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md), він
замінить клас, поданий у карті типів.

Властивості документа BSON, *включаючи* властивість \_\_pclass, якщо воно
існує, будуть відправлені у вигляді асоціативного масиву у функцію
[MongoDB\BSON\Unserializable::bsonUnserialize()](mongodb-bson-unserializable.bsonunserialize.md)
для ініціалізації властивостей об'єкта

## TypeMaps

TypeMaps можна встановити за допомогою методу
[MongoDB\Driver\Cursor::setTypeMap()](mongodb-driver-cursor.settypemap.md)
для об'єкта [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
або аргументу `$typeMap` в
[MongoDB\BSON oPHP()](function.mongodb.bson-tophp.md). Кожен із трьох
класів (*root*, *document*, і *array*) може бути заданий індивідуально,
на додаток до типів полів.

Якщо значення на карті дорівнює NULL, це означає те саме, що і
значення *за замовчуванням* для цього елемента.

## Приклади

У цих прикладах використовуються такі класи:

MyClass
який *не* реалізує інтерфейс

YourClass
який реалізує
[MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md)

OurClass
який реалізує
[MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md)

TheirClass
який розширює OurClass

Метод
[MongoDB\BSON\Unserializable::bsonUnserialize()](mongodb-bson-unserializable.bsonunserialize.md)
класу YourClass, OurClass, OurClass виконує ітерацію за масивом та
встановлює властивості без змін. Він *також* встановлює для
властивості `$unserialized` значення `true`:

` <?phpfunction bsonUnserialize( array $map ){   foreach ( $map as $k u003d> $value )    {        $this-$$$; }   $this->unserialized u003d true;} `

``` textcode
/* typemap: [] (усі значення за замовчуванням) */
{"foo": "yes", "bar": false}
-> stdClass { $foo u003d> 'yes', $bar u003d> false }

{ "foo": "no", "array": [5, 6]}
-> stdClass { $foo u003d> 'no', $array u003d> [ 5, 6 ] }

{ "foo": "no", "obj" : { "embedded" : 3.14 } }
-> stdClass { $foo u003d> 'no', $obj u003d> stdClass { $embedded u003d> 3.14 } }

{ "foo": "yes", "__pclass": "MyClass"}
-> stdClass { $foo u003d> 'yes', $__pclass u003d> 'MyClass' }

{ "foo": "yes", "__pclass": { "$type" : "80", "$binary" : "MyClass" } }
-> stdClass { $foo u003d> 'yes', $__pclass u003d> Binary(0x80, 'MyClass') }

{ "foo": "yes", "__pclass": { "$type" : "80", "$binary" : "YourClass") }
-> stdClass { $foo u003d> 'yes', $__pclass u003d> Binary(0x80, 'YourClass') }

{ "foo": "yes", "__pclass": { "$type" : "80", "$binary" : "OurClass") }
-> OurClass { $foo u003d> 'yes', $__pclass u003d> Binary(0x80, 'OurClass'), $unserialized u003d> true }

{ "foo": "yes", "__pclass": { "$type" : "44", "$binary" : "YourClass") }
-> stdClass { $foo u003d> 'yes', $__pclass u003d> Binary(0x44, 'YourClass') }
````

``` textcode
/* typemap: [ "root" u003d> "MissingClass" ] */
{ "foo": "yes" }
-> MongoDB\Driver\Exception\InvalidArgumentException("MissingClass does not exist")

/* typemap: [ "root" u003d> "MyClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MyClass" } }
-> MongoDB\Driver\Exception\InvalidArgumentException("MyClass не implementує Unserializable interface")

/* typemap: [ "root" u003d> "MongoDB\BSON\Unserializable" ] */
{ "foo": "yes" }
-> MongoDB\Driver\Exception\InvalidArgumentException("Unserializable is not a concrete class")

/* typemap: [ "root" u003d> "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MongoDB\BSON\Unserializable" } }
-> YourClass { $foo u003d> "yes", $__pclass u003d> Binary(0x80, "MongoDB\BSON\Unserializable"), $unserialized u003d> true }

/* typemap: [ "root" u003d> "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MyClass" } }
-> YourClass { $foo u003d> "yes", $__pclass u003d> Binary(0x80, "MyClass"), $unserialized u003d> true }

/* typemap: [ "root" u003d> "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "OurClass" } }
-> OurClass { $foo u003d> "yes", $__pclass u003d> Binary(0x80, "OurClass"), $unserialized u003d> true }

/* typemap: [ "root" u003d> "YourClass" ] */
{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "TheirClass" } }
-> TheirClass { $foo u003d> "yes", $__pclass u003d> Binary(0x80, "TheirClass"), $unserialized u003d> true }

/* typemap: [ "root" u003d> "OurClass" ] */
{ foo: "yes", "__pclass" : { "$type": "80", "$binary": "TheirClass" } }
-> TheirClass { $foo u003d> "yes", $__pclass u003d> Binary(0x80, "TheirClass"), $unserialized u003d> true }
````

``` textcode
/* typemap: [ 'root' u003d> 'YourClass' ] */
{ foo: "yes", "__pclass" : { "$type": "80", "$binary": "YourClass" } }
-> YourClass { $foo u003d> 'yes', $__pclass u003d> Binary(0x80, 'YourClass'), $unserialized u003d> true }
````

``` textcode
/* typemap: [ 'root' u003d> 'array', 'document' u003d> 'array' ] */
{"foo": "yes", "bar": false}
-> [ "foo" u003d> "yes", "bar" u003d> false ]

{ "foo": "no", "array": [5, 6]}
-> [ "foo" u003d> "no", "array" u003d> [ 5, 6 ] ]

{ "foo": "no", "obj" : { "embedded" : 3.14 } }
-> [ "foo" u003d> "no", "obj" u003d> [ "embedded u003d> 3.14 ] ]

{ "foo": "yes", "__pclass": "MyClass"}
-> [ "foo" u003d> "yes", "__pclass" u003d> "MyClass" ]

{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "MyClass" } }
-> [ "foo" u003d> "yes", "__pclass" u003d> Binary(0x80, "MyClass") ]

{ "foo": "yes", "__pclass" : { "$type": "80", "$binary": "OurClass" } }
-> [ "foo" u003d> "yes", "__pclass" u003d> Binary(0x80, "OurClass") ]
````

``` textcode
/* typemap: [ 'root' u003d> 'object', 'document' u003d> 'object' ] */
{ "foo": "yes", "__pclass": { "$type": "80", "$binary": "MyClass" } }
-> stdClass { $foo u003d> "yes", "__pclass" u003d> Binary(0x80, "MyClass") }
````
