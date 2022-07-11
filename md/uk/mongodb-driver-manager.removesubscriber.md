- [«
MongoDB\Driver\Manager::getWriteConcern](mongodb-driver-manager.getwriteconcern.md)
- [MongoDB\Driver\Manager::selectServer
»](mongodb-driver-manager.selectserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- скасовує реєстрацію передплатника на подію моніторингу в даному
об'єкті Manager

# MongoDB\Driver\Manager::removeSubscriber

(mongodb \>u003d1.10.0)

MongoDB\Driver\Manager::removeSubscriber — Скасує реєстрацію
передплатника на подію моніторингу в даному об'єкті Manager

### Опис

final public
**MongoDB\Driver\Manager::removeSubscriber**([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
`$subscriber`): void

Скасує реєстрацію передплатника на подію моніторингу в цьому об'єкті
Manager.

> **Примітка**: Якщо `subscriber` ще не зареєстрований у цьому
> об'єкт Manager, функція відпрацює без результату.

### Список параметрів

`subscriber` ([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md))
Передплатник на подію моніторингу, якому необхідно скасувати
реєстрацію в даному об'єкті Manager.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
- [MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- [MongoDB\Driver\MonitoringemoveSubscriber()](function.mongodb.driver.monitoring.removesubscriber.md) -
Скасує глобальну реєстрацію передплатника на подію моніторингу
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
