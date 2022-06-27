- [« DirectoryIterator::key](directoryiterator.key.md)
- [DirectoryIterator::rewind »](directoryiterator.rewind.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Переміщує покажчик на наступний елемент DirectoryIterator

# DirectoryIterator::next

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::next — Переміщує покажчик на наступний елемент
DirectoryIterator

### Опис

public **DirectoryIterator::next**(): void

Переміщує покажчик на наступний елемент
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::next()****

Виведення списку вмісту директорії за допомогою циклу while

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));while($iterator->valid()) {    echo $iterator->getFilename() . "
";   $iterator->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

.
..
apple.jpg
banana.jpg
index.php
pear.jpg

### Дивіться також

- [DirectoryIterator::current()](directoryiterator.current.md) -
Повертає поточний елемент DirectoryIterator
- [DirectoryIterator::key()](directoryiterator.key.md) - Повертає
ключ поточного елемента DirectoryIterator
- [DirectoryIterator::rewind()](directoryiterator.rewind.md) -
Встановлює вказівник на перший елемент DirectoryIterator
- [DirectoryIterator::valid()](directoryiterator.valid.md) -
Перевіряє, чи поточний елемент DirectoryIterator є допустимим
файлом
- [Iterator::next()](iterator.next.md) - Переходить до наступного
елементу
