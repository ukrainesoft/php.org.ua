- [«EventDnsBase::\_\_construct](eventdnsbase.construct.md)
- [EventDnsBase::loadHosts »](eventdnsbase.loadhosts.md)

- [PHP Manual](index.md)
- [EventDnsBase](class.eventdnsbase.md)
- Отримує кількість налаштованих серверів імен

# EventDnsBase::countNameservers

(PECL event \>u003d 1.2.6-beta)

EventDnsBase::countNameservers — Отримує кількість налаштованих
серверів імен

### Опис

public **EventDnsBase::countNameservers**(): int

Отримує кількість налаштованих серверів імен

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає кількість налаштованих серверів імен (необов'язково
кількість запущених серверів імен). Це можна використовувати для
додаткової перевірки того, чи були успішними виклики різних функцій
конфігурації сервера імен.
