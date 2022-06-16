- [«
MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded](mongodb-driver-monitoring-commandsubscriber.commandsucceeded.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverChanged
»](mongodb-driver-monitoring-sdamsubscriber.serverchanged.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Інтерфейс MongoDB\Driver\Monitoring\SDAMSubscriber

# Інтерфейс MongoDB\Driver\Monitoring\SDAMSubscriber

(mongodb \>u003d1.13.0)

## Вступ

Класи можуть реалізувати цей інтерфейс для реєстрації передплатника
подій, який отримує сповіщення про різні події SDAM.
Додаткову інформацію дивіться у посібнику з [» Виявлення та
моніторингу
серверів](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst)
і [» Моніторингу
SDAM](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring-monitoring.rst).

## Огляд інтерфейсів

class **MongoDB\Driver\Monitoring\SDAMSubscriber** implements
[MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
{

/\* Методи \*/

abstract public
[serverChanged](mongodb-driver-monitoring-sdamsubscriber.serverchanged.md)([MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
`$event`): void

abstract public
[serverClosed](mongodb-driver-monitoring-sdamsubscriber.serverclosed.md)([MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
`$event`): void

abstract public
[serverHeartbeatFailed](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatfailed.md)([MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedeventmd)
`$event`): void

abstract public
[serverHeartbeatStarted](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatstarted.md)([MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md)
`$event`): void

abstract public
[serverHeartbeatSucceeded](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatsucceeded.md)([MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsuccee
`$event`): void

abstract public
[serverOpening](mongodb-driver-monitoring-sdamsubscriber.serveropening.md)([MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
`$event`): void

abstract public
[topologyChanged](mongodb-driver-monitoring-sdamsubscriber.topologychanged.md)([MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
`$event`): void

abstract public
[topologyClosed](mongodb-driver-monitoring-sdamsubscriber.topologyclosed.md)([MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md)
`$event`): void

abstract public
[topologyOpening](mongodb-driver-monitoring-sdamsubscriber.topologyopening.md)([MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md)
`$event`): void

}

## Зміст

- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverChanged](mongodb-driver-monitoring-sdamsubscriber.serverchanged.md)
— Метод сповіщення про зміну опису сервера
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverClosed](mongodb-driver-monitoring-sdamsubscriber.serverclosed.md)
— Сповіщення про закриття сервера
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatFailed](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatfailed.md)
— Метод повідомлення про невдалий heartbeat сервер
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatStarted](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatstarted.md)
— Метод повідомлення про запущений heartbeat сервер
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatSucceeded](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatsucceeded.md)
— Метод сповіщення про успішний heartbeat сервер
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverOpening](mongodb-driver-monitoring-sdamsubscriber.serveropening.md)
— Метод сповіщення про відкриття сервера
- [MongoDB\Driver\Monitoring\SDAMSubscriber::topologyChanged](mongodb-driver-monitoring-sdamsubscriber.topologychanged.md)
— Метод сповіщення про зміну опису топології
- [MongoDB\Driver\Monitoring\SDAMSubscriber::topologyClosed](mongodb-driver-monitoring-sdamsubscriber.topologyclosed.md)
— Метод сповіщення про закриття топології
- [MongoDB\Driver\Monitoring\SDAMSubscriber::topologyOpening](mongodb-driver-monitoring-sdamsubscriber.topologyopening.md)
— Метод сповіщення про відкриття топології
