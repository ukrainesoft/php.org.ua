- [«
MongoDB\Driver\Manager::getEncryptedFieldsMap](mongodb-driver-manager.getencryptedfieldsmap.md)
- [MongoDB\Driver\Manager::getReadPreference
»](mongodb-driver-manager.getreadpreference.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Повертає ReadConcern для Manager

# MongoDB\Driver\Manager::getReadConcern

(mongodb \>u003d1.1.0)

MongoDB\Driver\Manager::getReadConcern — Повертає ReadConcern для
Manager

### Опис

final public **MongoDB\Driver\Manager::getReadConcern**():
[MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)

Повертає
[MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md) для
Manager, отриманий із його URI-опцій. Це гарантія читання за промовчанням
для запитів та команд, що виконуються в Manager.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

[MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md) для
Manager.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Manager::getReadConcern()****

` <?php$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');var_dump($manager->getReadConcern());$manager u003d new MongoDB\Driver\Manager('mongodb:/ /localhost:27017/?readConcernLevelu003dlocal');var_dump($manager->getReadConcern());?> `

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\Driver\ReadConcern)#2 (0) {
}
object(MongoDB\Driver\ReadConcern)#1 (1) {
["level"]u003d>
string(5) "local"
}

### Дивіться також

- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- [MongoDB\Driver\Manager::\_\_construct()](mongodb-driver-manager.construct.md) -
Створює новий Manager MongoDB
