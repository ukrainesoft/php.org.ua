- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::serverClosed](mongodb-driver-monitoring-sdamsubscriber.serverclosed.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatStarted
»](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatstarted.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод повідомлення про невдалий heartbeat сервер

# MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatFailed

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatFailed - Метод
повідомлення про невдалий heartbeat сервера

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatFailed**([MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод у разі
Поява помилки серцевогосерверу (тобто команди
[» hello](https://www.mongodb.com/docs/manual/reference/command/hello/),
викликаної через [» моніторинг
сервера](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst)).

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md))
Об'єкт події, що містить інформацію про непрацюючий heartbeat сервера.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
