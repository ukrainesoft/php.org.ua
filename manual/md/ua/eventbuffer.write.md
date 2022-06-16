- [« EventBuffer::unlock](eventbuffer.unlock.md)
- [EventBufferEvent »](class.eventbufferevent.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Записує вміст буфера у файл або сокет

# EventBuffer::write

(PECL event \>u003d 1.6.0)

EventBuffer::write — Записує вміст буфера у файл або сокет

### Опис

public **EventBuffer::write**(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` , int `$howmuch` u003d ?): int

Записує вміст буфера у дескриптор файлу. Буфер буде очищено
після успішного запису байтів.

### Список параметрів

`fd`
Ресурс сокету, потоковий чи числовий дескриптор файлу, пов'язаний зазвичай
із сокетом.

`howmuch`
Максимальна кількість байтів для запису.

### Значення, що повертаються

Повертає кількість записаних байтів або **`false`** у разі
виникнення помилки.

### Дивіться також

- [EventBuffer::read()](eventbuffer.read.md) - Читає дані з
evbuffer і виснажує прочитані байти
