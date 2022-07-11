- [«
MongoDB\Driver\Monitoring\CommandSucceededEvent::getServiceId](mongodb-driver-monitoring-commandsucceededevent.getserviceid.md)
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getHost
»](mongodb-driver-monitoring-serverchangedevent.gethost.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\ServerChangedEvent

# Клас MongoDB\Driver\Monitoring\ServerChangedEvent

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\ServerChangedEvent** інкапсулює
інформацію про зміну опису сервера.

## Огляд класів

final class **MongoDB\Driver\Monitoring\ServerChangedEvent** {

/\* Методи \*/

final public
[getHost](mongodb-driver-monitoring-serverchangedevent.gethost.md)():
string

final public
[getNewDescription](mongodb-driver-monitoring-serverchangedevent.getnewdescription.md)():
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)

final public
[getPort](mongodb-driver-monitoring-serverchangedevent.getport.md)():
int

final public
[getPreviousDescription](mongodb-driver-monitoring-serverchangedevent.getpreviousdescription.md)():
[MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)

final public
[getTopologyId](mongodb-driver-monitoring-serverchangedevent.gettopologyid.md)():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

}

## Зміст

- [MongoDB\Driver\Monitoring\ServerChangedEvent::getHost](mongodb-driver-monitoring-serverchangedevent.gethost.md)
— Повертає ім'я сервера.
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getNewDescription](mongodb-driver-monitoring-serverchangedevent.getnewdescription.md)
— Повертає новий опис сервера
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getPort](mongodb-driver-monitoring-serverchangedevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getPreviousDescription](mongodb-driver-monitoring-serverchangedevent.getpreviousdescription.md)
— Повертає попередній опис сервера
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getTopologyId](mongodb-driver-monitoring-serverchangedevent.gettopologyid.md)
— Повертає ідентифікатор топології, пов'язаний із цим сервером
