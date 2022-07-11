- [«
MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatfailedevent.isawaited.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getHost
»](mongodb-driver-monitoring-serverheartbeatstartedevent.gethost.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent

# Клас MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent**
Інкапсулює інформацію про запущений серцевийсервер.

## Огляд класів

final class **MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent** {

/\* Методи \*/

final public
[getHost](mongodb-driver-monitoring-serverheartbeatstartedevent.gethost.md)():
string

final public
[getPort](mongodb-driver-monitoring-serverheartbeatstartedevent.getport.md)():
int

final public
[isAwaited](mongodb-driver-monitoring-serverheartbeatstartedevent.isawaited.md)():
bool

}

## Зміст

- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getHost](mongodb-driver-monitoring-serverheartbeatstartedevent.gethost.md)
— Повертає ім'я сервера.
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getPort](mongodb-driver-monitoring-serverheartbeatstartedevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatstartedevent.isawaited.md)
— Повертає, чи використовувався у heartbeat потоковий протокол
