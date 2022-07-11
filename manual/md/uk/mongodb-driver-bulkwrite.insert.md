- [«
MongoDB\Driver\BulkWrite::delete](mongodb-driver-bulkwrite.delete.md)
- [MongoDB\Driver\BulkWrite::update
»](mongodb-driver-bulkwrite.update.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
- Додати операцію вставки в порцію

# MongoDB\Driver\BulkWrite::insert

(mongodb \>u003d1.0.0)

MongoDB\Driver\BulkWrite::insert - Додати операцію вставки в порцію

### Опис

public **MongoDB\Driver\BulkWrite::insert**(array\|object `$document`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Додаємо операцію вставки в
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md).

### Список параметрів

`document` (array\|object)
Документ для вставлення.

### Значення, що повертаються

Повертає `_id` доданого документа. Якщо в `document` не було задано
`_id`, буде повернутий
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md),
згенерований для вставки.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------|
| PECL mongodb 1.3.0 | Завжди повертається '_id' для доданого документа. Раніше метод повертав значення лише якщо [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md) був створений. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\BulkWrite::insert()****

` <?php$bulk u003d new MongoDB\Driver\BulkWrite;$document1 u003d ['title' u003d> 'one'];$document2 u003d ['_id' u003d> 'custom ID', 'title' u003d> ];$document3 u003d ['_id' u003d> new MongoDB\BSON\ObjectId, 'title' u003d> 'three'];$_id1 u003d $bulk->insert($document1);$_id2 u003d $bulk->ins $document2); $_id3 u003d u003d $ bulk-> insert ($ document 3); $result u003d $manager->executeBulkWrite('db.collection', $bulk);?> `

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\BSON\ObjectId)#3 (1) {
["oid"]u003d>
string(24) "54d51146bd21b91405401d92"
}
NULL
NULL

### Дивіться також

- [MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md) -
Виконує одну або кілька операцій запису
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)
- [MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md)
