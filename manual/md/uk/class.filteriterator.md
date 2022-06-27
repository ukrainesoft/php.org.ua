- [«FilesystemIterator::setFlags](filesystemiterator.setflags.md)
- [FilterIterator::accept »](filteriterator.accept.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас FilterIterator

# Клас FilterIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Цей абстрактний ітератор відфільтровує небажані значення. Цей клас
слід розширити для реалізації фільтрів ітератора.
Метод [FilterIterator::accept()](filteriterator.accept.md) має бути
реалізований у підкласі.

## Огляд класів

abstract class **FilterIterator** extends
[IteratorIterator](class.iteratoriterator.md) {

/\* Методи \*/

public
[\_\_construct](filteriterator.construct.md)([Iterator](class.iterator.md)
`$iterator`)

public [accept](filteriterator.accept.md)(): bool

public [current](filteriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getInnerIterator](filteriterator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [key](filteriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [next](filteriterator.next.md)(): void

public [rewind](filteriterator.rewind.md)(): void

public [valid](filteriterator.valid.md)(): bool

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

- [FilterIterator::accept](filteriterator.accept.md) — Перевіряє,
чи є поточний елемент ітератора допустимим
- [FilterIterator::\_\_construct](filteriterator.construct.md) -
Конструктор класу FilterIterator
- [FilterIterator::current](filteriterator.current.md) - Отримує
значення поточного елемента
- [FilterIterator::getInnerIterator](filteriterator.getinneriterator.md)
— Отримує внутрішній ітератор
- [FilterIterator::key](filteriterator.key.md) — Отримує поточний
ключ
- [FilterIterator::next](filteriterator.next.md) — Переміщує
ітератор до наступного елементу
- [FilterIterator::rewind](filteriterator.rewind.md) - Повертає
ітератор на початок
- [FilterIterator::valid](filteriterator.valid.md) — Перевіряє,
чи є поточний елемент допустимим
