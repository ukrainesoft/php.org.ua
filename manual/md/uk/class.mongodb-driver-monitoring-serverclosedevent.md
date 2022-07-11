- [«
MongoDB\Driver\Monitoring\ServerChangedEvent::getTopologyId](mongodb-driver-monitoring-serverchangedevent.gettopologyid.md)
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getHost
»](mongodb-driver-monitoring-serverclosedevent.gethost.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\ServerClosedEvent

# Клас MongoDB\Driver\Monitoring\ServerClosedEvent

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\ServerClosedEvent** інкапсулює
інформацію про закритий сервер.

## Огляд класів

final class **MongoDB\Driver\Monitoring\ServerClosedEvent** {

/\* Методи \*/

final public
[getHost](mongodb-driver-monitoring-serverclosedevent.gethost.md)():
string

final public
[getPort](mongodb-driver-monitoring-serverclosedevent.getport.md)():
int

final public
[getTopologyId](mongodb-driver-monitoring-serverclosedevent.gettopologyid.md)():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

}

## Зміст

- [MongoDB\Driver\Monitoring\ServerClosedEvent::getHost](mongodb-driver-monitoring-serverclosedevent.gethost.md)
— Повертає ім'я сервера.
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getPort](mongodb-driver-monitoring-serverclosedevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getTopologyId](mongodb-driver-monitoring-serverclosedevent.gettopologyid.md)
— Повертає ідентифікатор топології, пов'язаний із цим сервером
