- [«
DirectoryIterator::getFilename](directoryiterator.getfilename.md)
- [DirectoryIterator::getInode »](directoryiterator.getinode.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає ідентифікатор групи поточного елемента DirectoryIterator

# DirectoryIterator::getGroup

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getGroup — Повертає ідентифікатор групи поточного
елемента DirectoryIterator

### Опис

public **DirectoryIterator::getGroup**(): int

Повертає ідентифікатор поточного файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ідентифікатор групи поточного елемента
[DirectoryIterator](class.directoryiterator.md) у числовому форматі.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getGroup()****

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));$groupid  u003d $iterator->getGroup();echo 'Директорія належить групі ' . $groupid . "
";print_r(posix_getgrgid($groupid));?> `

Результатом виконання цього прикладу буде щось подібне:

Директорія належить до групи 42
Array
(
[name] u003d> toons
[passwd] u003d> x
[members] u003d> Array
(
[0] u003d> tom
[1] u003d> jerry
)
[gid] u003d> 42
)

### Дивіться також

- [DirectoryIterator::getiNode()](directoryiterator.getinode.md) -
Повертає inode поточного елемента DirectoryIterator
- [DirectoryIterator::getOwner()](directoryiterator.getowner.md) -
Повертає ідентифікатор власника поточного елемента
DirectoryIterator
- [DirectoryIterator::getPerms()](directoryiterator.getperms.md) -
Повертає набір прав для поточного елемента DirectoryIterator item
- [filegroup()](function.filegroup.md) - Отримує ідентифікатор
групи файлу
- [posix_getgrgid()](function.posix-getgrgid.md) - Повертає
інформацію про групу з її ID
