- [«EventBuffer::enableLocking](eventbuffer.enablelocking.md)
- [EventBuffer::freeze »](eventbuffer.freeze.md)

- [PHP Manual](index.md)
- [EventBuffer](class.eventbuffer.md)
- Резервує простір у буфері

# EventBuffer::expand

(PECL event \>u003d 1.2.6-beta)

EventBuffer::expand — Резервує простір у буфері

### Опис

public **EventBuffer::expand**( int `$len` ): bool

Змінює останній фрагмент пам'яті у буфері або додає новий
фрагмент, щоб буфер був досить великий, для утримання `len` байтів
без будь-яких додаткових виділень.

### Список параметрів

`len`
Кількість байтів, що резервуються для буфера

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
