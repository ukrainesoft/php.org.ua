- [«LimitIterator::current](limititerator.current.md)
- [LimitIterator::getPosition »](limititerator.getposition.md)

- [PHP Manual](index.md)
- [LimitIterator](class.limititerator.md)
- Отримання внутрішнього об'єкта-ітератора

# LimitIterator::getInnerIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

LimitIterator::getInnerIterator — Отримання внутрішнього
об'єкта-ітератора

### Опис

public **LimitIterator::getInnerIterator**():
[Iterator](class.iterator.md)

Повертає об'єкт-ітератор [Iterator](class.iterator.md)
всередині об'єкта.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Внутрішній об'єкт-ітератор, переданий конструктору
[LimitIterator::\_\_construct()](limititerator.construct.md).

### Дивіться також

- [LimitIterator::\_\_construct()](limititerator.construct.md) -
Конструктор класу LimitIterator
- [IteratorIterator::getInnerIterator()](iteratoriterator.getinneriterator.md) -
Отримує внутрішній ітератор
