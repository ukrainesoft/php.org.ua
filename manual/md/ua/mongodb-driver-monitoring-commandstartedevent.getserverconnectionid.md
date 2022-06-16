- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getServer](mongodb-driver-monitoring-commandstartedevent.getserver.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getServiceId
»](mongodb-driver-monitoring-commandstartedevent.getserviceid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає ідентифікатор з'єднання із сервером для команди

# MongoDB\Driver\Monitoring\CommandStartedEvent::getServerConnectionId

(mongodb \>u003d1.14.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getServerConnectionId -
Повертає ідентифікатор з'єднання із сервером для команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getServerConnectionId**():
?int

Повертає ідентифікатор з'єднання із сервером для команди.
Ідентифікатор з'єднання із сервером відрізняється від сервера (тобто.
[MongoDB\Driver\Monitoring\CommandStartedEvent::getServer()](mongodb-driver-monitoring-commandstartedevent.getserver.md))
і повертається в поле "connectionId" з відповіді команди `hello` до MongoDB
4.2+.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор з'єднання із сервером або **`null`**, якщо він
недоступний.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
