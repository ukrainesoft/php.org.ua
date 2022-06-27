- [«MongoDB\BSON romJSON](function.mongodb.bson-fromjson.md)
- [MongoDB\BSON oCanonicalExtendedJSON
»](function.mongodb.bson-tocanonicalextendedjson.md)

- [PHP Manual](index.md)
- [Функції](ref.bson.functions.md)
- Повертає представлення BSON значення PHP

# MongoDB\BSON romPHP

(mongodb \>u003d1.0.0)

MongoDB\BSON romPHP — Повертає подання BSON значення PHP

### Опис

**MongoDB\BSON romPHP**(array\|object `$value`): string

Серіалізує масив або об'єкт PHP (наприклад, документ) у його
уявлення
[»BSON](https://www.mongodb.com/docs/manual/reference/bson-types/).
Повернутий двійковий рядок буде описувати документ BSON.

### Список параметрів

`value` (array\|object)
Значення PHP для серіалізації.

### Значення, що повертаються

Серіалізований документ BSON як двійковий рядок.

### Помилки

- Видає
[MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md),
якщо значення PHP не може бути перетворено на BSON. Можливі
причини включають, але не обмежуються, зіткненням з несподіваним
екземпляром [MongoDB\BSON\Type](class.mongodb-bson-type.md) або
[MongoDB\BSON\Serializable::bsonSerialize()](mongodb-bson-serializable.bsonserialize.md),
не може повернути array або **stdClass**.

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON romPHP()****

` <?php$bson u003d MongoDB\BSON romPHP(['foo' u003d> 1]);echo bin2hex($bson), "
";?> `

Результат виконання цього прикладу:

0e00000010666f6f000100000000cat

### Дивіться також

- [MongoDB\BSON oPHP()](function.mongodb.bson-tophp.md) -
Повертає PHP подання значення BSON
- [» MongoDB
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
- [Постійні дані](mongodb.persistence.md)
