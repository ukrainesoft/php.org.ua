- [« SplStack::\_\_construct](splstack.construct.md)
- [SplQueue »](class.splqueue.md)

- [PHP Manual](index.md)
- [SplStack](class.splstack.md)
- Встановлює режим ітератора

# SplStack::setIteratorMode

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplStack::setIteratorMode — Встановлює режим ітератора

### Опис

public **SplStack::setIteratorMode**(int `$mode`): void

### Список параметрів

`mode`
Можна змінити лише один параметр ітератора.

- Поведінка ітератора (або одне, або інше):
- SplDoublyLinkedList::IT_MODE_DELETE (Елементи видаляються
ітератором)
- SplDoublyLinkedList::IT_MODE_KEEP (Ітератор обходить елементи, не
видаляючи їх)

За промовчанням використовується режим 0x2 : SplDoublyLinkedList::IT_MODE_LIFO
\| SplDoublyLinkedList::IT_MODE_KEEP

**Увага**
Напрямок ітерації не можна змінити для об'єктів SplStack.
Спроба зробити це призведе до того, що буде викинуто
[RuntimeException](class.runtimeexception.md).

### Значення, що повертаються

Функція не повертає значення після виконання.
