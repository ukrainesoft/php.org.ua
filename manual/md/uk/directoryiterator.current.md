- [«
DirectoryIterator::\_\_construct](directoryiterator.construct.md)
- [DirectoryIterator::getATime »](directoryiterator.getatime.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає поточний елемент DirectoryIterator

# DirectoryIterator::current

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::current — Повертає поточний елемент
DirectoryIterator

### Опис

public **DirectoryIterator::current**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає поточний елемент
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Поточний елемент [DirectoryIterator](class.directoryiterator.md).

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::current()****

Приклад виведе список вмісту директорії, що містить виконуваний
скрипт.

` <?php$iterator u003d new DirectoryIterator(__DIR__);while($iterator->valid()) {   $file u003d $iterator->current(); echo $iterator->key() . " u003d> " . $file->getFilename() . "
";   $iterator->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

0 u003d>.
1 u003d> ..
2 u003d> apple.jpg
3 u003d> banana.jpg
4 u003d> index.php
5 u003d> pear.jpg

### Дивіться також

- [DirectoryIterator::key()](directoryiterator.key.md) - Повертає
ключ поточного елемента DirectoryIterator
- [DirectoryIterator::next()](directoryiterator.next.md) -
Переміщує покажчик на наступний елемент DirectoryIterator
- [DirectoryIterator::rewind()](directoryiterator.rewind.md) -
Встановлює вказівник на перший елемент DirectoryIterator
- [DirectoryIterator::valid()](directoryiterator.valid.md) -
Перевіряє, чи поточний елемент DirectoryIterator є допустимим
файлом
- [Iterator::current()](iterator.current.md) - Повернення поточного
елемента
