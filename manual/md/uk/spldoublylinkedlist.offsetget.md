- [«
SplDoublyLinkedList::offsetExists](spldoublylinkedlist.offsetexists.md)
- [SplDoublyLinkedList::offsetSet
»](spldoublylinkedlist.offsetset.md)

- [PHP Manual](index.md)
- [SplDoublyLinkedList](class.spldoublylinkedlist.md)
- Повертає значення за вказаним індексом

# SplDoublyLinkedList::offsetGet

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplDoublyLinkedList::offsetGet — Повертає значення за вказаним
індексу

### Опис

public **SplDoublyLinkedList::offsetGet**(int `$index`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

### Список параметрів

`index`
Індекс.

### Значення, що повертаються

Значення зазначеного індексу `index`.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), коли `index`
виходить за межі, або коли `index` не може бути представлений у вигляді
цілого числа.
