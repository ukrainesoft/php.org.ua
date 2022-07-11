- [«
MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber::serverClosed
»](mongodb-driver-monitoring-sdamsubscriber.serverclosed.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Метод сповіщення про зміну опису сервера

# MongoDB\Driver\Monitoring\SDAMSubscriber::serverChanged

(mongodb \>u003d1.13.0)

MongoDB\Driver\Monitoring\SDAMSubscriber::serverChanged - Метод
повідомлення про зміну опису сервера

### Опис

abstract public
**MongoDB\Driver\Monitoring\SDAMSubscriber::serverChanged**([MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
`$event`): void

Якщо передплатник був зареєстрований, драйвер викликатиме цей метод,
якщо опис сервера змінилося.

### Список параметрів

`event` ([MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md))
Об'єкт події, що містить інформацію про змінений опис сервера.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
