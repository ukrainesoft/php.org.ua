- [« Функції](ref.monitoring.functions.md)
- [MongoDB\Driver\MonitoringemoveSubscriber
»](function.mongodb.driver.monitoring.removesubscriber.md)

- [PHP Manual](index.md)
- [Функції](ref.monitoring.functions.md)
- Глобальна реєстрація передплатника на подію моніторингу

# MongoDB\Driver\Monitoring ddSubscriber

(mongodb \>u003d1.3.0)

MongoDB\Driver\Monitoring ddSubscriber - Глобальна реєстрація
передплатника на подію моніторингу

### Опис

**MongoDB\Driver\Monitoring ddSubscriber**([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
`$subscriber`): void

Глобально реєструє передплатника на подію моніторингу. Передплатник
буде повідомлено про всі події у драйвері для будь-якого менеджера.

> **Примітка**: Якщо `subscriber` вже зареєстровано глобально,
функція відпрацює без результату. Якщо `subscriber` також
> зареєстровано з одним або декількома менеджерами, він все одно
> отримає повідомлення один раз про кожну подію для кожного менеджера.

### Список параметрів

`subscriber` ([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md))
Передплатник моніторингу подій для глобальної реєстрації.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\MonitoringemoveSubscriber()](function.mongodb.driver.monitoring.removesubscriber.md) -
Скасує глобальну реєстрацію передплатника на подію моніторингу
- [MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- [MongoDB\Driver\Manager::addSubscriber()](mongodb-driver-manager.addsubscriber.md) -
Реєструє передплатника на подію моніторингу в даному об'єкті
Manager
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
