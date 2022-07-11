- [«FilesystemIterator::getFlags](filesystemiterator.getflags.md)
- [FilesystemIterator::next »](filesystemiterator.next.md)

- [PHP Manual](index.md)
- [FilesystemIterator](class.filesystemiterator.md)
- Визначення ключа поточного файлу

# FilesystemIterator::key

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

FilesystemIterator::key — Визначення ключа поточного файлу

### Опис

public **FilesystemIterator::key**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях або ім'я файлу, залежно від встановлених прапорів.
Дивіться [Константи
FilesystemIterator](class.filesystemiterator.md#filesystemiterator.constants).

### Приклади

**Приклад #1 Приклад використання **FilesystemIterator::key()****

Цей приклад виведе список вмісту директорії, в якій розташований
скрипт.

` <?php$iterator u003d new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_FILENAME);foreach ($iterator as $fileinfo) {    echo $iterator->key() . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg
banana.jpg
example.php

### Дивіться також

- [FilesystemIterator
constants](class.filesystemiterator.md#filesystemiterator.constants)
- [DirectoryIterator::key()](directoryiterator.key.md) - Повертає
ключ поточного елемента DirectoryIterator
- [DirectoryIterator::getFilename()](directoryiterator.getfilename.md) -
Повертає ім'я файлу поточного елемента DirectoryIterator
- [DirectoryIterator::getPathname()](directoryiterator.getpathname.md) -
Повертає шлях та ім'я файлу поточного елемента DirectoryIterator
