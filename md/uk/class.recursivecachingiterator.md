- [«
RecursiveArrayIterator::hasChildren](recursivearrayiterator.haschildren.md)
- [RecursiveCachingIterator::\_\_construct
»](recursivecachingiterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RecursiveCachingIterator

# Клас RecursiveCachingIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

...

## Огляд класів

class **RecursiveCachingIterator** extends
[CachingIterator](class.cachingiterator.md) implements
[RecursiveIterator](class.recursiveiterator.md) {

/\* Успадковані константи \*/

const int `CachingIterator::CALL_TOSTRING` u003d 1;

const int `CachingIterator::CATCH_GET_CHILD` u003d 16;

const int `CachingIterator::TOSTRING_USE_KEY` u003d 2;

const int `CachingIterator::TOSTRING_USE_CURRENT` u003d 4;

const int `CachingIterator::TOSTRING_USE_INNER` u003d 8;

const int `CachingIterator::FULL_CACHE` u003d 256;

/\* Методи \*/

public
[\_\_construct](recursivecachingiterator.construct.md)([Iterator](class.iterator.md)
`$iterator`, int `$flags` u003d RecursiveCachingIterator::CALL_TOSTRING)

public [getChildren](recursivecachingiterator.getchildren.md)():
?[RecursiveCachingIterator](class.recursivecachingiterator.md)

public [hasChildren](recursivecachingiterator.haschildren.md)(): bool

/\* Наслідувані методи \*/

public [CachingIterator::count](cachingiterator.count.md)(): int

public [CachingIterator::current](cachingiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [CachingIterator::getCache](cachingiterator.getcache.md)():
array

public [CachingIterator::getFlags](cachingiterator.getflags.md)():
void

public
[CachingIterator::getInnerIterator](cachingiterator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [CachingIterator::hasNext](cachingiterator.hasnext.md)(): bool

public [CachingIterator::key](cachingiterator.key.md)(): scalar

public [CachingIterator::next](cachingiterator.next.md)(): void

public
[CachingIterator::offsetExists](cachingiterator.offsetexists.md)(string
`$key`): bool

public
[CachingIterator::offsetGet](cachingiterator.offsetget.md)(string
`$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[CachingIterator::offsetSet](cachingiterator.offsetset.md)(string
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[CachingIterator::offsetUnset](cachingiterator.offsetunset.md)(string
`$key`): void

public [CachingIterator::rewind](cachingiterator.rewind.md)(): void

public [CachingIterator::setFlags](cachingiterator.setflags.md)(int
`$flags`): void

public [CachingIterator::\_\_toString](cachingiterator.tostring.md)():
string

public [CachingIterator::valid](cachingiterator.valid.md)(): bool

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

- [RecursiveCachingIterator::\_\_construct](recursivecachingiterator.construct.md)
- Конструктор
- [RecursiveCachingIterator::getChildren](recursivecachingiterator.getchildren.md)
— Повертає дочірні елементи внутрішнього ітератора як об'єкт
RecursiveCachingIterator
- [RecursiveCachingIterator::hasChildren](recursivecachingiterator.haschildren.md)
— Перевіряє, чи має поточний елемент внутрішнього ітератора дочірні
елементи
