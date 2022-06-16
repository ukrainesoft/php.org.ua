- [« EventBuffer::prependBuffer](eventbuffer.prependbuffer.md)
- [EventBuffer::read »](eventbuffer.read.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Лінеаризує дані в буфері та повертає їх вміст у вигляді рядка

# EventBuffer::pullup

(PECL event \>u003d 1.2.6-beta)

EventBuffer::pullup — Лінеаризує дані в буфері та повертає їх
вміст у вигляді рядка

### Опис

public **EventBuffer::pullup**( int `$size` ): string

"Лінеаризує" перші `size` байти буфера, копіюючи або переміщуючи їх по
мірі необхідності, щоб гарантувати, що всі вони є суміжними та
займають той самий шматок пам'яті. Якщо розмір негативний, функція
лінеаризує весь буфер.

**Увага**

Виклик **EventBuffer::pullup()** з великим розміром може бути досить
повільним, оскільки потенційно може знадобитися копіювання всього
вмісту буфера.

### Список параметрів

`size`
Кількість байтів має бути безперервним у буфері.

### Значення, що повертаються

Якщо `size` більше, ніж кількість байтів у буфері, функція повертає
**`null`**. Інакше повертає рядок
**EventBuffer::pullup()**.

### Дивіться також

- [EventBuffer::copyout()](eventbuffer.copyout.md) - Копіює
вказана кількість байтів з початку буфера
- [EventBuffer::drain()](eventbuffer.drain.md) - Видаляє вказане
кількість байтів з початку буфера, нікуди не копіюючи
- [EventBuffer::read()](eventbuffer.read.md) - Читає дані з
evbuffer і виснажує прочитані байти
- [EventBuffer::readLine()](eventbuffer.readline.md) - Витягує
рядок із початку буфера
- [EventBuffer::appendFrom()](eventbuffer.appendfrom.md) -
Переміщує вказану кількість байтів з вихідного буфера до кінця
поточного буфера
