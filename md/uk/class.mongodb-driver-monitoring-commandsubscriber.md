- [«
MongoDB\Driver\Monitoring\TopologyOpeningEvent::getTopologyId](mongodb-driver-monitoring-topologyopeningevent.gettopologyid.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber::commandFailed
»](mongodb-driver-monitoring-commandsubscriber.commandfailed.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Інтерфейс The MongoDB\Driver\Monitoring\CommandSubscriber

# Інтерфейс The MongoDB\Driver\Monitoring\CommandSubscriber

(mongodb \>u003d1.3.0)

## Вступ

Класи можуть реалізувати цей інтерфейс для реєстрації передплатника
подій, який повідомляється про кожну, успішну або невдалу подію
команди. Докладніше дивіться [Моніторинг
продуктивності програми (Application Performance Monitoring або
APM)](mongodb.tutorial.apm.md).

## Огляд інтерфейсів

class **MongoDB\Driver\Monitoring\CommandSubscriber** implements
[MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
{

/\* Методи \*/

abstract public
[commandFailed](mongodb-driver-monitoring-commandsubscriber.commandfailed.md)([MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
`$event`): void

abstract public
[commandStarted](mongodb-driver-monitoring-commandsubscriber.commandstarted.md)([MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
`$event`): void

abstract public
[commandSucceeded](mongodb-driver-monitoring-commandsubscriber.commandsucceeded.md)([MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
`$event`): void

}

## Зміст

- [MongoDB\Driver\Monitoring\CommandSubscriber::commandFailed](mongodb-driver-monitoring-commandsubscriber.commandfailed.md)
— Метод повідомлення про невдалу команду
- [MongoDB\Driver\Monitoring\CommandSubscriber::commandStarted](mongodb-driver-monitoring-commandsubscriber.commandstarted.md)
— Метод повідомлення про запущену команду
- [MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded](mongodb-driver-monitoring-commandsubscriber.commandsucceeded.md)
— Метод сповіщення про успішну команду
