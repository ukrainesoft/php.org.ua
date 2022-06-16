- [«
SplDoublyLinkedList::offsetGet](spldoublylinkedlist.offsetget.md)
- [SplDoublyLinkedList::offsetUnset
»](spldoublylinkedlist.offsetunset.md)

- [PHP Manual](index.md)
- [SplDoublyLinkedList](class.spldoublylinkedlist.md)
- Встановлює значення за заданим індексом $index у $value

# SplDoublyLinkedList::offsetSet

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplDoublyLinkedList::offsetSet — Встановлює значення за заданим
індексу $index у $value

### Опис

public **SplDoublyLinkedList::offsetSet**(?int `$index`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

Встановлює значення за заданим індексом `index` у `value`.

### Список параметрів

`index`
Індекс. Якщо **`null`**, наступне значення буде додано після
останнього елемента.

`value`
Нове значення для індексу `index`.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[OutOfRangeException](class.outofrangeexception.md), коли `index`
виходить за межі, або коли `index` не може бути представлений у вигляді
цілого числа.
