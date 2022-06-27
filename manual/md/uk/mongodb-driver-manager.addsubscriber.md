- [«MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- [MongoDB\Driver\Manager::\_\_construct
»](mongodb-driver-manager.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- реєструє передплатника на подію моніторингу в даному об'єкті
Manager

# MongoDB\Driver\Manager::addSubscriber

(mongodb \>u003d1.10.0)

MongoDB\Driver\Manager::addSubscriber — Зареєструє передплатника на
подія моніторингу в даному об'єкті Manager

### Опис

final public
**MongoDB\Driver\Manager::addSubscriber**([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
`$subscriber`): void

Реєструє передплатника на подію моніторингу в цьому об'єкті Manager.
Передплатник буде повідомлено про всі події цього об'єкта Manager.

> **Примітка**: Якщо `subscriber` вже зареєстровано в даному об'єкті
> Manager, ця функція недоступна. Якщо `subscriber` також
> зареєстровано глобально, він все одно отримуватиме повідомлення
> лише один раз про кожну подію для цього об'єкта Manager.

### Список параметрів

`subscriber` ([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md))
Передплатник подій моніторингу, який має бути зареєстрований у
даному об'єкті Manager.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Manager::removeSubscriber()](mongodb-driver-manager.removesubscriber.md) -
Скасує реєстрацію передплатника на подію моніторингу в цьому
об'єкті Manager
- [MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- [MongoDB\Driver\Monitoring ddSubscriber()](function.mongodb.driver.monitoring.addsubscriber.md) -
Глобальна реєстрація передплатника на подію моніторингу
- [Моніторинг продуктивності програми (Application Performance)
Monitoring або APM)](mongodb.tutorial.apm.md)
