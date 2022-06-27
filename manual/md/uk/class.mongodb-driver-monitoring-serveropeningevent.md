- [«
MongoDB\Driver\Monitoring\ServerClosedEvent::getTopologyId](mongodb-driver-monitoring-serverclosedevent.gettopologyid.md)
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getHost
»](mongodb-driver-monitoring-serveropeningevent.gethost.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\ServerOpeningEvent

# Клас MongoDB\Driver\Monitoring\ServerOpeningEvent

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\ServerOpeningEvent** інкапсулює
інформацію про відкритий сервер.

## Огляд класів

final class **MongoDB\Driver\Monitoring\ServerOpeningEvent** {

/\* Методи \*/

final public
[getHost](mongodb-driver-monitoring-serveropeningevent.gethost.md)():
string

final public
[getPort](mongodb-driver-monitoring-serveropeningevent.getport.md)():
int

final public
[getTopologyId](mongodb-driver-monitoring-serveropeningevent.gettopologyid.md)():
[MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)

}

## Зміст

- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getHost](mongodb-driver-monitoring-serveropeningevent.gethost.md)
— Повертає ім'я сервера.
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getPort](mongodb-driver-monitoring-serveropeningevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getTopologyId](mongodb-driver-monitoring-serveropeningevent.gettopologyid.md)
— Returns the topology ID associated with this server
