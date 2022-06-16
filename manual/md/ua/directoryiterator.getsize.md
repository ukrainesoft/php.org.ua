- [« DirectoryIterator::getPerms](directoryiterator.getperms.md)
- [DirectoryIterator::getType »](directoryiterator.gettype.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає розмір поточного елемента DirectoryIterator

# DirectoryIterator::getSize

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getSize — Повертає розмір поточного елемента
DirectoryIterator

### Опис

public **DirectoryIterator::getSize**(): int

Повертає обсяг займаного дискового простору для поточного
елемента [DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає розмір файлу в байтах.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getSize()****

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if ($fileinfo->isFile()) {            " " . $fileinfo->getSize() . "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg 15385
banana.jpg 15190
example.php 170
pear.jpg 34406

### Дивіться також

- [filesize()](function.filesize.md) - Повертає розмір файлу
