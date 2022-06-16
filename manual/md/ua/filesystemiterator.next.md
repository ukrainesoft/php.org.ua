- [«FilesystemIterator::key](filesystemiterator.key.md)
- [FilesystemIterator::rewind »](filesystemiterator.rewind.md)

- [PHP Manual](index.md)
- [FilesystemIterator](class.filesystemiterator.md)
- Переміщення вказівника на наступний файл

# FilesystemIterator::next

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

FilesystemIterator::next — Переміщення вказівника на наступний файл

### Опис

public **FilesystemIterator::next**(): void

Перехід до наступного файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **FilesystemIterator::next()****

Виведення списку вмісту директорії за допомогою циклу while.

` <?php$iterator u003d new FilesystemIterator(dirname(__FILE__));while($iterator->valid()) {    echo $iterator->getFilename() . "
";   $iterator->next();}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg
banana.jpg
example.php

### Дивіться також

- [DirectoryIterator::next()](directoryiterator.next.md) -
Переміщує покажчик на наступний елемент DirectoryIterator
