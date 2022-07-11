- [« EventBuffer::unfreeze](eventbuffer.unfreeze.md)
- [EventBuffer::write »](eventbuffer.write.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Знімає блокування, встановлене EventBuffer::lock

# EventBuffer::unlock

(PECL event \>u003d 1.2.6-beta)

EventBuffer::unlock — Знімає блокування, встановлене
EventBuffer::lock

### Опис

public **EventBuffer::unlock**(): bool

Знімає блокування, встановлене
[EventBuffer::lock()](eventbuffer.lock.md) .

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBuffer::lock()](eventbuffer.lock.md) - Отримує блокування
буфера
