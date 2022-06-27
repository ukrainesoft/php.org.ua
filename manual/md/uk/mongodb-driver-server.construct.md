- [«MongoDB\Driver\Server](class.mongodb-driver-server.md)
- [MongoDB\Driver\Server::executeBulkWrite
»](mongodb-driver-server.executebulkwrite.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Створює новий Server (не використовується)

# MongoDB\Driver\Server::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::\_\_construct - Створює новий Server (не
використовується)

### Опис

final private **MongoDB\Driver\Server::\_\_construct**()

Об'єкти [MongoDB\Driver\Server](class.mongodb-driver-server.md)
створюються всередині
[MongoDB\Driver\Manager](class.mongodb-driver-manager.md), коли
з'єднання з базою даних встановлено та можуть бути повернені
[MongoDB\Driver\Manager::getServers()](mongodb-driver-manager.getservers.md)
і
[MongoDB\Driver\Manager::selectServer()](mongodb-driver-manager.selectserver.md).

### Список параметрів

Ця функція не має параметрів.

### Дивіться також

- [MongoDB\Driver\Manager::getServers()](mongodb-driver-manager.getservers.md) -
Повертає сервери, до яких підключено менеджера
- [MongoDB\Driver\Manager::selectServer()](mongodb-driver-manager.selectserver.md) -
Вибрати сервер, що відповідає перевагам читання
