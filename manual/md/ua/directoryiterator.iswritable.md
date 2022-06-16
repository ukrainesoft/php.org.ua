- [« DirectoryIterator::isReadable](directoryiterator.isreadable.md)
- [DirectoryIterator::key »](directoryiterator.key.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Визначає, чи доступний поточний елемент DirectoryIterator для запису

# DirectoryIterator::isWritable

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::isWritable — Визначає, чи доступний поточний елемент
DirectoryIterator для запису

### Опис

public **DirectoryIterator::isWritable**(): bool

Визначає, чи доступний поточний елемент
[DirectoryIterator](class.directoryiterator.md) для запису.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо файл або директорія доступні для запису,
інакше повертає **`false`**

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::isWritable()****

Приклад показує список файлів та каталогів, які можуть бути відкриті
для запису, розташовані в директорії, що містить скрипт, що виконується.

` <?php$iterator u003d new DirectoryIterator(dirname(__FILE__));foreach ($iterator as $fileinfo) {    if ($fileinfo->isWritable()) {            "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apples.txt
bananas.md
pears

### Дивіться також

- [DirectoryIterator::getPerms()](directoryiterator.getperms.md) -
Повертає набір прав для поточного елемента DirectoryIterator item
- [DirectoryIterator::isExecutable()](directoryiterator.isexecutable.md) -
Визначає, чи є поточний елемент DirectoryIterator
виконуваним
- [DirectoryIterator::isReadable()](directoryiterator.isreadable.md) -
Визначає, чи доступний поточний елемент DirectoryIterator для читання
