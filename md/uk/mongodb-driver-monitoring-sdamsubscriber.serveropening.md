- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatSucceeded](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatsucceeded.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::topologyChanged
»](mongodb-driver-monitoring-sdamsubscriber.topologychanged.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод сповіщення про відкриття сервера

# MongoDB\Driver\Monitoring\SDAMSubscriber::serverOpening

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::serverOpening - Метод
повідомлення про відкриття сервера

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::serverOpening**([MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод, коли
буде відкрито сервер.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md))
Об'єкт події містить інформацію про відкритий сервер.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
