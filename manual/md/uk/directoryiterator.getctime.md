- [«
DirectoryIterator::getBasename](directoryiterator.getbasename.md)
- [DirectoryIterator::getExtension
»](directoryiterator.getextension.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає час останньої зміни inode поточного елемента
DirectoryIterator

# DirectoryIterator::getCTime

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getCTime — Повертає час останньої зміни
inode поточного елемента DirectoryIterator

### Опис

public **DirectoryIterator::getCTime**(): int

Повертає час останньої зміни inode поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час останньої зміни файлу у форматі позначки часу
Unix.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getCTime()****

Приклад виведе список файлів директорії, що містить скрипт і
час їхньої останньої зміни.

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if ($fileinfo->isFile()) {            " змінювався в " . $fileinfo->getCTime() . "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg змінювався на 1240398312
banana.jpg змінювався на 1238605440
index.php змінювався на 1240398935
pear.jpg змінювався в 1237423740

### Дивіться також

- [DirectoryIterator::getATime()](directoryiterator.getatime.md) -
Повертає час останнього доступу до поточного елемента
DirectoryIterator
- [DirectoryIterator::getMTime()](directoryiterator.getmtime.md) -
Повертає час останньої зміни поточного елемента
DirectoryIterator
- [filectime()](function.filectime.md) - Повертає час зміни
індексного дескриптора файлу
