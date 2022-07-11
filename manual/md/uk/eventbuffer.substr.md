- [«EventBuffer::searchEol](eventbuffer.searcheol.md)
- [EventBuffer::unfreeze »](eventbuffer.unfreeze.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- обрізає частину даних буфера

# EventBuffer::substr

(PECL event \>u003d 1.6.0)

EventBuffer::substr — Обрізає частину даних буфера

### Опис

public **EventBuffer::substr**( int `$start` , int `$length` u003d ?):
string

Обрізає до `length` байтів даних буфера, починаючи з позиції `start`.

### Список параметрів

`start`
Початкова позиція даних обрізання.

`length`
Максимальна кількість байтів для обрізання.

### Значення, що повертаються

Повертає дані, віднімені у вигляді рядка (string) у разі успішного
виконання або **`false`** у разі виникнення помилки.

### Дивіться також

- [EventBuffer::read()](eventbuffer.read.md) - Читає дані з
evbuffer і виснажує прочитані байти
