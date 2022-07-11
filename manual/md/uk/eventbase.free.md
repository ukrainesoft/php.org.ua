- [«EventBase::exit](eventbase.exit.md)
- [EventBase::getFeatures »](eventbase.getfeatures.md)

- [PHP Manual](index.md)
- [EventBase](class.eventbase.md)
- звільняє ресурси, виділені для цієї бази подій

# EventBase::free

(PECL event \>u003d 1.10.0)

EventBase::free — Звільняє ресурси, виділені для цієї бази подій

### Опис

public **EventBase::free**(): void

Визволяє ресурси, виділені libevent для об'єкта
[EventBase](class.eventbase.md).

**Увага**

Метод **EventBase::free()** не руйнує сам об'єкт. Щоб повністю
знищити об'єкт, викличте [unset()](function.unset.md) або привласніть
**`null`**.

Цей метод не звільняє і не від'єднує будь-які події, які в
даний момент пов'язані з об'єктом [EventBase](class.eventbase.md), і не
закриває їх сокети – будьте обережні.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [EventBase::\_\_construct()](eventbase.construct.md) - Конструктор
об'єкта EventBase
