- [«
FilesystemIterator::\_\_construct](filesystemiterator.construct.md)
- [FilesystemIterator::getFlags »](filesystemiterator.getflags.md)

- [PHP Manual](index.md)
- [FilesystemIterator](class.filesystemiterator.md)
- Поточний файл

# FilesystemIterator::current

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

FilesystemIterator::current — Поточний файл

### Опис

public **FilesystemIterator::current**():
string\|[SplFileInfo](class.splfileinfo.md)\|[FilesystemIterator](class.filesystemiterator.md)

Виймає інформацію про поточний файл.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ім'я файлу, інформація про файл, або $this, залежно від
встановлені прапори. Дивіться [Константи
FilesystemIterator](class.filesystemiterator.md#filesystemiterator.constants).

### Приклади

**Приклад #1 Приклад використання **FilesystemIterator::current()****

У цьому прикладі буде виведено список вмісту директорії, в якій
знаходиться виконуваний скрипт.

` <?php$iterator u003d new FilesystemIterator(__DIR__, FilesystemIterator::CURRENT_AS_PATHNAME);foreach ($iterator as $fileinfo) {    echo $iterator->current() . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

/www/examples/apple.jpg
/www/examples/banana.jpg
/www/examples/example.php

### Дивіться також

- [Константи
FilesystemIterator](class.filesystemiterator.md#filesystemiterator.constants)
- [DirectoryIterator::current()](directoryiterator.current.md) -
Повертає поточний елемент DirectoryIterator
- [DirectoryIterator::getFileName()](directoryiterator.getfilename.md) -
Повертає ім'я файлу поточного елемента DirectoryIterator
