- [« DirectoryIterator::isDir](directoryiterator.isdir.md)
- [DirectoryIterator::isExecutable
»](directoryiterator.isexecutable.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Визначає, чи є поточний елемент DirectoryIterator '.' або
'..'

# DirectoryIterator::isDot

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::isDot — Визначає, чи є поточний елемент
DirectoryIterator '.' або '..'

### Опис

public **DirectoryIterator::isDot**(): bool

Визначає, чи є поточний елемент
[DirectoryIterator](class.directoryiterator.md) `.` або `..`

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо елемент є `.` або `..`, інакше
повертає **`false`**

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::isDot()****

Приклад виведе список всіх файлів у директорії, крім `.` та `..`

`<?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if (!$fileinfo->isDot()) {           "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg
banana.jpg
example.php
pears.jpg

### Дивіться також

- [DirectoryIterator::getType()](directoryiterator.gettype.md) -
Визначає тип поточного елемента DirectoryIterator
- [DirectoryIterator::isDir()](directoryiterator.isdir.md) -
Визначає, чи є поточний елемент DirectoryIterator
директорією
- [DirectoryIterator::isFile()](directoryiterator.isfile.md) -
Визначає, чи поточний елемент DirectoryIterator є звичайним
файлом
- [DirectoryIterator::isLink()](directoryiterator.islink.md) -
Визначає, чи є поточний елемент DirectoryIterator
символічним посиланням
