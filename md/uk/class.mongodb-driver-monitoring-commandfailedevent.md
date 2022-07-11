- [«
MongoDB\Driver\MonitoringemoveSubscriber](function.mongodb.driver.monitoring.removesubscriber.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getCommandName
»](mongodb-driver-monitoring-commandfailedevent.getcommandname.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\CommandFailedEvent

# Клас MongoDB\Driver\Monitoring\CommandFailedEvent

(mongodb \>u003d1.3.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\CommandFailedEvent** містить
інформацію про невдалу команду.

## Огляд класів

final class **MongoDB\Driver\Monitoring\CommandFailedEvent** {

/\* Методи \*/

final public
[getCommandName](mongodb-driver-monitoring-commandfailedevent.getcommandname.md)():
string

final public
[getDurationMicros](mongodb-driver-monitoring-commandfailedevent.getdurationmicros.md)():
int

final public
[getError](mongodb-driver-monitoring-commandfailedevent.geterror.md)():
[Exception](class.exception.md)

final public
[getOperationId](mongodb-driver-monitoring-commandfailedevent.getoperationid.md)():
string

final public
[getReply](mongodb-driver-monitoring-commandfailedevent.getreply.md)():
object

final public
[getRequestId](mongodb-driver-monitoring-commandfailedevent.getrequestid.md)():
string

final public
[getServer](mongodb-driver-monitoring-commandfailedevent.getserver.md)():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

final public
[getServerConnectionId](mongodb-driver-monitoring-commandfailedevent.getserverconnectionid.md)():
?int

final public
[getServiceId](mongodb-driver-monitoring-commandfailedevent.getserviceid.md)():
?[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

}

## Зміст

- [MongoDB\Driver\Monitoring\CommandFailedEvent::getCommandName](mongodb-driver-monitoring-commandfailedevent.getcommandname.md)
- Повертає ім'я команди
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getDurationMicros](mongodb-driver-monitoring-commandfailedevent.getdurationmicros.md)
— Повертає тривалість команди у мікросекундах
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getError](mongodb-driver-monitoring-commandfailedevent.geterror.md)
— Повертає виняток, пов'язаний із невдалою командою
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getOperationId](mongodb-driver-monitoring-commandfailedevent.getoperationid.md)
- Повертає ідентифікатор операції команди
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getReply](mongodb-driver-monitoring-commandfailedevent.getreply.md)
- Повертає документ відповіді команди
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getRequestId](mongodb-driver-monitoring-commandfailedevent.getrequestid.md)
- Повертає ідентифікатор запиту команди
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getServer](mongodb-driver-monitoring-commandfailedevent.getserver.md)
— Повертає сервер, на якому було виконано команду
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getServerConnectionId](mongodb-driver-monitoring-commandfailedevent.getserverconnectionid.md)
— Повертає ідентифікатор з'єднання із сервером для команди
- [MongoDB\Driver\Monitoring\CommandFailedEvent::getServiceId](mongodb-driver-monitoring-commandfailedevent.getserviceid.md)
— Повертає ідентифікатор служби балансувальника навантаження
команди
