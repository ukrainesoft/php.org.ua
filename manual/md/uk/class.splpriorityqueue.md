- [« SplMinHeap::compare](splminheap.compare.md)
- [SplPriorityQueue::compare »](splpriorityqueue.compare.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplPriorityQueue

# Клас SplPriorityQueue

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас SplPriorityQueue забезпечує основні функціональні можливості
пріоритетної черги, реалізований за допомогою купи з максимальним
елементом зверху (max-heap).

> **Примітка**: Порядок елементів з однаковим пріоритетом *не
> визначено*. Він може відрізнятись від порядку, в якому елементи були
> Вставлені.

## Огляд класів

class **SplPriorityQueue** implements [Iterator](class.iterator.md),
[Countable](class.countable.md) {

/\* Методи \*/

public
[compare](splpriorityqueue.compare.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$priority1`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$priority2`): int

public [count](splpriorityqueue.count.md)(): int

public [current](splpriorityqueue.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [extract](splpriorityqueue.extract.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getExtractFlags](splpriorityqueue.getextractflags.md)(): int

public
[insert](splpriorityqueue.insert.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$priority`): bool

public [isCorrupted](splpriorityqueue.iscorrupted.md)(): bool

public [isEmpty](splpriorityqueue.isempty.md)(): bool

public [key](splpriorityqueue.key.md)(): int

public [next](splpriorityqueue.next.md)(): void

public
[recoverFromCorruption](splpriorityqueue.recoverfromcorruption.md)():
bool

public [rewind](splpriorityqueue.rewind.md)(): void

public [setExtractFlags](splpriorityqueue.setextractflags.md)(int
`$flags`): int

public [top](splpriorityqueue.top.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [valid](splpriorityqueue.valid.md)(): bool

}

## Зміст

- [SplPriorityQueue::compare](splpriorityqueue.compare.md) -
Порівнює пріоритети для коректного розміщення елементів у чергу
- [SplPriorityQueue::count](splpriorityqueue.count.md) — Виробляє
підрахунок елементів у черзі
- [SplPriorityQueue::current](splpriorityqueue.current.md) -
Повертає поточний вузол, який вказує ітератор
- [SplPriorityQueue::extract](splpriorityqueue.extract.md) -
Витягує вузол з початку черги та пересортує її
- [SplPriorityQueue::getExtractFlags](splpriorityqueue.getextractflags.md)
— Отримати прапори вилучення
- [SplPriorityQueue::insert](splpriorityqueue.insert.md) — Додає
елемент у чергу і пересортує її
- [SplPriorityQueue::isCorrupted](splpriorityqueue.iscorrupted.md) -
Вказує, чи є пріоритетна черга у пошкодженому
стані
- [SplPriorityQueue::isEmpty](splpriorityqueue.isempty.md) -
Перевіряє, чи є черга порожньою
- [SplPriorityQueue::key](splpriorityqueue.key.md) — Повертає
індекс поточного вузла
- [SplPriorityQueue::next](splpriorityqueue.next.md) — Перехід до
наступному вузлу
- [SplPriorityQueue::recoverFromCorruption](splpriorityqueue.recoverfromcorruption.md)
- Відновлює коректний стан черги
- [SplPriorityQueue::rewind](splpriorityqueue.rewind.md) — Перекладає
ітератор на початок черги
- [SplPriorityQueue::setExtractFlags](splpriorityqueue.setextractflags.md)
— Встановлює режим вилучення вузлів
- [SplPriorityQueue::top](splpriorityqueue.top.md) — Повертає
вузол, що знаходиться на початку черги
- [SplPriorityQueue::valid](splpriorityqueue.valid.md) — Перевіряє,
чи є в черзі ще елементи
