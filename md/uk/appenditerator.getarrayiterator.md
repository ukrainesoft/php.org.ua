- [« AppendIterator::current](appenditerator.current.md)
- [AppendIterator::getInnerIterator
»](appenditerator.getinneriterator.md)

- [PHP Manual](index.md)
- [AppendIterator](class.appenditerator.md)
- Повертає клас ітератора масиву ArrayIterator

# AppendIterator::getArrayIterator

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

AppendIterator::getArrayIterator — Повертає клас ітератора масиву
ArrayIterator

### Опис

public **AppendIterator::getArrayIterator**():
[ArrayIterator](class.arrayiterator.md)

Цей метод отримує клас [ArrayIterator](class.arrayiterator.md),
який використовується для зберігання ітераторів, доданих за допомогою
методу [AppendIterator::append()](appenditerator.append.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає клас [ArrayIterator](class.arrayiterator.md), що містить
додані ітератори.

### Дивіться також

- [AppendIterator::getInnerIterator()](appenditerator.getinneriterator.md) -
Повертає внутрішній ітератор
