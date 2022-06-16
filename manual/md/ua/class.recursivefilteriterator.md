- [«
RecursiveDirectoryIterator::rewind](recursivedirectoryiterator.rewind.md)
- [RecursiveFilterIterator::\_\_construct
»](recursivefilteriterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RecursiveFilterIterator

# Клас RecursiveFilterIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Цей абстрактний ітератор відфільтровує небажані значення для
[RecursiveIterator](class.recursiveiterator.md). Цей клас слідує
розширювати для реалізації користувацьких фільтрів. Метод
**RecursiveFilterIterator::accept()** необхідно реалізовувати в
підкласі.

## Огляд класів

abstract class **RecursiveFilterIterator** extends
[FilterIterator](class.filteriterator.md) implements
[RecursiveIterator](class.recursiveiterator.md) {

/\* Методи \*/

public
[\_\_construct](recursivefilteriterator.construct.md)([RecursiveIterator](class.recursiveiterator.md)
`$iterator`)

public [getChildren](recursivefilteriterator.getchildren.md)():
?[RecursiveFilterIterator](class.recursivefilteriterator.md)

public [hasChildren](recursivefilteriterator.haschildren.md)(): bool

/\* Наслідувані методи \*/

public [FilterIterator::accept](filteriterator.accept.md)(): bool

public [FilterIterator::current](filteriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[FilterIterator::getInnerIterator](filteriterator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [FilterIterator::key](filteriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [FilterIterator::next](filteriterator.next.md)(): void

public [FilterIterator::rewind](filteriterator.rewind.md)(): void

public [FilterIterator::valid](filteriterator.valid.md)(): bool

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

- [RecursiveFilterIterator::\_\_construct](recursivefilteriterator.construct.md)
— Створює об'єкт RecursiveFilterIterator на основі об'єкта-ітератора
RecursiveIterator
- [RecursiveFilterIterator::getChildren](recursivefilteriterator.getchildren.md)
— Повертає дочірні елементи внутрішнього ітератора як об'єкт
RecursiveFilterIterator
- [RecursiveFilterIterator::hasChildren](recursivefilteriterator.haschildren.md)
— Перевіряє, чи має поточний елемент внутрішнього ітератора.
дочірні елементи
