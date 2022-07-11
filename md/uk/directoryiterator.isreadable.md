- [« DirectoryIterator::isLink](directoryiterator.islink.md)
- [DirectoryIterator::isWritable »](directoryiterator.iswritable.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Визначає, чи доступний поточний елемент DirectoryIterator для читання

# DirectoryIterator::isReadable

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::isReadable — Визначає, чи доступний поточний елемент
DirectoryIterator для читання

### Опис

public **DirectoryIterator::isReadable**(): bool

Визначає, чи доступний поточний елемент
[DirectoryIterator](class.directoryiterator.md) для читання.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо файл доступний для читання, інакше повертає
**`false`**

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::isReadable()****

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if ($fileinfo->isReadable()) {            "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg
banana.jpg
example.php
pears.jpg

### Дивіться також

- [DirectoryIterator::isExecutable()](directoryiterator.isexecutable.md) -
Визначає, чи є поточний елемент DirectoryIterator
виконуваним
- [DirectoryIterator::isWritable()](directoryiterator.iswritable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для запису
- [DirectoryIterator::getPerms()](directoryiterator.getperms.md) -
Повертає набір прав для поточного елемента DirectoryIterator item
