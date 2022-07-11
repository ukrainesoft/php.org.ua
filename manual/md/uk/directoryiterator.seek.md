- [« DirectoryIterator::rewind](directoryiterator.rewind.md)
- [DirectoryIterator::\_\_toString »](directoryiterator.tostring.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Переміщує покажчик DirectoryIterator на певну позицію

# DirectoryIterator::seek

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DirectoryIterator::seek — Переміщує покажчик DirectoryIterator на
певну позицію

### Опис

public **DirectoryIterator::seek**(int `$offset`): void

Переміщує вказівник [DirectoryIterator](class.directoryiterator.md)
на певну позицію.

### Список параметрів

`offset`
Номер позиції для переміщення. Нумерація починається з нуля.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::seek()****

Перейти до четвертого елементу в директорії, що містить виконуваний
скрипт. Перші два, як правило `.` та `..`.

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));$iterator->seek(3);if ($iterator->valid()) {   echo $iterator->getFilename();} else {  Немає третього елемента в директорії';}?> `

### Дивіться також

- [DirectoryIterator::rewind()](directoryiterator.rewind.md) -
Встановлює вказівник на перший елемент DirectoryIterator
- [DirectoryIterator::next()](directoryiterator.next.md) -
Переміщує покажчик на наступний елемент DirectoryIterator
- [SeekableIterator::seek()](seekableiterator.seek.md) -
Переміщається до позиції
