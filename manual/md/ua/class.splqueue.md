- [« SplStack::setIteratorMode](splstack.setiteratormode.md)
- [SplQueue::\_\_construct »](splqueue.construct.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplQueue

# Клас SplQueue

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас SplQueue надає основні функціональні можливості
черги, реалізовані з допомогою двозв'язкового списку.

## Огляд класів

class **SplQueue** extends
[SplDoublyLinkedList](class.spldoublylinkedlist.md) {

/\* Методи \*/

public [SplStack::\_\_construct](splstack.construct.md)()

public [dequeue](splqueue.dequeue.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[enqueue](splqueue.enqueue.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [setIteratorMode](splqueue.setiteratormode.md)(int `$mode`):
void

/\* Наслідувані методи \*/

public [SplDoublyLinkedList::add](spldoublylinkedlist.add.md)(int
`$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [SplDoublyLinkedList::bottom](spldoublylinkedlist.bottom.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [SplDoublyLinkedList::count](spldoublylinkedlist.count.md)():
int

public
[SplDoublyLinkedList::current](spldoublylinkedlist.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[SplDoublyLinkedList::getIteratorMode](spldoublylinkedlist.getiteratormode.md)():
int

public
[SplDoublyLinkedList::isEmpty](spldoublylinkedlist.isempty.md)(): bool

public [SplDoublyLinkedList::key](spldoublylinkedlist.key.md)(): int

public [SplDoublyLinkedList::next](spldoublylinkedlist.next.md)():
void

public
[SplDoublyLinkedList::offsetExists](spldoublylinkedlist.offsetexists.md)(int
`$index`): bool

public
[SplDoublyLinkedList::offsetGet](spldoublylinkedlist.offsetget.md)(int
`$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[SplDoublyLinkedList::offsetSet](spldoublylinkedlist.offsetset.md)(?int
`$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public
[SplDoublyLinkedList::offsetUnset](spldoublylinkedlist.offsetunset.md)(int
`$index`): void

public [SplDoublyLinkedList::pop](spldoublylinkedlist.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [SplDoublyLinkedList::prev](spldoublylinkedlist.prev.md)():
void

public
[SplDoublyLinkedList::push](spldoublylinkedlist.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [SplDoublyLinkedList::rewind](spldoublylinkedlist.rewind.md)():
void

public
[SplDoublyLinkedList::serialize](spldoublylinkedlist.serialize.md)():
string

public
[SplDoublyLinkedList::setIteratorMode](spldoublylinkedlist.setiteratormode.md)(int
`$mode`): int

public [SplDoublyLinkedList::shift](spldoublylinkedlist.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [SplDoublyLinkedList::top](spldoublylinkedlist.top.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[SplDoublyLinkedList::unserialize](spldoublylinkedlist.unserialize.md)(string
`$data`): void

public
[SplDoublyLinkedList::unshift](spldoublylinkedlist.unshift.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [SplDoublyLinkedList::valid](spldoublylinkedlist.valid.md)():
bool

}

## Зміст

- [SplQueue::\_\_construct](splqueue.construct.md) - Створює нову
чергу, реалізовану з використанням двозв'язкового списку
- [SplQueue::dequeue](splqueue.dequeue.md) — Видаляє елемент з
черги
- [SplQueue::enqueue](splqueue.enqueue.md) — Додає елемент до
черга
- [SplQueue::setIteratorMode](splqueue.setiteratormode.md)
Встановлює режим ітератора
