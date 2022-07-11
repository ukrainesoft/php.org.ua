- [«
MongoDB\Driver\BulkWrite::count](mongodb-driver-bulkwrite.count.md)
- [MongoDB\Driver\BulkWrite::insert
»](mongodb-driver-bulkwrite.insert.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
- Додавання операції видалення порції

# MongoDB\Driver\BulkWrite::delete

(mongodb \>u003d1.0.0)

MongoDB\Driver\BulkWrite::delete — Додавання операції видалення порції

### Опис

public **MongoDB\Driver\BulkWrite::delete**(array\|object `$filter`,
array `$deleteOptions` u003d ?): void

Додає операцію видалення в об'єкт
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md).

### Список параметрів

`filter` (array\|object)
[» Предикат
запиту](https://www.mongodb.com/docs/manual/tutorial/query-documents/).
Порожній предикат збігатиметься з усіма елементами колекції.

> **Примітка**: При обчисленні критеріїв запиту MongoDB порівнює
> типи та значення відповідно до власних [» правил порівняння
> типів
> BSON](https://www.mongodb.com/docs/manual/reference/bson-type-comparison-order/),
> відмінних від правил [порівняння](types.comparisons.md) та [приведення
> типів](language.types.type-juggling.md) PHP. Коли використовується
> спеціальний тип BSON, критерію запиту має відповідати [класу
> BSON](book.bson.md) (тобто використовувати
> [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md) для вибірки
> по
> [» ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)).

`deleteOptions`
[TABLE]

**deleteOptions**

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- ----|
| PECL mongodb 1.8.0 | Додана опція ``hint'`. |
| PECL mongodb 1.2.0 | Додана опція ``collation'`. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\BulkWrite::delete()****

` <?php$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->delete(['x' u003d> 1], ['limit' u003d> 1]);$bulk->delete(['x' u003d > 2], ['limit' u003d> 0]);$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');$result u003d $manager->executeBulkWrite('db.collection', $ bulk);?> `

### Дивіться також

- [MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md) -
Виконує одну або кілька операцій запису
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
