- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::topologyClosed](mongodb-driver-monitoring-sdamsubscriber.topologyclosed.md)
- [MongoDB\Driver\Monitoring\Subscriber
»](class.mongodb-driver-monitoring-subscriber.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод повідомлення про відкриття топології

# MongoDB\Driver\Monitoring\SDAMSubscriber::topologyOpening

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::topologyOpening - Метод
повідомлення про відкриття топології

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::topologyOpening**([MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод, коли
топологія буде відкрито.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md))
Об'єкт події, що містить інформацію про відкриту топологію.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
