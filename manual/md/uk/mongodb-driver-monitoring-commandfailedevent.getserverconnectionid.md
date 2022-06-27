- [«
MongoDB\Driver\Monitoring\CommandFailedEvent::getServer](mongodb-driver-monitoring-commandfailedevent.getserver.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getServiceId
»](mongodb-driver-monitoring-commandfailedevent.getserviceid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Повертає ідентифікатор з'єднання із сервером для команди

# MongoDB\Driver\Monitoring\CommandFailedEvent::getServerConnectionId

(mongodb \>u003d1.14.0)

MongoDB\Driver\Monitoring\CommandFailedEvent::getServerConnectionId -
Повертає ідентифікатор з'єднання із сервером для команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandFailedEvent::getServerConnectionId**():
?int

Повертає ідентифікатор з'єднання із сервером для команди.
Ідентифікатор підключення до сервера відрізняється від сервера (тобто.
[MongoDB\Driver\Monitoring\CommandFailedEvent::getServer()](mongodb-driver-monitoring-commandfailedevent.getserver.md))
і повертається в поле "connectionId" відповіді команди `hello` у MongoDB
4.2+.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор з'єднання із сервером або **`null`**, якщо він
недоступний.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
