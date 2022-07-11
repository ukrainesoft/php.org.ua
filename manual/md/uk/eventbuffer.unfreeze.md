- [«EventBuffer::substr](eventbuffer.substr.md)
- [EventBuffer::unlock »](eventbuffer.unlock.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Повторно включає дзвінки, які змінюють буфер подій

# EventBuffer::unfreeze

(PECL event \>u003d 1.2.6-beta)

EventBuffer::unfreeze — Повторно включає дзвінки, які змінюють буфер
подій

### Опис

public **EventBuffer::unfreeze**( bool `$at_front` ): bool

Повторно включає дзвінки, які змінюють буфер подій.

### Список параметрів

`at_front`
Визначає увімкнути події на початку або в кінці буфера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBuffer::freeze()](eventbuffer.freeze.md) - Запобігає
виклики, які змінюють буфер подій у разі успішного виконання
