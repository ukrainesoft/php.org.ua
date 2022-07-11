- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::topologyChanged](mongodb-driver-monitoring-sdamsubscriber.topologychanged.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::topologyOpening
»](mongodb-driver-monitoring-sdamsubscriber.topologyopening.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод сповіщення про закриття топології

# MongoDB\Driver\Monitoring\SDAMSubscriber::topologyClosed

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::topologyClosed — Метод
повідомлення про закриття топології

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::topologyClosed**([MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод, якщо
топологія буде закрито.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md))
Об'єкт події, що містить інформацію про закриту топологію.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
