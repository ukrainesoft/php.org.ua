- [« DirectoryIterator::seek](directoryiterator.seek.md)
- [DirectoryIterator::valid »](directoryiterator.valid.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає ім'я файлу у вигляді рядка

# DirectoryIterator::\_\_toString

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::\_\_toString — Повертає ім'я файлу у вигляді рядка

### Опис

public **DirectoryIterator::\_\_toString**(): string

Повертає ім'я файлу поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я файлу поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::\_\_toString()****

Приклад виведе список вмісту директорії, що містить виконуваний
скрипт.

` <?php$dir u003d new DirectoryIterator(dirname(__FILE__));foreach ($dir as $fileinfo) {    echo $fileinfo;}?> `

Результатом виконання цього прикладу буде щось подібне:

.
..
apple.jpg
banana.jpg
index.php
pear.jpg

### Дивіться також

- [DirectoryIterator::getFilename()](directoryiterator.getfilename.md) -
Повертає ім'я файлу поточного елемента DirectoryIterator
- магічний метод
[\_\_toString()](language.oop5.magic.md#object.tostring)
