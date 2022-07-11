- [«
MongoDB\Driver\Manager::getReadPreference](mongodb-driver-manager.getreadpreference.md)
- [MongoDB\Driver\Manager::getWriteConcern
»](mongodb-driver-manager.getwriteconcern.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Повертає сервери, до яких підключено менеджера

# MongoDB\Driver\Manager::getServers

(mongodb \>u003d1.0.0)

MongoDB\Driver\Manager::getServers - Повертає сервери, до яких
підключений менеджер

### Опис

final public **MongoDB\Driver\Manager::getServers**(): array

Повертає масив (array) екземплярів
[MongoDB\Driver\Server](class.mongodb-driver-server.md), до яких
підключений поточний менеджер.

> **Примітка**: Оскільки драйвер підключається до бази даних ліниво,
> цей метод може повертати порожній масив (array), якщо він викликається
> перед виконанням операції
> [MongoDB\Driver\Manager](class.mongodb-driver-manager.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив (array) екземплярів
[MongoDB\Driver\Server](class.mongodb-driver-server.md), до яких
підключений менеджер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Manager::getServers()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017");/* З-за того, драйвер підключається к серверу ліниво, дзвін Manager порожній масив. */var_dump($manager->getServers());$command u003d new MongoDB\Driver\Command(['ping' u003d> 1]);$manager->executeCommand('db', $command);var_dump($ manager->getServers());?> `

Результатом виконання цього прикладу буде щось подібне:

array(0) {
}
array(1) {
[0]u003d>
object(MongoDB\Driver\Server)#3 (10) {
["host"]u003d>
string(9) "localhost"
["port"]u003d>
int(27017)
["type"]u003d>
int(1)
["is_primary"]u003d>
bool(false)
["is_secondary"]u003d>
bool(false)
["is_arbiter"]u003d>
bool(false)
["is_hidden"]u003d>
bool(false)
["is_passive"]u003d>
bool(false)
["last_hello_response"]u003d>
array(8) {
["isWritablePrimary"]u003d>
bool(true)
["maxBsonObjectSize"]u003d>
int(16777216)
["maxMessageSizeBytes"]u003d>
int(48000000)
["maxWriteBatchSize"]u003d>
int(1000)
["localTime"]u003d>
object(MongoDB\BSON\UTCDateTime)#4 (1) {
["milliseconds"]u003d>
int(1447267964517)
}
["maxWireVersion"]u003d>
int(3)
["minWireVersion"]u003d>
int(0)
["ok"]u003d>
float(1)
}
["round_trip_time"]u003d>
int(554)
}
}

### Дивіться також

- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- [MongoDB\Driver\Manager::selectServer()](mongodb-driver-manager.selectserver.md) -
Вибрати сервер, що відповідає перевагам читання
