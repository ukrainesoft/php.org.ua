- [«NoRewindIterator::valid](norewinditerator.valid.md)
- [ParentIterator::accept »](parentiterator.accept.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас ParentIterator

# Клас ParentIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Це розширений клас від [FilterIterator](class.filteriterator.md),
що дозволяє здійснити рекурсивну ітерацію, використовуючи клас
[RecursiveIteratorIterator](class.recursiveiteratoriterator.md),
який показує ті елементи, які мають нащадків.

## Огляд класів

class **ParentIterator** extends
[RecursiveFilterIterator](class.recursivefilteriterator.md) {

/\* Методи \*/

public
[\_\_construct](parentiterator.construct.md)([RecursiveIterator](class.recursiveiterator.md)
`$iterator`)

public [accept](parentiterator.accept.md)(): bool

public [getChildren](parentiterator.getchildren.md)():
[ParentIterator](class.parentiterator.md)

public [hasChildren](parentiterator.haschildren.md)(): bool

public [next](parentiterator.next.md)(): void

public [rewind](parentiterator.rewind.md)(): void

/\* Наслідувані методи \*/

public
[RecursiveFilterIterator::getChildren](recursivefilteriterator.getchildren.md)():
?[RecursiveFilterIterator](class.recursivefilteriterator.md)

public
[RecursiveFilterIterator::hasChildren](recursivefilteriterator.haschildren.md)():
bool

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

- [ParentIterator::accept](parentiterator.accept.md) — Визначення
доступності
- [ParentIterator::\_\_construct](parentiterator.construct.md) -
Конструктор класу ParentIterator
- [ParentIterator::getChildren](parentiterator.getchildren.md) -
Повертає дочірні об'єкти ітератора, що зберігається всередині
ParentIterator
- [ParentIterator::hasChildren](parentiterator.haschildren.md) -
Перевіряє, чи має внутрішній об'єкт-ітератор дочірні об'єкти
- [ParentIterator::next](parentiterator.next.md) — Переміщує
вказівник на одну позицію вперед
- [ParentIterator::rewind](parentiterator.rewind.md) - Перекладає
ітератор на початок
