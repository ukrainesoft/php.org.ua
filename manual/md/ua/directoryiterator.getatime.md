- [« DirectoryIterator::current](directoryiterator.current.md)
- [DirectoryIterator::getBasename
»](directoryiterator.getbasename.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає час останнього доступу до поточного елемента
DirectoryIterator

# DirectoryIterator::getATime

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getATime — Повертає час останнього доступу до
поточний елемент DirectoryIterator

### Опис

public **DirectoryIterator::getATime**(): int

Повертає час останнього доступу до поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час, коли востаннє було здійснено доступ до
вказаного файлу. Час повертається у форматі позначки часу Unix.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getATime()****

Приклад виведе список файлів директорії, що містить скрипт,
та час останнього доступу до них.

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if ($fileinfo->isFile()) {            " " . $fileinfo->getATime() . "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg 1240047118
banana.jpg 1240065176
index.php 1240047208
pear.jpg 12240047979

### Дивіться також

- [DirectoryIterator::getCTime()](directoryiterator.getctime.md) -
Повертає час останньої зміни inode поточного елемента
DirectoryIterator
- [DirectoryIterator::getMTime()](directoryiterator.getmtime.md) -
Повертає час останньої зміни поточного елемента
DirectoryIterator
- [fileatime()](function.fileatime.md) - Повертає час останнього
доступу до файлу
