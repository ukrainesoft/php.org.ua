- [«
OuterIterator::getInnerIterator](outeriterator.getinneriterator.md)
- [RecursiveIterator::getChildren
»](recursiveiterator.getchildren.md)

- [PHP Manual](index.md)
- [Інтерфейси](spl.interfaces.md)
- Інтерфейс RecursiveIterator

# Інтерфейс RecursiveIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Класи, що реалізують **RecursiveIterator**, можуть бути використані для
рекурсивного перебору ітераторів

## Огляд інтерфейсів

interface **RecursiveIterator** extends [Iterator](class.iterator.md)
{

/\* Методи \*/

public [getChildren](recursiveiterator.getchildren.md)():
?[RecursiveIterator](class.recursiveiterator.md)

public [hasChildren](recursiveiterator.haschildren.md)(): bool

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

- [RecursiveIterator::getChildren](recursiveiterator.getchildren.md)
— Повертає ітератор до поточного елемента
- [RecursiveIterator::hasChildren](recursiveiterator.haschildren.md)
— Визначає, чи можна створити ітератор для поточного елемента.
