- [« DirectoryIterator::\_\_toString](directoryiterator.tostring.md)
- [EmptyIterator »](class.emptyiterator.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Перевіряє, чи є поточний елемент DirectoryIterator допустимим
файлом

# DirectoryIterator::valid

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::valid — Перевіряє, чи є поточний елемент
DirectoryIterator допустимим файлом

### Опис

public **DirectoryIterator::valid**(): bool

Перевіряє, чи є поточний елемент
[DirectoryIterator](class.directoryiterator.md) допустимим файлом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо елемент є допустимим, інакше
повертає **`false`**

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::valid()****

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));// Цикл до кінця ітератораwhile($iterator->valid()) {    $iterator->next();}$iterator->valid() // FALSE$iterator->rewind();$iterator->valid(); // TRUE?> `

### Дивіться також

- [DirectoryIterator::current()](directoryiterator.current.md) -
Повертає поточний елемент DirectoryIterator
- [DirectoryIterator::key()](directoryiterator.key.md) - Повертає
ключ поточного елемента DirectoryIterator
- [DirectoryIterator::next()](directoryiterator.next.md) -
Переміщує покажчик на наступний елемент DirectoryIterator
- [DirectoryIterator::rewind()](directoryiterator.rewind.md) -
Встановлює вказівник на перший елемент DirectoryIterator
- [Iterator::valid()](iterator.valid.md) - Перевіряє правильність
поточної позиції
