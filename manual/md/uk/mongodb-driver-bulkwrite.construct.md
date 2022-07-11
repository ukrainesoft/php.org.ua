- [«MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
- [MongoDB\Driver\BulkWrite::count
»](mongodb-driver-bulkwrite.count.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
- Створює новий об'єкт BulkWrite

# MongoDB\Driver\BulkWrite::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\Driver\BulkWrite::\_\_construct - Створює новий об'єкт BulkWrite

### Опис

public **MongoDB\Driver\BulkWrite::\_\_construct**(array `$options` u003d ?)

Створює новий
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md), який
є змінним об'єктом, до якого можуть бути додані одна та
кілька операцій запису. Операції запису можуть бути виконані з
допомогою
[MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md).

### Список параметрів

`options` (array)
[TABLE]

**options**

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Список змін

| Версія | Опис |
|---------------------|---------------------------- --------------------|
| PECL mongodb 1.14.0 | Додані опції ``comment'' та ``let''. |
| PECL mongodb 1.1.0 Додана опція ``bypassDocumentValidation'`. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\BulkWrite::\_\_construct()****

` <?php$bulk u003d new MongoDB\Driver\BulkWrite(['ordered' u003d> true]);$bulk->delete([]);$bulk->insert(['_id' u003d> 1, 'x ' u003d> 1]);$bulk->insert(['_id' u003d> 2, 'x' u003d> 2]);$bulk->update(    ['x' u003d> 2],    ['$set' u003d> ['x' u003d> 1]],    ['limit' u003d> 1, 'upsert' u003d> false]);$bulk->delete(['x' u003d> 1], ['limit' u003d> 1]);$bulk->update(   ['_id' u003d> 3],    ['$set' u003d> ['x' u003d> 3]],    ['limit' u003d> 1, 'upsert' ]);$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');$writeConcern u003d new MongoDB\Driver\WriteConcern(1);try {     $result u003d $$ .collection', $bulk, $writeConcern);} catch (MongoDB\Driver\Exception\BulkWriteException $e) {    $result u003d $e->getWriteResult(); // Перевіряємо забезпечення гарантії запису    if ($writeConcernError u003d $result->getWriteConcernError()) {        printf("%s (%d): 
",            $writeConcernError->getMessage(),            $writeConcernError->getCode(),            var_export($writeConcernError->getInfo(), true)        );    }    // Проверяем, если какие-либо операции записи не были выполнены    foreach ($result ->getWriteErrors() as $writeError) {        printf("Operation#%d: %s (%d)
",            $writeError->getIndex(),            $writeError->getMessage(),            $writeError->getCode()        );    }} catch (MongoDB\Driver\Exception\Exception $e) {    printf("Другая ошибка: %s
",$e->getMessage());   exit;}printf("Додано %d документ(ів)
", $result->getInsertedCount());printf("Оновлено  %d документ(ів)
", $result->getModifiedCount());printf("Злито %d документ(ів)
", $result->getUpsertedCount());printf("Видалено  %d документ(ів)
", $result->getDeletedCount());?> `

Результат виконання цього прикладу:

Додано 2 документ(ів)
Оновлено 1 документ(ів)
Злито 1 документ(ів)
Видалено 1 документ(ів)

### Дивіться також

- [MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md) -
Виконує одну або кілька операцій запису
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
