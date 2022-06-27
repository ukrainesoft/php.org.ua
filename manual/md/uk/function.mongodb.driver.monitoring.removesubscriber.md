- [«
MongoDB\Driver\Monitoring ddSubscriber](function.mongodb.driver.monitoring.addsubscriber.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent
»](class.mongodb-driver-monitoring-commandfailedevent.md)

- [PHP Manual](index.md)
- [Функції](ref.monitoring.functions.md)
- скасовує глобальну реєстрацію передплатника на подію моніторингу

# MongoDB\Driver\MonitoringemoveSubscriber

(mongodb \>u003d1.3.0)

MongoDB\Driver\MonitoringemoveSubscriber — Скасовує глобальну
реєстрацію передплатника на подію моніторингу

### Опис

**MongoDB\Driver\MonitoringemoveSubscriber**([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
`$subscriber`): void

Скасує глобальну реєстрацію передплатника на подію моніторингу.

> **Примітка**: Якщо `subscriber` ще не зареєстровано глобально,
функція відпрацює без результату.

### Список параметрів

`subscriber` ([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md))
Передплатник на подію моніторингу для глобального скасування реєстрації.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- [MongoDB\Driver\Manager::removeSubscriber()](mongodb-driver-manager.removesubscriber.md) -
Скасує реєстрацію передплатника на подію моніторингу в цьому
об'єкті Manager
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
