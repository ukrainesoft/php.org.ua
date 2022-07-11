- [«EventBufferEvent::read](eventbufferevent.read.md)
- [EventBufferEvent::setCallbacks
»](eventbufferevent.setcallbacks.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Зливає весь вміст буфера введення та поміщає його у буфер

# EventBufferEvent::readBuffer

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::readBuffer — Зливає весь вміст буфера введення та
поміщає його у буфер

### Опис

public **EventBufferEvent::readBuffer**(
[EventBuffer](class.eventbuffer.md) `$buf`): bool

Зливає весь вміст буфера введення та поміщає його в `buf`.

### Список параметрів

`buf`
Цільовий буфер

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBufferEvent::read()](eventbufferevent.read.md) - Читає
дані буфера
