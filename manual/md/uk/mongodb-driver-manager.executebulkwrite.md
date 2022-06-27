- [«
MongoDB\Driver\Manager::createClientEncryption](mongodb-driver-manager.createclientencryption.md)
- [MongoDB\Driver\Manager::executeCommand
»](mongodb-driver-manager.executecommand.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Виконує одну або кілька операцій запису

# MongoDB\Driver\Manager::executeBulkWrite

(mongodb \>u003d1.0.0)

MongoDB\Driver\Manager::executeBulkWrite — Виконує одну або кілька
операцій запису

### Опис

final public **MongoDB\Driver\Manager::executeBulkWrite**(string
`$namespace`,
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md) `$bulk`,
array `$options` u003d array()):
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)

Виконує одну або кілька операцій запису на головному сервері.

Об'єкт класу
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md) може
бути створено з однією або декількома операціями запису різного типу
(наприклад, оновлення, видалення та вставки). Драйвер спробує
надіслати операції одного і того ж типу на сервер з мінімальним
кількість запитів, щоб скоротити звернення до сервера.

### Список параметрів

`namespace` (string)
Повністю певне ім'я (тобто `databaseName.collectionName`).

`bulk` ([MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md))
Записи для виконання.

`опції`
| Опція | Тип | Опис |
|--------------|---------------------------------- -------------------------------------|------------ --------------------------------|
| session | [MongoDB\Driver\Session](class.mongodb-driver-session.md) | Сесія зв'язування з операцією. |
| writeConcern | [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md) | Гарантія запису для застосування до операції. |

**options**

### Значення, що повертаються

У разі успішного виконання повертає
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md).

### Помилки

- За відсутності будь-якої операції запису в `bulk`, викидає
виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Якщо `bulk` вже був виконаний, викидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
Об'єкти
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md) не
можуть бути виконані кілька разів.
- Викидається
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо опція ``session'` використовується в поєднанні з непідтвердженим
гарантією запису.
- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- За помилки запису кидає виняток
[MongoDB\Driver\Exception\BulkWriteException](class.mongodb-driver-exception-bulkwriteexception.md).
- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- При виникненні інших помилок викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ----------------------------------|
| PECL mongodb 1.4.4 | Якщо опція "session" використовується в поєднанні з непідтвердженою гарантією запису, викидається виняток [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md). |
| PECL mongodb 1.4.0 | Третій параметр `options` тепер є масивом. Для зворотної сумісності цей параметр також приймає об'єкт [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md). |
| PECL mongodb 1.3.0 | Тепер викидається виняток [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md), якщо `bulk` не містить операцій запису. Раніше викидалося [MongoDB\Driver\Exception\BulkWriteException](class.mongodb-driver-exception-bulkwriteexception.md). |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Manager::executeBulkWrite()****

` <?php$bulk u003d new MongoDB\Driver\BulkWrite();$bulk->insert(['_id' u003d> 1, 'x' u003d> 1]);$bulk->insert(['_id' u003d > 2, 'x' u003d> 2]);$bulk->update(['x' u003d> 2], ['$set' u003d> ['x' u003d> 1]], ['multi' u003d> false, 'upsert' u003d> false]);$bulk->update(['x' u003d> 3], ['$set' u003d> ['x' u003d> 3]], ['multi' u003d> false , 'upsert' u003d> true]);$bulk->update(['_id' u003d> 3], ['$set' u003d> ['x' u003d> 3]], ['multi' u003d> false, 'upsert' u003d> true]);$bulk->insert(['_id' u003d> 4, 'x' u003d> 2]);$bulk->delete(['x' u003d> 1], ['limit ' u003d> 1]);$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');$writeConcern u003d new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::1: $result u003d $manager->executeBulkWrite('db.collection', $bulk, $writeConcern);printf("Додано %d документ(ів)
", $result->getInsertedCount());printf("Знайдено %d документ(ів)
", $result->getMatchedCount());printf("Оновлено %d документ(ів)
", $result->getModifiedCount());printf("Додано|і|додано|%d документ(ів)
", $result->getUpsertedCount());printf("Видалено %d документ(ів)
", $result->getDeletedCount());foreach ($result->getUpsertedIds() as $index u003d> $id) {    printf('upsertedId[%d]: ', $index);    var_; }/* Якщо WriteConcern не може бути виконаний */if ($writeConcernError u003d $result->getWriteConcernError()) {    printf("%s (%d): %s
", $writeConcernError->getMessage(), $writeConcernError->getCode(), var_export($writeConcernError->getInfo(), true));}/* Якщо запис не може відбутися во () as $writeError) {    printf("Операція#%d: %s (%d)
", $writeError->getIndex(), $writeError->getMessage(), $writeError->getCode());}?> `

Результатом виконання цього прикладу буде щось подібне:

Додано 3 документ(ів)
Знайдено 1 документ(ів)
Оновлено 1 документ(ів)
Додано та додано 2 документ(ів)
Видалено 1 документ(ів)
upsertedId[3]: object(MongoDB\BSON\ObjectId)#5 (1) {
["oid"]u003d>
string(24) "54d3adc3ce7a792f4d703756"
}
upsertedId[4]: int(3)

### Дивіться також

- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- [MongoDB\Driver\Server::executeBulkWrite()](mongodb-driver-server.executebulkwrite.md) -
Виконати одну або кілька операцій запису на сервері
