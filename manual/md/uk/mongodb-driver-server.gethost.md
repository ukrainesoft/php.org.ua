- [«
MongoDB\Driver\Server::executeWriteCommand](mongodb-driver-server.executewritecommand.md)
- [MongoDB\Driver\Server::getInfo
»](mongodb-driver-server.getinfo.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Повертає ім'я сервера хоста

# MongoDB\Driver\Server::getHost

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::getHost - Повертає ім'я хоста сервера

### Опис

final public **MongoDB\Driver\Server::getHost**(): string

Повертає ім'я сервера хоста.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я сервера хоста.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\Driver\Server::getHost()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017/");$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_PRIMARY);$server u003d manager->selectServer($rp);var_dump($server->getHost());?> `

Результат виконання цього прикладу:

string(9) "localhost"

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
- [MongoDB\Driver\ServerDescription::getHost()](mongodb-driver-serverdescription.gethost.md) -
Повертає ім'я сервера хоста
