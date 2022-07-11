- [« SplDoublyLinkedList::valid](spldoublylinkedlist.valid.md)
- [SplStack::\_\_construct »](splstack.construct.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplStack

# Клас SplStack

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас SplStack надає основні функціональні можливості стеку,
реалізовані з використанням двозв'язкового списку.

## Огляд класів

class **SplStack** extends
[SplDoublyLinkedList](class.spldoublylinkedlist.md) {

/\* Методи \*/

public [\_\_construct](splstack.construct.md)()

public [setIteratorMode](splstack.setiteratormode.md)(int `$mode`):
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

- [SplStack::\_\_construct](splstack.construct.md) — Створює новий
стек, реалізований з використанням двозв'язкового списку
- [SplStack::setIteratorMode](splstack.setiteratormode.md)
Встановлює режим ітератора
