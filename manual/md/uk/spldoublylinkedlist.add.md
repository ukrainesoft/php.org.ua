- [« SplDoublyLinkedList](class.spldoublylinkedlist.md)
- [SplDoublyLinkedList::bottom »](spldoublylinkedlist.bottom.md)

- [PHP Manual](index.md)
- [SplDoublyLinkedList](class.spldoublylinkedlist.md)
- Додає/вставляє нове значення за вказаним індексом

# SplDoublyLinkedList::add

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

SplDoublyLinkedList::add — Додає/вставляє нове значення за
зазначеному індексу

### Опис

public **SplDoublyLinkedList::add**(int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Вставляє значення `value` за вказаним індексом `index`. Попереднє
значення (і всі наступні) зміщуються вгору за списком.

### Список параметрів

`index`
Індекс, яким треба вставити значення.

`value`
Значення, яке треба вставити за індексом `index`.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), якщо `index` за
межами списку, або якщо `index` не може бути представлений у вигляді
цілого числа.
