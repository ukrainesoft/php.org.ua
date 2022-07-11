- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::serverOpening](mongodb-driver-monitoring-sdamsubscriber.serveropening.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::topologyClosed
»](mongodb-driver-monitoring-sdamsubscriber.topologyclosed.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод повідомлення про зміну опису топології

# MongoDB\Driver\Monitoring\SDAMSubscriber::topologyChanged

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::topologyChanged - Метод
повідомлення про зміну опису топології

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::topologyChanged**([MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод, якщо
Опис топології зміниться.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md))
Об'єкт події, що містить інформацію про змінений опис топології.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
