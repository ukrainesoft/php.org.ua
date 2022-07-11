- [«Countable::count](countable.count.md)
- [OuterIterator::getInnerIterator
»](outeriterator.getinneriterator.md)

- [PHP Manual](index.md)
- [Інтерфейси](spl.interfaces.md)
- Інтерфейс OuterIterator

# Інтерфейс OuterIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Класи, що реалізують **OuterIterator**, можуть бути використані для
перебору ітераторів.

## Огляд інтерфейсів

interface **OuterIterator** extends [Iterator](class.iterator.md) {

/\* Методи \*/

public [getInnerIterator](outeriterator.getinneriterator.md)():
?[Iterator](class.iterator.md)

/\* Наслідувані методи \*/

public [Iterator::current](iterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Iterator::key](iterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [Iterator::next](iterator.next.md)(): void

public [Iterator::rewind](iterator.rewind.md)(): void

public [Iterator::valid](iterator.valid.md)(): bool

}

## Зміст

- [OuterIterator::getInnerIterator](outeriterator.getinneriterator.md)
— Повертає внутрішній ітератор до поточного елемента
