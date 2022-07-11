- [«EventDnsBase::clearSearch](eventdnsbase.clearsearch.md)
- [EventDnsBase::countNameservers
»](eventdnsbase.countnameservers.md)

- [PHP Manual](index.md)
- [EventDnsBase](class.eventdnsbase.md)
- Конструктор об'єкту EventDnsBase

# EventDnsBase::\_\_construct

(PECL event \>u003d 1.2.6-beta)

EventDnsBase::\_\_construct — Конструктор об'єкту EventDnsBase

### Опис

public **EventDnsBase::\_\_construct**(
[EventBase](class.eventbase.md) `$base` , bool `$initialize` )

Конструктор об'єкту EventDnsBase.

### Список параметрів

`base`
Основа подій.

`initialize`
Якщо аргумент `initialize` має значення **`true`**, він намагається
розумно налаштувати базу DNS з урахуванням параметрів операційної системи
замовчуванням. В іншому випадку база DNS-подій залишається порожньою, без
настроєних серверів імен або параметрів. В останньому випадку база DNS
має бути налаштована вручну, наприклад, за допомогою
[EventDnsBase::parseResolvConf()](eventdnsbase.parseresolvconf.md).

### Значення, що повертаються

Повертає об'єкт EventDnsBase.
