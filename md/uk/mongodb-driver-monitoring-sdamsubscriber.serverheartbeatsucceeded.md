- [«
MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatStarted](mongodb-driver-monitoring-sdamsubscriber.serverheartbeatstarted.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverOpening
»](mongodb-driver-monitoring-sdamsubscriber.serveropening.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод сповіщення про успішний heartbeat сервер

# MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatSucceeded

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatSucceeded —
Метод повідомлення про успішний heartbeat сервер

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatSucceeded**([MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викличе цей метод у разі
Успішне виконання серцевогосерверу (тобто команди
[» hello](https://www.mongodb.com/docs/manual/reference/command/hello/),
викликаної через [» моніторинг
сервера](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst)).

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md))
Об'єкт події, що містить інформацію про успішному серцевомусервері.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
