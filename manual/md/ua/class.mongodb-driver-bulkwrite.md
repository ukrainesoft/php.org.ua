- [«
MongoDB\Driver\Query::\_\_construct](mongodb-driver-query.construct.md)
- [MongoDB\Driver\BulkWrite::\_\_construct
»](mongodb-driver-bulkwrite.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\BulkWrite

# Клас MongoDB\Driver\BulkWrite

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\BulkWrite** збирає одну або кілька операцій
записи, які мають бути надіслані на сервер. Після додавання
будь-якої кількості операцій вставки, оновлення або видалення, колекція
може бути виконана за допомогою
[MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md).

Операції запису можуть бути відсортовані (за замовчуванням) чи не
відсортовані. Відсортовані операції запису відправляються на сервер
вказаному порядку для послідовного виконання. В разі
виникнення помилки запису, будь-які операції, що залишилися, будуть перервані.
Невідсортовані операції відправляються на сервер у довільному
порядку, де можуть виконуватися паралельно. Повідомлення про помилки,
які виникають будуть відправлені після виконання всіх операцій.

## Огляд класів

final class **MongoDB\Driver\BulkWrite** implements
[Countable](class.countable.md) {

/\* Методи \*/

public [\_\_construct](mongodb-driver-bulkwrite.construct.md)(array
`$options` u003d ?)

public [count](mongodb-driver-bulkwrite.count.md)(): int

public [delete](mongodb-driver-bulkwrite.delete.md)(array\|object
`$filter`, array `$deleteOptions` u003d ?): void

public [insert](mongodb-driver-bulkwrite.insert.md)(array\|object
`$document`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [update](mongodb-driver-bulkwrite.update.md)(array\|object
`$filter`, array\|object `$newObj`, array `$updateOptions` u003d ?): void

}

## Приклади

**Приклад #1 Змішані операції групуються за типом**

Змішані операції запису (тобто додавання, оновлення або видалення)
будуть зібрані в типізовані команди записи, які в
послідовно будуть відправлені на сервер.

` <?php$bulk u003d new MongoDB\Driver\BulkWrite(['ordered' u003d> true]);$bulk->insert(['_id' u003d> 1, 'x' u003d> 1]);$bulk- >insert(['_id' u003d> 2, 'x' u003d> 2]);$bulk->update(['x' u003d> 2], ['$set' u003d> ['x' u003d> 1] ]);$bulk->insert(['_id' u003d> 3, 'x' u003d> 3]);$bulk->delete(['x' u003d> 1]);?> `

В результаті буде виконано чотири команди запису (тобто звернень).
Оскільки операції відсортовані, третя вставка не може бути
відправлено доти, доки не буде виконано попереднє оновлення.

**Приклад #2 Відсортовані операції запису, що викликають помилку**

` <?php$bulk u003d new MongoDB\Driver\BulkWrite(['ordered' u003d> true]);$bulk->delete([]);$bulk->insert(['_id' u003d> 1]); $bulk->insert(['_id' u003d> 2]);$bulk->insert(['_id' u003d> 3, 'hello' u003d> 'world']);$bulk->update(['_id ' u003d> 3], ['$set' u003d> ['hello' u003d> 'earth']]);$bulk->insert(['_id' u003d> 4, 'hello' u003d> 'pluto'])) ;$bulk->update(['_id' u003d> 4], ['$set' u003d> ['hello' u003d> 'moon']]);$bulk->insert(['_id' u003d> 3] );$bulk->insert(['_id' u003d> 4]);$bulk->insert(['_id' u003d> 5]);$manager u003d new MongoDB\Driver\Manager('mongodb://localhost :27017');$writeConcernu003du003dnew MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);try {    $result u003d $manager->execute$ ;} catch (MongoDB\Driver\Exception\BulkWriteException $e) {   $result u003d $e->getWriteResult(); // Перевіритися, що гарантія запису не може бути виконана    if ($writeConcernError u003d $result->getWriteConcernError()) {            
",            $writeConcernError->getMessage(),            $writeConcernError->getCode(),            var_export($writeConcernError->getInfo(), true)        );    }    // Проверить, не выполнялись ли какие-либо операции записи    foreach ($result- >getWriteErrors() as $writeError) {        printf("Operation#%d: %s (%d)
",            $writeError->getIndex(),            $writeError->getMessage(),            $writeError->getCode()        );    }} catch (MongoDB\Driver\Exception\Exception $e) {    printf("Другая ошибка: %s
", $e->getMessage());   exit;}printf("Додано %d документ(ів)
", $result->getInsertedCount());printf("Оновлено %d документ(ів)
", $result->getModifiedCount());?> `

Результат виконання цього прикладу:

Operation#7: E11000 duplicate key error index: db.collection.$_id_ dup key: { : 3 } (11000)
Додано 4 документ(ів)
Оновлено 2 документ(ів)

Якщо гарантія запису не може бути виконана, результат наведеного вище
прикладу буде щось на кшталт цього:

waiting for replication timed out (64): array (
'wtimeout' u003d> true,
)
Operation#7: E11000 duplicate key error index: databaseName.collectionName.$_id_ dup key: { : 3 } (11000)
Inserted 4 document(s)
Updated 2 document(s)

Якщо ми виконаємо приклад вище, але розв'яжемо невідсортовані записи:

` <?php$bulk u003d new MongoDB\Driver\BulkWrite(['ordered' u003d> false]);/* ... */?> `

Результат виконання цього прикладу:

Operation#7: E11000 duplicate key error index: db.collection.$_id_ dup key: { : 3 } (11000)
Operation#8: E11000 duplicate key error index: db.collection.$_id_ dup key: { : 4 } (11000)
Inserted 5 document(s)
Updated 2 document(s)

## Дивіться також

- [MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- [MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)
- [MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md)

## Зміст

- [MongoDB\Driver\BulkWrite::\_\_construct](mongodb-driver-bulkwrite.construct.md)
— Створює новий об'єкт BulkWrite
- [MongoDB\Driver\BulkWrite::count](mongodb-driver-bulkwrite.count.md)
- Підраховує кількість операцій запису в порції
- [MongoDB\Driver\BulkWrite::delete](mongodb-driver-bulkwrite.delete.md)
— Додавання операції видалення порції
- [MongoDB\Driver\BulkWrite::insert](mongodb-driver-bulkwrite.insert.md)
- Додати операцію вставки в порцію
- [MongoDB\Driver\BulkWrite::update](mongodb-driver-bulkwrite.update.md)
— Додати операцію оновлення до порції
