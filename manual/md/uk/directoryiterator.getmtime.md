- [« DirectoryIterator::getInode](directoryiterator.getinode.md)
- [DirectoryIterator::getOwner »](directoryiterator.getowner.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає час останньої зміни поточного елемента
DirectoryIterator

# DirectoryIterator::getMTime

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getMTime — Повертає час останньої зміни
поточний елемент DirectoryIterator

### Опис

public **DirectoryIterator::getMTime**(): int

Повертає час останньої зміни поточного елемента
[DirectoryIterator](class.directoryiterator.md) у форматі позначки
часу Unix.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Час останньої зміни файлу у форматі позначки часу Unix.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getMTime()****

Приклад виведе список файлів директорії, що містить скрипт і
час їхньої останньої модифікації.

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if ($fileinfo->isFile()) {            " " . $fileinfo->getMTime() . "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg 1240047118
banana.jpg 1240065176
index.php 1240047208
pear.jpg 12240047979

### Дивіться також

- [DirectoryIterator::getATime()](directoryiterator.getatime.md) -
Повертає час останнього доступу до поточного елемента
DirectoryIterator
- [DirectoryIterator::getCTime()](directoryiterator.getctime.md) -
Повертає час останньої зміни inode поточного елемента
DirectoryIterator
- [filemtime()](function.filemtime.md) - Повертає час останнього
зміни файлу
