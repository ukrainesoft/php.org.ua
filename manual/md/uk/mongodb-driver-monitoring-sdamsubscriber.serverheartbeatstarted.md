- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatFailed](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatfailed.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatSucceeded
»](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatsucceeded.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод повідомлення про запущений heartbeat сервер

# MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatStarted

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatStarted — Метод
повідомлення про запущений heartbeat сервер

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatStarted**([MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод при
запуску heartbeat сервера (тобто команди
[» hello](https://www.mongodb.com/docs/manual/reference/command/hello/),
викликаної через [» моніторинг
сервера](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst)).

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md))
Об'єкт події, що містить інформацію про запущений heartbeat сервер.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
