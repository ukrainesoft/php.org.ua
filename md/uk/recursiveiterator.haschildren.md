- [«
RecursiveIterator::getChildren](recursiveiterator.getchildren.md)
- [SeekableIterator »](class.seekableiterator.md)

- [PHP Manual](index.md)
- [RecursiveIterator](class.recursiveiterator.md)
- Визначає, чи можна створити ітератор для поточного елемента

# RecursiveIterator::hasChildren

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

RecursiveIterator::hasChildren — Визначає, чи можна для поточного
елемент створити ітератор

### Опис

public **RecursiveIterator::hasChildren**(): bool

Визначає, чи можна створити ітератор для поточного елемента методом
[RecursiveIterator::getChildren()](recursiveiterator.getchildren.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо за поточним елементом можна здійснювати
ітерацію, **`false`** інакше.

### Дивіться також

- [RecursiveIterator::getChildren()](recursiveiterator.getchildren.md) -
Повертає ітератор для поточного елемента
