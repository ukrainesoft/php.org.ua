- [«EventBuffer::expand](eventbuffer.expand.md)
- [EventBuffer::lock »](eventbuffer.lock.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Запобігає викликам, які змінюють буфер подій у випадку
успішного виконання

# EventBuffer::freeze

(PECL event \>u003d 1.2.6-beta)

EventBuffer::freeze — Запобігає викликам, які змінюють буфер
подій у разі успішного виконання

### Опис

public **EventBuffer::freeze**( bool `$at_front` ): bool

Запобігає викликам, які змінюють буфер подій у разі успішного
виконання

### Список параметрів

`at_front`
Чи вимкнути зміни на початку або в кінці буфера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBuffer::unfreeze()](eventbuffer.unfreeze.md) - Повторно
включає дзвінки, які змінюють буфер подій
