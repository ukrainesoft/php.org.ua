- [« DirectoryIterator::isDot](directoryiterator.isdot.md)
- [DirectoryIterator::isFile »](directoryiterator.isfile.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Визначає, чи є поточний елемент DirectoryIterator
виконуваним

# DirectoryIterator::isExecutable

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::isExecutable — Визначає, чи є поточний
елемент DirectoryIterator виконуваний

### Опис

public **DirectoryIterator::isExecutable**(): bool

Визначає, чи є поточний елемент
[DirectoryIterator](class.directoryiterator.md) виконуваним.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо файл є виконуваним, інакше повертає
**`false`**

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::isExecutable()****

Приклад показує список файлів, що виконуються в директорії, що містить
виконуваний скрипт.

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if ($fileinfo->isExecutable()) { file| "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

example.php
myscript.sh

### Дивіться також

- [DirectoryIterator::isReadable()](directoryiterator.isreadable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для читання
- [DirectoryIterator::isWritable()](directoryiterator.iswritable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для запису
- [DirectoryIterator::getPerms()](directoryiterator.getperms.md) -
Повертає набір прав для поточного елемента DirectoryIterator item
