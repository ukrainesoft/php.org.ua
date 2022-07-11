- [«
MongoDB\Driver\WriteError::getInfo](mongodb-driver-writeerror.getinfo.md)
- [MongoDB\Driver\WriteResult
»](class.mongodb-driver-writeresult.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md)
- Повертає повідомлення про помилку WriteError

# MongoDB\Driver\WriteError::getMessage

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteError::getMessage — Повертає повідомлення про помилку
WriteError

### Опис

final public **MongoDB\Driver\WriteError::getMessage**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає повідомлення про помилку WriteError.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteError::getMessage()****

` <?php$manager u003d new MongoDB\Driver\Manager;$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['_id' u003d> 1]);$bulk->insert(['_id' u003d> 1]); ()[0]->getMessage());}?> `

Результатом виконання цього прикладу буде щось подібне:

string(70) "E11000 duplicate key error index: db.collection.$_id_ dup key: { : 1 }"
