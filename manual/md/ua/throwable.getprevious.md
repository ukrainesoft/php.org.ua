- [« Throwable::getTraceAsString](throwable.gettraceasstring.md)
- [Throwable::\_\_toString »](throwable.tostring.md)

- [PHP Manual](index.md)
- [Throwable](class.throwable.md)
- Повертає попередній Throwable

# Throwable::getPrevious

(PHP 7, PHP 8)

Throwable::getPrevious — Повертає попередній Throwable

### Опис

public **Throwable::getPrevious**(): ?[Throwable](class.throwable.md)

Повертає будь-який попередній Throwable (для прикладу, передане третім
параметром [Exception::\_\_construct()](exception.construct.md)).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає попередній [Throwable](class.throwable.md), якщо він
доступний, або **`null`** в іншому випадку.

### Дивіться також

- [Exception::getPrevious()](exception.getprevious.md) - Повертає
попередній об'єкт, що реалізує Throwable
