- [«EventBuffer::read](eventbuffer.read.md)
- [EventBuffer::readLine »](eventbuffer.readline.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Читає дані з файлу до кінця буфера

# EventBuffer::readFrom

(PECL event \>u003d 1.7.0)

EventBuffer::readFrom — Читає дані з файлу до кінця буфера

### Опис

public [EventBuffer::read](eventbuffer.read.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$fd` , int `$howmuch` ): int

Читає дані з файлу, вказаного в `fd` на кінець буфера.

### Список параметрів

`fd`
Ресурс сокету, потік чи числовий дескриптор файлу.

`howmuch`
Максимальна кількість байтів для читання.

### Значення, що повертаються

Повертає кількість прочитаних байтів або **`false`** у разі
виникнення помилки.

### Дивіться також

- [EventBuffer::copyout()](eventbuffer.copyout.md) - Копіює
вказана кількість байтів з початку буфера
- [EventBuffer::drain()](eventbuffer.drain.md) - Видаляє вказане
кількість байтів з початку буфера, нікуди не копіюючи
- [EventBuffer::pullup()](eventbuffer.pullup.md) - Лінеаризує
дані в буфері та повертає їх вміст у вигляді рядка
- [EventBuffer::readLine()](eventbuffer.readline.md) - Витягує
рядок із початку буфера
- [EventBuffer::appendFrom()](eventbuffer.appendfrom.md) -
Переміщує вказану кількість байтів з вихідного буфера до кінця
поточного буфера
