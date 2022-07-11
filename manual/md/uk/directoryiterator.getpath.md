- [« DirectoryIterator::getOwner](directoryiterator.getowner.md)
- [DirectoryIterator::getPathname
»](directoryiterator.getpathname.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає шлях до поточного елементу DirectoryIterator без імені
файлу

# DirectoryIterator::getPath

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getPath — Повертає шлях до поточного елемента
DirectoryIterator без імені файлу

### Опис

public **DirectoryIterator::getPath**(): string

Повертає шлях до поточного елементу
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях до файлу (без імені файлу та завершального слішу).

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getPath()****

` <?php$iteratoru003du003dnewDirectoryIterator(dirname(__FILE__));echo$iterator->getPath();?> `

Результатом виконання цього прикладу буде щось подібне:

/home/examples/public_html

### Дивіться також

- [DirectoryIterator::getBasename()](directoryiterator.getbasename.md) -
Повертає ім'я файлу (без розширення) поточного елемента
DirectoryIterator
- [DirectoryIterator::getFilename()](directoryiterator.getfilename.md) -
Повертає ім'я файлу поточного елемента DirectoryIterator
- [DirectoryIterator::getPathname()](directoryiterator.getpathname.md) -
Повертає шлях та ім'я файлу поточного елемента DirectoryIterator
- [pathinfo()](function.pathinfo.md) - Повертає інформацію про шлях
до файлу
