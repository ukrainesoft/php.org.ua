- [« GlobIterator::count](globiterator.count.md)
- [InfiniteIterator::\_\_construct »](infiniteiterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас InfiniteIterator

# Клас InfiniteIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Клас **InfiniteIterator** дозволяє зробити нескінченний перебір
без необхідності вручну перебирати ітератор до моменту
досягнення його кінця.

## Огляд класів

class **InfiniteIterator** extends
[IteratorIterator](class.iteratoriterator.md) {

/\* Методи \*/

public
[\_\_construct](infiniteiterator.construct.md)([Iterator](class.iterator.md)
`$iterator`)

public [next](infiniteiterator.next.md)(): void

/\* Наслідувані методи \*/

public [IteratorIterator::current](iteratoriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[IteratorIterator::getInnerIterator](iteratoriterator.getinneriterator.md)():
?[Iterator](class.iterator.md)

public [IteratorIterator::key](iteratoriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [IteratorIterator::next](iteratoriterator.next.md)(): void

public [IteratorIterator::rewind](iteratoriterator.rewind.md)(): void

public [IteratorIterator::valid](iteratoriterator.valid.md)(): bool

}

## Зміст

- [InfiniteIterator::\_\_construct](infiniteiterator.construct.md) -
Конструктор класу InfiniteIterator
- [InfiniteIterator::next](infiniteiterator.next.md) — Переміщує
ітератор однією позицію вперед чи початок
