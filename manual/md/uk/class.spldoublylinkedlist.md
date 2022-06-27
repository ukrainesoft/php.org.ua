- [« Структури даних](spl.datastructures.md)
- [SplDoublyLinkedList::add »](spldoublylinkedlist.add.md)

- [PHP Manual](index.md)
- [Структури даних](spl.datastructures.md)
- Клас SplDoublyLinkedList

# Клас SplDoublyLinkedList

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас SplDoublyLinkedList забезпечує основні функціональні
можливості двозв'язкового списку.

## Огляд класів

class **SplDoublyLinkedList** implements
[Iterator](class.iterator.md), [Countable](class.countable.md),
[ArrayAccess](class.arrayaccess.md),
[Serializable](class.serializable.md) {

/\* Константи \*/

const int `IT_MODE_LIFO` u003d 2;

const int `IT_MODE_FIFO` u003d 0;

const int `IT_MODE_DELETE` u003d 1;

const int `IT_MODE_KEEP` u003d 0;

/\* Методи \*/

public [add](spldoublylinkedlist.add.md)(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [bottom](spldoublylinkedlist.bottom.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [count](spldoublylinkedlist.count.md)(): int

public [current](spldoublylinkedlist.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getIteratorMode](spldoublylinkedlist.getiteratormode.md)():
int

public [isEmpty](spldoublylinkedlist.isempty.md)(): bool

public [key](spldoublylinkedlist.key.md)(): int

public [next](spldoublylinkedlist.next.md)(): void

public [offsetExists](spldoublylinkedlist.offsetexists.md)(int
`$index`): bool

public [offsetGet](spldoublylinkedlist.offsetget.md)(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [offsetSet](spldoublylinkedlist.offsetset.md)(?int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [offsetUnset](spldoublylinkedlist.offsetunset.md)(int
`$index`): void

public [pop](spldoublylinkedlist.pop.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [prev](spldoublylinkedlist.prev.md)(): void

public
[push](spldoublylinkedlist.push.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [rewind](spldoublylinkedlist.rewind.md)(): void

public [serialize](spldoublylinkedlist.serialize.md)(): string

public [setIteratorMode](spldoublylinkedlist.setiteratormode.md)(int
`$mode`): int

public [shift](spldoublylinkedlist.shift.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [top](spldoublylinkedlist.top.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [unserialize](spldoublylinkedlist.unserialize.md)(string
`$data`): void

public
[unshift](spldoublylinkedlist.unshift.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [valid](spldoublylinkedlist.valid.md)(): bool

}

## Зумовлені константи

## Напрямок ітерації

**`SplDoublyLinkedList::IT_MODE_LIFO`**
Список повторюватиметься по порядку "останнім прийшов - першим вийшов",
як стек.

**`SplDoublyLinkedList::IT_MODE_FIFO`**
Список повторюватиметься по порядку "першим прийшов - першим вийшов", як
чергу.

## Поведінка ітерації

**`SplDoublyLinkedList::IT_MODE_DELETE`**
Ітерація видалить повторювані елементи.

**`SplDoublyLinkedList::IT_MODE_KEEP`**
Ітерація не видалить повторювані елементи.

## Зміст

- [SplDoublyLinkedList::add](spldoublylinkedlist.add.md) -
Додає/вставляє нове значення за вказаним індексом
- [SplDoublyLinkedList::bottom](spldoublylinkedlist.bottom.md)
Отримує вузол, що знаходиться на початку двозв'язкового списку
- [SplDoublyLinkedList::count](spldoublylinkedlist.count.md) -
Підраховує кількість елементів у двозв'язному списку
- [SplDoublyLinkedList::current](spldoublylinkedlist.current.md) -
Повертає поточний елемент масиву
- [SplDoublyLinkedList::getIteratorMode](spldoublylinkedlist.getiteratormode.md)
— Повертає режим ітерації
- [SplDoublyLinkedList::isEmpty](spldoublylinkedlist.isempty.md) -
Перевіряє, чи є двозв'язний список порожнім
- [SplDoublyLinkedList::key](spldoublylinkedlist.key.md) -
Повертає індекс поточного вузла
- [SplDoublyLinkedList::next](spldoublylinkedlist.next.md) -
Переміщує ітератор до наступного елемента
- [SplDoublyLinkedList::offsetExists](spldoublylinkedlist.offsetexists.md)
— Перевіряє, чи запитуваний індекс існує
- [SplDoublyLinkedList::offsetGet](spldoublylinkedlist.offsetget.md)
— Повертає значення за вказаним індексом
- [SplDoublyLinkedList::offsetSet](spldoublylinkedlist.offsetset.md)
— Встановлює значення за заданим індексом $index у $value
- [SplDoublyLinkedList::offsetUnset](spldoublylinkedlist.offsetunset.md)
— Видаляє значення за вказаним індексом $index
- [SplDoublyLinkedList::pop](spldoublylinkedlist.pop.md) — Видаляє
(виштовхує) вузол, що знаходиться в кінці двозв'язкового списку
- [SplDoublyLinkedList::prev](spldoublylinkedlist.prev.md) -
Переміщує ітератор до попереднього елемента
- [SplDoublyLinkedList::push](spldoublylinkedlist.push.md) -
Поміщає елемент до кінця двозв'язкового списку
- [SplDoublyLinkedList::rewind](spldoublylinkedlist.rewind.md)
Повертає ітератор на початок
- [SplDoublyLinkedList::serialize](spldoublylinkedlist.serialize.md)
- Серіалізує сховище
- [SplDoublyLinkedList::setIteratorMode](spldoublylinkedlist.setiteratormode.md)
- Встановлює режим ітерації
- [SplDoublyLinkedList::shift](spldoublylinkedlist.shift.md) -
Видаляє вузол, що знаходиться на початку двозв'язкового списку
- [SplDoublyLinkedList::top](spldoublylinkedlist.top.md) — Отримує
вузол, що знаходиться в кінці двозв'язкового списку
- [SplDoublyLinkedList::unserialize](spldoublylinkedlist.unserialize.md)
- Десеріалізує сховище
- [SplDoublyLinkedList::unshift](spldoublylinkedlist.unshift.md)
Вставляє елемент на початок двозв'язкового списку
- [SplDoublyLinkedList::valid](spldoublylinkedlist.valid.md) -
Перевіряє, чи вузли містить двозв'язний список
