- [« DirectoryIterator::getGroup](directoryiterator.getgroup.md)
- [DirectoryIterator::getMTime »](directoryiterator.getmtime.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає inode поточного елемента DirectoryIterator

# DirectoryIterator::getInode

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getInode — Повертає inode поточного елемента
DirectoryIterator

### Опис

public **DirectoryIterator::getInode**(): int

Повертає inode поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає файл inode.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getInode()****

Приклад виведе inode директорії, що містить скрипт, що виконується.

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));echo $iterator->getInode();?> `

### Дивіться також

- [DirectoryIterator::getGroup()](directoryiterator.getgroup.md) -
Повертає ідентифікатор групи поточного елемента DirectoryIterator
- [DirectoryIterator::getOwner()](directoryiterator.getowner.md) -
Повертає ідентифікатор власника поточного елемента
DirectoryIterator
- [DirectoryIterator::getPerms()](directoryiterator.getperms.md) -
Повертає набір прав для поточного елемента DirectoryIterator item
- [fileinode()](function.fileinode.md) - Повертає індексний
дескриптор файлу
