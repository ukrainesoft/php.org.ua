- [« SplQueue::setIteratorMode](splqueue.setiteratormode.md)
- [SplHeap::compare »](splheap.compare.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplHeap

# Клас SplHeap

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас SplHeap надає основні функціональні можливості купи.

## Огляд класів

abstract class **SplHeap** implements [Iterator](class.iterator.md),
[Countable](class.countable.md) {

/\* Методи \*/

protected
[compare](splheap.compare.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value2`): int

public [count](splheap.count.md)(): int

public [current](splheap.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [extract](splheap.extract.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[insert](splheap.insert.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

public [isCorrupted](splheap.iscorrupted.md)(): bool

public [isEmpty](splheap.isempty.md)(): bool

public [key](splheap.key.md)(): int

public [next](splheap.next.md)(): void

public [recoverFromCorruption](splheap.recoverfromcorruption.md)():
bool

public [rewind](splheap.rewind.md)(): void

public [top](splheap.top.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [valid](splheap.valid.md)(): bool

}

## Зміст

- [SplHeap::compare](splheap.compare.md) — Порівнює елементи,
щоб під час сортування коректно розмістити їх у купі
- [SplHeap::count](splheap.count.md) — Визначає кількість
елементів у купі
- [SplHeap::current](splheap.current.md) — Повертає поточний вузол,
на який вказує ітератор
- [SplHeap::extract](splheap.extract.md) - Витягує вузол з купи і
пересортує її
- [SplHeap::insert](splheap.insert.md) — Вставляє елемент у купу і
пересортує її
- [SplHeap::isCorrupted](splheap.iscorrupted.md) — Вказує,
чи знаходиться купа в пошкодженому стані
- [SplHeap::isEmpty](splheap.isempty.md) — Перевірка, чи порожня купа
- [SplHeap::key](splheap.key.md) — Повертає індекс поточного сайту
- [SplHeap::next](splheap.next.md) — Перехід до наступного сайту
- [SplHeap::recoverFromCorruption](splheap.recoverfromcorruption.md)
- Відновлює коректний стан купи
- [SplHeap::rewind](splheap.rewind.md) — Переведення ітератора на початок
- [SplHeap::top](splheap.top.md) — Повертає вузол, що знаходиться на
вершині купи
- [SplHeap::valid](splheap.valid.md) — Перевіряє, чи містить купа
ще елементи
