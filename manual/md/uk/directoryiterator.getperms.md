- [«
DirectoryIterator::getPathname](directoryiterator.getpathname.md)
- [DirectoryIterator::getSize »](directoryiterator.getsize.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає набір прав для поточного елемента DirectoryIterator item

# DirectoryIterator::getPerms

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getPerms — Повертає набір прав для поточного
елемента DirectoryIterator item

### Опис

public **DirectoryIterator::getPerms**(): int

Повертає набір прав для поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає набір прав для поточного файлу як десяткового числа int.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getPerms()****

`<?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if (!$fileinfo->isDot()) s| s| | fileinfo->getPerms()), -4); echo $fileinfo->getFilename() . " " . $octal_perms . "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg 0644
banana.jpg 0644
index.php 0744
pear.jpg 0644

### Дивіться також

- [DirectoryIterator::isExecutable()](directoryiterator.isexecutable.md) -
Визначає, чи є поточний елемент DirectoryIterator
виконуваним
- [DirectoryIterator::isReadable()](directoryiterator.isreadable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для читання
- [DirectoryIterator::isWritable()](directoryiterator.iswritable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для запису
