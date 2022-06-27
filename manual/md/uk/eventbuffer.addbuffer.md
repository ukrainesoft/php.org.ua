- [«EventBuffer::add](eventbuffer.add.md)
- [EventBuffer::appendFrom »](eventbuffer.appendfrom.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Переміщує всі дані з буфера екземпляру EventBuffer

# EventBuffer::addBuffer

(PECL event \>u003d 1.2.6-beta)

EventBuffer::addBuffer — Переміщує всі дані з буфера екземпляру
EventBuffer

### Опис

public **EventBuffer::addBuffer**( [EventBuffer](class.eventbuffer.md)
`$buf` ): bool

Переміщує всі дані з буфера, вказаного в параметрі `buf`, наприкінці
поточного [EventBuffer](class.eventbuffer.md). Це руйнівне
доповнення. Дані з одного буфера переміщуються до іншого буфера. Проте
непотрібних копій пам'яті немає.

### Список параметрів

`buf`
Вихідний об'єкт EventBuffer.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [EventBuffer::add()](eventbuffer.add.md) - Додає дані до
кінець буфера подій
