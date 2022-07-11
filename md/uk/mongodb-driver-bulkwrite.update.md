- [«
MongoDB\Driver\BulkWrite::insert](mongodb-driver-bulkwrite.insert.md)
- [MongoDB\Driver\Session »](class.mongodb-driver-session.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
- Додати операцію оновлення до порції

# MongoDB\Driver\BulkWrite::update

(mongodb \>u003d1.0.0)

MongoDB\Driver\BulkWrite::update — Додати операцію оновлення до порції

### Опис

public **MongoDB\Driver\BulkWrite::update**(array\|object `$filter`,
array\|object `$newObj`, array `$updateOptions` u003d ?): void

Додає операцію поновлення в
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

`newObj` (array\|object)
Документ, що містить оператори оновлення (наприклад, $set), що замінює
документ (наприклад, *лише* вирази `field:value`) або [» конвеєр
агрегації](https://www.mongodb.com/docs/manual/reference/command/update/#update-with-an-aggregation-pipeline).

`updateOptions`
[TABLE]

**updateOptions**

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| PECL mongodb 1.7.0 | Додана опція ``hint'`. |
| PECL mongodb 1.6.0 | Параметр `newObj` тепер приймає конвеєр агрегації. Потрібно MongoDB 4.2+, для старої версії сервера викине виняток під час виконання. |
| PECL mongodb 1.5.0 Використання опції ``arrayFilters'` призведе до виключення під час виконання, якщо вона не підтримується сервером. Раніше не викидався виняток, і цей параметр, можливо, проігнорували. |
| PECL mongodb 1.4.0 | Додана опція ``arrayFilters'`. |
| PECL mongodb 1.2.0 | Додана опція ``collation'`. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\BulkWrite::update()****

` <?php$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->update(   ['x' u003d> 2],    ['$set' u003d> ['y' u003d> 3]], [ u003d> false, 'upsert' u003d> false]);$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');$result u003d $manager->executeBulkWrite('db.collection', $ bulk);?> `

### Дивіться також

- [MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md) -
Виконує одну або кілька операцій запису
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
