- [«
SplDoublyLinkedList::offsetSet](spldoublylinkedlist.offsetset.md)
- [SplDoublyLinkedList::pop »](spldoublylinkedlist.pop.md)

- [PHP Manual](index.md)
- [SplDoublyLinkedList](class.spldoublylinkedlist.md)
- Видаляє значення за вказаним індексом $index

# SplDoublyLinkedList::offsetUnset

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplDoublyLinkedList::offsetUnset — Видаляє значення за вказаним
індексу $index

### Опис

public **SplDoublyLinkedList::offsetUnset**(int `$index`): void

Видаляє значення за вказаним індексом.

### Список параметрів

`index`
Індекс, котрий видаляється значення.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), коли `index`
виходить за межі, або коли `index` не може бути представлений у вигляді
цілого числа.
