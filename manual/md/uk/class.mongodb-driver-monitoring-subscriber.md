- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::topologyOpening](mongodb-driver-monitoring-sdamsubscriber.topologyopening.md)
- [MongoDB\Driver\Exception »](mongodb.exceptions.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md)
- Інтерфейс MongoDB\Driver\Monitoring\Subscriber

# Інтерфейс MongoDB\Driver\Monitoring\Subscriber

(mongodb \>u003d1.3.0)

## Вступ

Базовий інтерфейс для передплатників подій Використовується як тип
параметра у функціях
[MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md)
і
[MongoDB\Driver\MonitoringemoveSubscriber()](function.mongodb.driver.monitoring.removesubscriber.md),
і не має реалізовуватися безпосередньо.

## Огляд інтерфейсів

class **MongoDB\Driver\Monitoring\Subscriber** {

}

Цей інтерфейс немає методів. Його єдина мета – бути базовим
інтерфейс для всіх передплатників подій.
