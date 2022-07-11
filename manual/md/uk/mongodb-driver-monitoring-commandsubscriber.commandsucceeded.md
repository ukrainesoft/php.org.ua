- [«
MongoDB\Driver\Monitoring\CommandSubscriber::commandStarted](mongodb-driver-monitoring-commandsubscriber.commandstarted.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber
»](class.mongodb-driver-monitoring-sdamsubscriber.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- Метод повідомлення про успішну команду

# MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded — Метод
повідомлення про успішну команду

### Опис

abstract public
**MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded**([MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
`$event`): void

Якщо передплатник зареєстровано, драйвер викличе цей метод у разі
успішного виконання команди.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md))
Об'єкт події, що містить інформацію про успішну команду.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
