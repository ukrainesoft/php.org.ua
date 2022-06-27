- [«EventBuffer::copyout](eventbuffer.copyout.md)
- [EventBuffer::enableLocking »](eventbuffer.enablelocking.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Видаляє вказану кількість байтів з початку буфера, нікуди не
копіюючи

# EventBuffer::drain

(PECL event \>u003d 1.2.6-beta)

EventBuffer::drain — Видаляє вказану кількість байтів від початку
буфера, нікуди не копіюючи

### Опис

public **EventBuffer::drain**( int `$len` ): bool

Поводиться як [EventBuffer::read()](eventbuffer.read.md), за
виключенням того, що він не копіює дані: просто видаляє їх із початку
буфер.

### Список параметрів

`len`
Кількість байтів видалення з буфера.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBuffer::read()](eventbuffer.read.md) - Читає дані з
evbuffer і виснажує прочитані байти
- [EventBuffer::appendFrom()](eventbuffer.appendfrom.md) -
Переміщує вказану кількість байтів з вихідного буфера до кінця
поточного буфера
