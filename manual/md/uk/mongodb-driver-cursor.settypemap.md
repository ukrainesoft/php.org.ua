- [«MongoDB\Driver\Cursor::rewind](mongodb-driver-cursor.rewind.md)
- [MongoDB\Driver\Cursor::toArray
»](mongodb-driver-cursor.toarray.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- Встановлює карту типу для десеріалізації BSON

# MongoDB\Driver\Cursor::setTypeMap

(mongodb \>u003d1.0.0)

MongoDB\Driver\Cursor::setTypeMap — Встановлює карту типу для
десеріалізації BSON

### Опис

final public **MongoDB\Driver\Cursor::setTypeMap**(array `$typemap`):
void

Встановлює [конфігурацію картки
типів](mongodb.persistence.deserialization.md#mongodb.persistence.typemaps),
яка буде використовуватися при десеріалізації результатів BSON
значення PHP.

### Список параметрів

`typeMap` (array)
[Конфігурація картки
типів](mongodb.persistence.deserialization.md#mongodb.persistence.typemaps).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

При ітерації курсором може викидатися такі винятки через
неправильної конфігурації карти типів:

- Викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо клас на карті типів не може бути створений або не реалізує
[MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Cursor::setTypeMap()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017");$bulk u003d new MongoDB\Driver\BulkWrite;$id u003d $bulk->insert(['x' u003d> 1]);$manager->executeBulkWrite('db.collection', $bulk);$query u003d new MongoDB\Driver\Query(['_id' u003d> $id]);$cursor u003d $manager->executeQuery( 'db.collection', $query);$cursor->setTypeMap(['root' u003d> 'array']);foreach ($cursor as $document) {   var_dump($document);}?> `

Результатом виконання цього прикладу буде щось подібне:

array(2) {
["_id"]u003d>
object(MongoDB\BSON\ObjectId)#6 (1) {
["oid"]u003d>
string(24) "56424fb76118fd3267180741"
}
["x"]u003d>
int(1)
}

### Дивіться також

- [Постійні дані](mongodb.persistence.md)
