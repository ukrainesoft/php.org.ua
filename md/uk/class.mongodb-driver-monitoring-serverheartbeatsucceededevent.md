- [«
MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatstartedevent.isawaited.md)
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getDurationMicros
»](mongodb-driver-monitoring-serverheartbeatsucceededevent.getdurationmicros.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent

# Клас MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent

(mongodb \>u003d1.13.0)

## Вступ

Клас **MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent**
Інкапсулює інформацію про успішний серцевийсервер.

## Огляд класів

final class **MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent**
{

/\* Методи \*/

final public
[getDurationMicros](mongodb-driver-monitoring-serverheartbeatsucceededevent.getdurationmicros.md)():
int

final public
[getHost](mongodb-driver-monitoring-serverheartbeatsucceededevent.gethost.md)():
string

final public
[getPort](mongodb-driver-monitoring-serverheartbeatsucceededevent.getport.md)():
int

final public
[getReply](mongodb-driver-monitoring-serverheartbeatsucceededevent.getreply.md)():
object

final public
[isAwaited](mongodb-driver-monitoring-serverheartbeatsucceededevent.isawaited.md)():
bool

}

## Зміст

- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getDurationMicros](mongodb-driver-monitoring-serverheartbeatsucceededevent.getdurationmicros.md)
— Повертає тривалість heartbeat у мікросекундах
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getHost](mongodb-driver-monitoring-serverheartbeatsucceededevent.gethost.md)
— Повертає ім'я сервера.
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getPort](mongodb-driver-monitoring-serverheartbeatsucceededevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getReply](mongodb-driver-monitoring-serverheartbeatsucceededevent.getreply.md)
- Повертає документ відповіді heartbeat
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatsucceededevent.isawaited.md)
— Повертає, чи використовувався у heartbeat потоковий протокол
