- [« Ітератори](spl.iterators.md)
- [AppendIterator::append »](appenditerator.append.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас AppendIterator

# Клас AppendIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Ітератор, який виконує кілька інших ітераторів один за одним

## Огляд класів

class **AppendIterator** extends
[IteratorIterator](class.iteratoriterator.md) {

/\* Методи \*/

public [\_\_construct](appenditerator.construct.md)()

public
[append](appenditerator.append.md)([Iterator](class.iterator.md)
`$iterator`): void

public [current](appenditerator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getArrayIterator](appenditerator.getarrayiterator.md)():
[ArrayIterator](class.arrayiterator.md)

public [getInnerIterator](appenditerator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [getIteratorIndex](appenditerator.getiteratorindex.md)(): ?int

public [key](appenditerator.key.md)(): scalar

public [next](appenditerator.next.md)(): void

public [rewind](appenditerator.rewind.md)(): void

public [valid](appenditerator.valid.md)(): bool

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

- [AppendIterator::append](appenditerator.append.md) - Додає
ітератор
- [AppendIterator::\_\_construct](appenditerator.construct.md) -
Створює AppendIterator
- [AppendIterator::current](appenditerator.current.md) - Повертає
поточне значення
- [AppendIterator::getArrayIterator](appenditerator.getarrayiterator.md)
- Повертає клас ітератора масиву ArrayIterator
- [AppendIterator::getInnerIterator](appenditerator.getinneriterator.md)
- Повертає внутрішній ітератор
- [AppendIterator::getIteratorIndex](appenditerator.getiteratorindex.md)
- Повертає індекс ітератора
- [AppendIterator::key](appenditerator.key.md) — Повертає поточний
ключ
- [AppendIterator::next](appenditerator.next.md) - Переходить до
наступному елементу
- [AppendIterator::rewind](appenditerator.rewind.md) - Перемотує
ітератор
- [AppendIterator::valid](appenditerator.valid.md) — Перевіряє термін
дії поточного елемента
