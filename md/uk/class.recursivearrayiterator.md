- [« ParentIterator::rewind](parentiterator.rewind.md)
- [RecursiveArrayIterator::getChildren
»](recursivearrayiterator.getchildren.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RecursiveArrayIterator

# Клас RecursiveArrayIterator

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Цей ітератор дозволяє скинути та змінити значення та ключі під час
проходу масивами і об'єктами так само, як і
[ArrayIterator](class.arrayiterator.md). Крім того, можна перебирати
поточні записи ітератора.

## Огляд класів

class **RecursiveArrayIterator** extends
[ArrayIterator](class.arrayiterator.md) implements
[RecursiveIterator](class.recursiveiterator.md) {

/\* Успадковані константи \*/

const int `STD_PROP_LIST` u003d 1;

const int `ARRAY_AS_PROPS` u003d 2;

/\* Константи \*/

const int `CHILD_ARRAYS_ONLY` u003d 4;

/\* Методи \*/

public [getChildren](recursivearrayiterator.getchildren.md)():
?[RecursiveArrayIterator](class.recursivearrayiterator.md)

public [hasChildren](recursivearrayiterator.haschildren.md)(): bool

/\* Наслідувані методи \*/

public
[ArrayIterator::append](arrayiterator.append.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [ArrayIterator::asort](arrayiterator.asort.md)(int `$flags` u003d
**`SORT_REGULAR`**): bool

public [ArrayIterator::count](arrayiterator.count.md)(): int

public [ArrayIterator::current](arrayiterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [ArrayIterator::getArrayCopy](arrayiterator.getarraycopy.md)():
array

public [ArrayIterator::getFlags](arrayiterator.getflags.md)(): int

public [ArrayIterator::key](arrayiterator.key.md)(): string\|int\|null

public [ArrayIterator::ksort](arrayiterator.ksort.md)(int `$flags` u003d
**`SORT_REGULAR`**): bool

public [ArrayIterator::natcasesort](arrayiterator.natcasesort.md)():
bool

public [ArrayIterator::natsort](arrayiterator.natsort.md)(): bool

public [ArrayIterator::next](arrayiterator.next.md)(): void

public
[ArrayIterator::offsetExists](arrayiterator.offsetexists.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): bool

public
[ArrayIterator::offsetGet](arrayiterator.offsetget.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[ArrayIterator::offsetSet](arrayiterator.offsetset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[ArrayIterator::offsetUnset](arrayiterator.offsetunset.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$key`): void

public [ArrayIterator::rewind](arrayiterator.rewind.md)(): void

public [ArrayIterator::seek](arrayiterator.seek.md)(int `$offset`):
void

public [ArrayIterator::serialize](arrayiterator.serialize.md)():
string

public [ArrayIterator::setFlags](arrayiterator.setflags.md)(int
`$flags`): void

public
[ArrayIterator::uasort](arrayiterator.uasort.md)([callable](language.types.callable.md)
`$callback`): bool

public
[ArrayIterator::uksort](arrayiterator.uksort.md)([callable](language.types.callable.md)
`$callback`): bool

public
[ArrayIterator::unserialize](arrayiterator.unserialize.md)(string
`$data`): void

public [ArrayIterator::valid](arrayiterator.valid.md)(): bool

}

## Зумовлені константи

## Прапори RecursiveArrayIterator

**`RecursiveArrayIterator::CHILD_ARRAYS_ONLY`**
Застосуємо тільки до масивів (не об'єктів) як мають дітей для
ітерації.

## Зміст

- [RecursiveArrayIterator::getChildren](recursivearrayiterator.getchildren.md)
— Повертає ітератор до поточного елемента, якщо цей елемент
є масивом (array) чи об'єктом (object)
- [RecursiveArrayIterator::hasChildren](recursivearrayiterator.haschildren.md)
— Визначає, чи є поточний елемент масивом чи об'єктом
