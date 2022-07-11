- [«
MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer](mongodb-driver-monitoring-commandsucceededevent.getserver.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getServiceId
»](mongodb-driver-monitoring-commandsucceededevent.getserviceid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Повертає ідентифікатор з'єднання із сервером для команди

# MongoDB\Driver\Monitoring\CommandSucceededEvent::getServerConnectionId

(mongodb \>u003d1.14.0)

MongoDB\Driver\Monitoring\CommandSucceededEvent::getServerConnectionId -
Повертає ідентифікатор з'єднання із сервером для команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandSucceededEvent::getServerConnectionId**():
?int

Повертає ідентифікатор з'єднання із сервером для команди.
Ідентифікатор з'єднання із сервером відрізняється від сервера (тобто.
[MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer()](mongodb-driver-monitoring-commandsucceededevent.getserver.md))
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
