- [« EventBufferEvent::getOutput](eventbufferevent.getoutput.md)
- [EventBufferEvent::readBuffer »](eventbufferevent.readbuffer.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Читає дані буфера

# EventBufferEvent::read

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::read — Читає дані буфера

### Опис

public **EventBufferEvent::read**( int `$size` ): string

Видаляє до 'size' байтів із вхідного буфера. Повертає рядок даних,
прочитану із вхідного буфера.

### Список параметрів

`size`
Максимальна кількість байтів для читання

### Значення, що повертаються

Повертає рядок даних, прочитаний із вхідного буфера.

### Дивіться також

- [EventBufferEvent::readBuffer()](eventbufferevent.readbuffer.md) -
Зливає весь вміст буфера введення та поміщає його у буфер
