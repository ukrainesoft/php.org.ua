- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::serverChanged](mongodb-driver-monitoring-sdamsubscriber.serverchanged.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatFailed
»](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatfailed.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод сповіщення про закриття сервера

# MongoDB\Driver\Monitoring\SDAMSubscriber::serverClosed

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::serverClosed — Метод
повідомлення про закриття сервера

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::serverClosed**([MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод, якщо
сервер зачинився.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md))
Об'єкт події, що містить інформацію про закритий сервер.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
