- [« SplMaxHeap::compare](splmaxheap.compare.md)
- [SplMinHeap::compare »](splminheap.compare.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplMinHeap

# Клас SplMinHeap

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас SplMinHeap надає основні функціональні можливості купи,
зберігаючи мінімальний елемент зверху.

## Огляд класів

class **SplMinHeap** extends [SplHeap](class.splheap.md) {

/\* Методи \*/

protected[compare](splminheap.compare.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value2`): int

/\* Наслідувані методи \*/

protected
[SplHeap::compare](splheap.compare.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value2`): int

public [SplHeap::count](splheap.count.md)(): int

public [SplHeap::current](splheap.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [SplHeap::extract](splheap.extract.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[SplHeap::insert](splheap.insert.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

public [SplHeap::isCorrupted](splheap.iscorrupted.md)(): bool

public [SplHeap::isEmpty](splheap.isempty.md)(): bool

public [SplHeap::key](splheap.key.md)(): int

public [SplHeap::next](splheap.next.md)(): void

public
[SplHeap::recoverFromCorruption](splheap.recoverfromcorruption.md)():
bool

public [SplHeap::rewind](splheap.rewind.md)(): void

public [SplHeap::top](splheap.top.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [SplHeap::valid](splheap.valid.md)(): bool

}

## Зміст

- [SplMinHeap::compare](splminheap.compare.md) - Порівнює
елементи, щоб під час сортування коректно розмістити їх у купі
