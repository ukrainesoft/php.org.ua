- [«
MongoDB\Driver\Monitoring\CommandSubscriber::commandFailed](mongodb-driver-monitoring-commandsubscriber.commandfailed.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded
»](mongodb-driver-monitoring-commandsubscriber.commandsucceeded.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- Метод повідомлення про запущену команду

# MongoDB\Driver\Monitoring\CommandSubscriber::commandStarted

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring\CommandSubscriber::commandStarted — Метод
повідомлення про запущену команду

### Опис

abstract public
**MongoDB\Driver\Monitoring\CommandSubscriber::commandStarted**([MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
`$event`): void

Якщо передплатник зареєстровано, драйвер викличе цей метод під час запуску
команди.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md))
Об'єкт події, що містить інформацію про запущену команду.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
