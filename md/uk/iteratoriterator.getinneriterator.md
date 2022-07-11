- [« IteratorIterator::current](iteratoriterator.current.md)
- [IteratorIterator::key »](iteratoriterator.key.md)

- [PHP Manual](index.md)
- [IteratorIterator](class.iteratoriterator.md)
- отримує внутрішній ітератор

# IteratorIterator::getInnerIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

IteratorIterator::getInnerIterator — Отримує внутрішній ітератор

### Опис

public **IteratorIterator::getInnerIterator**():
?[Iterator](class.iterator.md)

Отримує внутрішній ітератор.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Внутрішній ітератор, переданий методом
[IteratorIterator::\_\_construct()](iteratoriterator.construct.md) або
**`null`**, якщо внутрішній ітератор відсутній.

### Дивіться також

- [Iterator](class.iterator.md)
- [OuterIterator](class.outeriterator.md)
