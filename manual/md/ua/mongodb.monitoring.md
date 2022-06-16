- [«
MongoDB\BSON\Undefined::unserialize](mongodb-bson-undefined.unserialize.md)
- [Функції »](ref.monitoring.functions.md)

- [PHP Manual](index.md)
- [MongoDB](set.mongodb.md)
- Класи моніторингу та функції передплатника

# Класи моніторингу та функції передплатника

- [Функції](ref.monitoring.functions.md)
- [MongoDB\Driver\Monitoring ddSubscriber](function.mongodb.driver.monitoring.addsubscriber.md)
— Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\MonitoringemoveSubscriber](function.mongodb.driver.monitoring.removesubscriber.md)
— Скасує глобальну реєстрацію передплатника на подію
моніторингу
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Клас MongoDB\Driver\Monitoring\CommandFailedEvent
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
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Клас MongoDB\Driver\Monitoring\CommandStartedEvent
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
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Клас MongoDB\Driver\Monitoring\CommandSucceededEvent
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
- [MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerChangedEvent
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getHost](mongodb-driver-monitoring-serverchangedevent.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getNewDescription](mongodb-driver-monitoring-serverchangedevent.getnewdescription.md)
— Повертає новий опис сервера
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getPort](mongodb-driver-monitoring-serverchangedevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getPreviousDescription](mongodb-driver-monitoring-serverchangedevent.getpreviousdescription.md)
— Повертає попередній опис сервера
- [MongoDB\Driver\Monitoring\ServerChangedEvent::getTopologyId](mongodb-driver-monitoring-serverchangedevent.gettopologyid.md)
— Повертає ідентифікатор топології, пов'язаний із цим сервером
- [MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerClosedEvent
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getHost](mongodb-driver-monitoring-serverclosedevent.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getPort](mongodb-driver-monitoring-serverclosedevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerClosedEvent::getTopologyId](mongodb-driver-monitoring-serverclosedevent.gettopologyid.md)
— Повертає ідентифікатор топології, пов'язаний із цим сервером
- [MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
- Клас MongoDB\Driver\Monitoring\ServerOpeningEvent
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getHost](mongodb-driver-monitoring-serveropeningevent.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getPort](mongodb-driver-monitoring-serveropeningevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerOpeningEvent::getTopologyId](mongodb-driver-monitoring-serveropeningevent.gettopologyid.md)
— Returns the topology ID associated with this server
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getDurationMicros](mongodb-driver-monitoring-serverheartbeatfailedevent.getdurationmicros.md)
— Повертає тривалість heartbeat у мікросекундах
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getError](mongodb-driver-monitoring-serverheartbeatfailedevent.geterror.md)
— Повертає виняток, пов'язаний із невдалим виконанням
heartbeat
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getHost](mongodb-driver-monitoring-serverheartbeatfailedevent.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::getPort](mongodb-driver-monitoring-serverheartbeatfailedevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatfailedevent.isawaited.md)
— Повертає, чи використовувався у heartbeat потоковий протокол
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getHost](mongodb-driver-monitoring-serverheartbeatstartedevent.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::getPort](mongodb-driver-monitoring-serverheartbeatstartedevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatstartedevent.isawaited.md)
— Повертає, чи використовувався у heartbeat потоковий протокол
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getDurationMicros](mongodb-driver-monitoring-serverheartbeatsucceededevent.getdurationmicros.md)
— Повертає тривалість heartbeat у мікросекундах
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getHost](mongodb-driver-monitoring-serverheartbeatsucceededevent.gethost.md)
— Повертає ім'я сервера хоста
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getPort](mongodb-driver-monitoring-serverheartbeatsucceededevent.getport.md)
— Повертає порт, на якому прослуховується сервер
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getReply](mongodb-driver-monitoring-serverheartbeatsucceededevent.getreply.md)
- Повертає документ відповіді heartbeat
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited](mongodb-driver-monitoring-serverheartbeatsucceededevent.isawaited.md)
— Повертає, чи використовувався у heartbeat потоковий протокол
- [MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
- Клас MongoDB\Driver\Monitoring\TopologyChangedEvent
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getNewDescription](mongodb-driver-monitoring-topologychangedevent.getnewdescription.md)
— Повертає новий опис топології
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getPreviousDescription](mongodb-driver-monitoring-topologychangedevent.getpreviousdescription.md)
— Повертає попередній опис топології
- [MongoDB\Driver\Monitoring\TopologyChangedEvent::getTopologyId](mongodb-driver-monitoring-topologychangedevent.gettopologyid.md)
- Повертає ідентифікатор топології
- [MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md)
- Клас MongoDB\Driver\Monitoring\TopologyClosedEvent
- [MongoDB\Driver\Monitoring\TopologyClosedEvent::getTopologyId](mongodb-driver-monitoring-topologyclosedevent.gettopologyid.md)
- Повертає ідентифікатор топології
- [MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md)
- Клас MongoDB\Driver\Monitoring\TopologyOpeningEvent
- [MongoDB\Driver\Monitoring\TopologyOpeningEvent::getTopologyId](mongodb-driver-monitoring-topologyopeningevent.gettopologyid.md)
- Повертає ідентифікатор топології
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- Інтерфейс The MongoDB\Driver\Monitoring\CommandSubscriber
- [MongoDB\Driver\Monitoring\CommandSubscriber::commandFailed](mongodb-driver-monitoring-commandsubscriber.commandfailed.md)
— Метод повідомлення про невдалу команду
- [MongoDB\Driver\Monitoring\CommandSubscriber::commandStarted](mongodb-driver-monitoring-commandsubscriber.commandstarted.md)
— Метод повідомлення про запущену команду
- [MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded](mongodb-driver-monitoring-commandsubscriber.commandsucceeded.md)
— Метод сповіщення про успішну команду
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Інтерфейс MongoDB\Driver\Monitoring\SDAMSubscriber
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
- [MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
- Інтерфейс MongoDB\Driver\Monitoring\Subscriber
