- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getServerConnectionId](mongodb-driver-monitoring-commandstartedevent.getserverconnectionid.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent
»](class.mongodb-driver-monitoring-commandsucceededevent.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Повертає ідентифікатор служби балансувальника навантаження для команди

# MongoDB\Driver\Monitoring\CommandStartedEvent::getServiceId

(mongodb \>u003d1.11.0)

MongoDB\Driver\Monitoring\CommandStartedEvent::getServiceId — Повертає
ідентифікатор служби балансувальника навантаження для команди

### Опис

final public
**MongoDB\Driver\Monitoring\CommandStartedEvent::getServiceId**():
?[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

Якщо драйвер підключено до кластера MongoDB через балансувальник навантаження,
ідентифікатор служби відповідає полю `serviceId` у відповіді на команду
`hello`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор служби балансувальника навантаження або **`null`**,
якщо драйвер не підключено до балансувальника навантаження.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
