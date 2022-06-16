- [«MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md)
- [MongoDB\Driver\WriteError::getIndex
»](mongodb-driver-writeerror.getindex.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md)
- Повертає код помилки WriteError

# MongoDB\Driver\WriteError::getCode

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteError::getCode — Повертає код помилки WriteError

### Опис

final public **MongoDB\Driver\WriteError::getCode**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає код помилки WriteError.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteError::getCode()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['_id' u003d> 1]);$bulk->insert(['_id' u003d> 1]);try { {   $manager->executeBulkWrite('db.collection', $bulk);} catch(MongoDB\Driver\Exception\BulkWriteException$$e) {    var_dump ()[0]->getCode());}?> `

Результатом виконання цього прикладу буде щось подібне:

int(11000)
