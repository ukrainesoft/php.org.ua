- [«
MongoDB\Driver\WriteError::getCode](mongodb-driver-writeerror.getcode.md)
- [MongoDB\Driver\WriteError::getInfo
»](mongodb-driver-writeerror.getinfo.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md)
- Повертає індекс запису, що відповідає цьому WriteError

# MongoDB\Driver\WriteError::getIndex

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteError::getIndex — Повертає індекс запису,
що відповідає цьому WriteError

### Опис

final public **MongoDB\Driver\WriteError::getIndex**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає індекс запису (з
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)),
відповідний поточний WriteError.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteError::getIndex()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['_id' u003d> 1]);$bulk->insert(['_id' u003d> 1]);try { {   $manager->executeBulkWrite('db.collection', $bulk);} catch(MongoDB\Driver\Exception\BulkWriteException$$e) {    var_dump ()[0]->getIndex());}?> `

Результатом виконання цього прикладу буде щось подібне:

int(1)

### Дивіться також

- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
