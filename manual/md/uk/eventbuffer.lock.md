- [«EventBuffer::freeze](eventbuffer.freeze.md)
- [EventBuffer::prepend »](eventbuffer.prepend.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Отримує блокування буфера

# EventBuffer::lock

(PECL event \>u003d 1.2.6-beta)

EventBuffer::lock — Отримує блокування буфера

### Опис

public **EventBuffer::lock**(): void

Отримує блокування буфера. Може використовуватися в парі з
[EventBuffer::unlock()](eventbuffer.unlock.md), щоб зробити набір
операцій атомарним, тобто потокобезпечним. Зверніть увагу, що ні
необхідності блокувати буфери для *окремих* операцій. Коли
блокування увімкнено (дивіться
[EventBuffer::enableLocking()](eventbuffer.enablelocking.md)),
окремі операції над буферами подій є атомарними.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [EventBuffer::unlock()](eventbuffer.unlock.md) - Знімає
блокування, встановлене EventBuffer::lock
