- [«
DirectoryIterator::getExtension](directoryiterator.getextension.md)
- [DirectoryIterator::getGroup »](directoryiterator.getgroup.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає ім'я файлу поточного елемента DirectoryIterator

# DirectoryIterator::getFilename

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getFilename — Повертає ім'я файлу поточного елемента
DirectoryIterator

### Опис

public **DirectoryIterator::getFilename**(): string

Повертає ім'я файлу поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я файлу поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getFilename()****

Приклад виведе список вмісту директорії, що містить виконуваний
скрипт.

` <?php$dir u003d new DirectoryIterator(dirname(__FILE__));foreach ($dir as $fileinfo) {    echo $fileinfo->getFilename() . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

.
..
apple.jpg
banana.jpg
index.php
pear.jpg

### Дивіться також

- [DirectoryIterator::getBasename()](directoryiterator.getbasename.md) -
Повертає ім'я файлу (без розширення) поточного елемента
DirectoryIterator
- [DirectoryIterator::getPath()](directoryiterator.getpath.md) -
Повертає шлях до поточного елементу DirectoryIterator без імені
файлу
- [DirectoryIterator::getPathname()](directoryiterator.getpathname.md) -
Повертає шлях та ім'я файлу поточного елемента DirectoryIterator
- [pathinfo()](function.pathinfo.md) - Повертає інформацію про шлях
до файлу
