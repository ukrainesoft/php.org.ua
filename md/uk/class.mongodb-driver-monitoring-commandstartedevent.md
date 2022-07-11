- [«
MongoDB\Driver\Monitoring\CommandFailedEvent::getServiceId](mongodb-driver-monitoring-commandfailedevent.getserviceid.md)
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getCommand
»](mongodb-driver-monitoring-commandstartedevent.getcommand.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\CommandStartedEvent

# Клас MongoDB\Driver\Monitoring\CommandStartedEvent

(mongodb \>u003d1.3.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\CommandStartedEvent** містить
інформацію про запущену команду.

## Огляд класів

final class **MongoDB\Driver\Monitoring\CommandStartedEvent** {

/\* Методи \*/

final public
[getCommand](mongodb-driver-monitoring-commandstartedevent.getcommand.md)():
object

final public
[getCommandName](mongodb-driver-monitoring-commandstartedevent.getcommandname.md)():
string

final public
[getDatabaseName](mongodb-driver-monitoring-commandstartedevent.getdatabasename.md)():
string

final public
[getOperationId](mongodb-driver-monitoring-commandstartedevent.getoperationid.md)():
string

final public
[getRequestId](mongodb-driver-monitoring-commandstartedevent.getrequestid.md)():
string

final public
[getServer](mongodb-driver-monitoring-commandstartedevent.getserver.md)():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

final public
[getServerConnectionId](mongodb-driver-monitoring-commandstartedevent.getserverconnectionid.md)():
?int

final public
[getServiceId](mongodb-driver-monitoring-commandstartedevent.getserviceid.md)():
?[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

}

## Зміст

- [MongoDB\Driver\Monitoring\CommandStartedEvent::getCommand](mongodb-driver-monitoring-commandstartedevent.getcommand.md)
- Повертає документ команди
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getCommandName](mongodb-driver-monitoring-commandstartedevent.getcommandname.md)
- Повертає ім'я команди
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getDatabaseName](mongodb-driver-monitoring-commandstartedevent.getdatabasename.md)
— Повертає базу даних, на якій виконувалась команда
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getOperationId](mongodb-driver-monitoring-commandstartedevent.getoperationid.md)
- Повертає ідентифікатор операції команди
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getRequestId](mongodb-driver-monitoring-commandstartedevent.getrequestid.md)
- Повертає ідентифікатор запиту команди
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getServer](mongodb-driver-monitoring-commandstartedevent.getserver.md)
— Повертає сервер, на якому було виконано команду
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getServerConnectionId](mongodb-driver-monitoring-commandstartedevent.getserverconnectionid.md)
— Повертає ідентифікатор з'єднання із сервером для команди
- [MongoDB\Driver\Monitoring\CommandStartedEvent::getServiceId](mongodb-driver-monitoring-commandstartedevent.getserviceid.md)
— Повертає ідентифікатор служби балансувальника навантаження
команди
