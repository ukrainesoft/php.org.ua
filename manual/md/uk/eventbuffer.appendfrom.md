- [«EventBuffer::addBuffer](eventbuffer.addbuffer.md)
- [EventBuffer::\_\_construct »](eventbuffer.construct.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Переміщує вказану кількість байтів з вихідного буфера до кінця
поточного буфера

# EventBuffer::appendFrom

(PECL event \>u003d 1.6.0)

EventBuffer::appendFrom — Переміщує вказану кількість байтів з
вихідного буфера до кінця поточного буфера

### Опис

public **EventBuffer::appendFrom**(
[EventBuffer](class.eventbuffer.md) `$buf`, int `$len`): int

Переміщує вказану кількість байтів з вихідного буфера до кінця
поточний буфер. Якщо кількість байтів менша, переміщає всі байти,
доступні із вихідного буфера.

### Список параметрів

`buf`
Початковий буфер.

`len`

### Значення, що повертаються

Повертає кількість прочитаних байтів.

### Список змін

| Версія | Опис |
|------------------|------------------------------ -------------------------------------------------- ----------------|
| PECL event 1.6.0 | Перейменований **EventBuffer::appendFrom()**(старе ім'я методу) в **EventBuffer::appendFrom()**. |

### Дивіться також

- [EventBuffer::copyout()](eventbuffer.copyout.md) - Копіює
вказана кількість байтів з початку буфера
- [EventBuffer::drain()](eventbuffer.drain.md) - Видаляє вказане
кількість байтів з початку буфера, нікуди не копіюючи
- [EventBuffer::pullup()](eventbuffer.pullup.md) - Лінеаризує
дані в буфері та повертає їх вміст у вигляді рядка
- [EventBuffer::readLine()](eventbuffer.readline.md) - Витягує
рядок із початку буфера
- [EventBuffer::read()](eventbuffer.read.md) - Читає дані з
evbuffer і виснажує прочитані байти
