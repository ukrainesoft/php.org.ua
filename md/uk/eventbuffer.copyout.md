- [«EventBuffer::\_\_construct](eventbuffer.construct.md)
- [EventBuffer::drain »](eventbuffer.drain.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Копіює вказану кількість байтів з початку буфера

# EventBuffer::copyout

(PECL event \>u003d 1.2.6-beta)

EventBuffer::copyout — Копіює вказану кількість байтів від початку
буфера

### Опис

public **EventBuffer::copyout**( string `&$data` , int `$max_bytes` ):
int

Поводиться так само, як [EventBuffer::read()](eventbuffer.read.md), але
не виводить дані із буфера. Тобто він копіює перші байти
`max_bytes` з початку буфера в `data`. Якщо доступно менше `max_bytes`,
функція копіює всі наявні байти.

### Список параметрів

`data`
Вихідний рядок.

`max_bytes`
Кількість байтів для копіювання.

### Значення, що повертаються

Повертає кількість скопійованих байтів або **`-1`** у разі
виникнення помилки.

### Дивіться також

- [EventBuffer::read()](eventbuffer.read.md) - Читає дані з
evbuffer і виснажує прочитані байти
- [EventBuffer::appendFrom()](eventbuffer.appendfrom.md) -
Переміщує вказану кількість байтів з вихідного буфера до кінця
поточного буфера
