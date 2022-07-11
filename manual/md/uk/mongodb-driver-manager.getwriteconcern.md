- [«
MongoDB\Driver\Manager::getServers](mongodb-driver-manager.getservers.md)
- [MongoDB\Driver\Manager::removeSubscriber
»](mongodb-driver-manager.removesubscriber.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Повертає WriteConcern для Manager

# MongoDB\Driver\Manager::getWriteConcern

(mongodb \>u003d1.0.0)

MongoDB\Driver\Manager::getWriteConcern — Повертає WriteConcern для
Manager

### Опис

final public **MongoDB\Driver\Manager::getWriteConcern**():
[MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)

Повертає
[MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
для Manager, отриманий із його URI-опцій. Це гарантія запису з
замовчуванням для запитів і команд, що виконуються в Manager.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

[MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
для Manager.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Manager::getWriteConcern()****

` <?php$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');var_dump($manager->getWriteConcern());$manager u003d new MongoDB\Driver\Manager('mongodb:/ /localhost:27017/?wu003dmajority&wtimeoutMSu003d2000');var_dump($manager->getWriteConcern());?> `

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\Driver\WriteConcern)#2 (0) {
}
object(MongoDB\Driver\WriteConcern)#1 (2) {
["w"]u003d>
string(8) "majority"
["wtimeout"]u003d>
int(2000)
}

### Дивіться також

- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- [MongoDB\Driver\Manager::\_\_construct()](mongodb-driver-manager.construct.md) -
Створює новий Manager MongoDB
