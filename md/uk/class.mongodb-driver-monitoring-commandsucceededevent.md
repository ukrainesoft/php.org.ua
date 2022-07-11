- [«
MongoDB\Driver\Monitoring\CommandStartedEvent::getServiceId](mongodb-driver-monitoring-commandstartedevent.getserviceid.md)
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getCommandName
»](mongodb-driver-monitoring-commandsucceededevent.getcommandname.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\CommandSucceededEvent

# Клас MongoDB\Driver\Monitoring\CommandSucceededEvent

(mongodb \>u003d1.3.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\CommandSucceededEvent** містить
інформацію про успішну команду.

## Огляд класів

final class **MongoDB\Driver\Monitoring\CommandSucceededEvent** {

/\* Методи \*/

final public
[getCommandName](mongodb-driver-monitoring-commandsucceededevent.getcommandname.md)():
string

final public
[getDurationMicros](mongodb-driver-monitoring-commandsucceededevent.getdurationmicros.md)():
int

final public
[getOperationId](mongodb-driver-monitoring-commandsucceededevent.getoperationid.md)():
string

final public
[getReply](mongodb-driver-monitoring-commandsucceededevent.getreply.md)():
object

final public
[getRequestId](mongodb-driver-monitoring-commandsucceededevent.getrequestid.md)():
string

final public
[getServer](mongodb-driver-monitoring-commandsucceededevent.getserver.md)():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

final public
[getServerConnectionId](mongodb-driver-monitoring-commandsucceededevent.getserverconnectionid.md)():
?int

final public
[getServiceId](mongodb-driver-monitoring-commandsucceededevent.getserviceid.md)():
?[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

}

## Зміст

- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getCommandName](mongodb-driver-monitoring-commandsucceededevent.getcommandname.md)
- Повертає ім'я команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getDurationMicros](mongodb-driver-monitoring-commandsucceededevent.getdurationmicros.md)
— Повертає тривалість команди у мікросекундах
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getOperationId](mongodb-driver-monitoring-commandsucceededevent.getoperationid.md)
- Повертає ідентифікатор операції команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getReply](mongodb-driver-monitoring-commandsucceededevent.getreply.md)
- Повертає документ відповіді команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getRequestId](mongodb-driver-monitoring-commandsucceededevent.getrequestid.md)
- Повертає ідентифікатор запиту команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer](mongodb-driver-monitoring-commandsucceededevent.getserver.md)
— Повертає сервер, на якому було виконано команду
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getServerConnectionId](mongodb-driver-monitoring-commandsucceededevent.getserverconnectionid.md)
— Повертає ідентифікатор з'єднання із сервером для команди
- [MongoDB\Driver\Monitoring\CommandSucceededEvent::getServiceId](mongodb-driver-monitoring-commandsucceededevent.getserviceid.md)
— Повертає ідентифікатор служби балансувальника навантаження
команди
