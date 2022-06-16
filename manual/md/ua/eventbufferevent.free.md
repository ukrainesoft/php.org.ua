- [«EventBufferEvent::enable](eventbufferevent.enable.md)
- [EventBufferEvent::getDnsErrorString
»](eventbufferevent.getdnserrorstring.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- звільняє подію буфера

# EventBufferEvent::free

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::free — Звільняє подію буфера

### Опис

public **EventBufferEvent::free**(): void

Визволяє ресурси, виділені буферною подією.

Зазвичай немає необхідності викликати цей метод, оскільки це
виробляється у внутрішніх деструкторах об'єкта. Однак іноді скрипти
виконуються довго і створюють безліч екземплярів, а іноді інтенсивно
використовують пам'ять, тому необхідно якнайшвидше звільнити
ресурси. У таких випадках **EventBufferEvent::free()** може
використовуватись для захисту скрипту від досягнення `memory_limit`.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.
