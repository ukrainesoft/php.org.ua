- [« DirectoryIterator::isFile](directoryiterator.isfile.md)
- [DirectoryIterator::isReadable »](directoryiterator.isreadable.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Визначає, чи є поточний елемент DirectoryIterator
символічним посиланням

# DirectoryIterator::isLink

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::isLink — Визначає, чи є поточний елемент
DirectoryIterator символічне посилання

### Опис

public **DirectoryIterator::isLink**(): bool

Визначає, чи є поточний елемент
[DirectoryIterator](class.directoryiterator.md) символічним посиланням.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо елемент є символічним посиланням,
інакше повертає **`false`**

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::isLink()****

Приклад містить рекурсивну функцію видалення дерева каталогів.

`<?php/** * Дана функція рекурсивно удаляє всі файли, символічні посилання і директорії * за вказаним шляхом. * * @param string $path Шлях до директорії для видалення. */function removeDir($path) {    $dir u003d new DirectoryIterator($path); foreach ($dir as $fileinfo) {        if ($fileinfo->isFile() || $fileinfo->isLink()) {              unlink($file }elseif(!$fileinfo->isDot() && $fileinfo->isDir()) {           removeDir($fileinfo->getPathName()); }    }   rmdir($path);}removeDir('foo');?> `

### Дивіться також

- [DirectoryIterator::getType()](directoryiterator.gettype.md) -
Визначає тип поточного елемента DirectoryIterator
- [DirectoryIterator::isDir()](directoryiterator.isdir.md) -
Визначає, чи є поточний елемент DirectoryIterator
директорією
- [DirectoryIterator::isDot()](directoryiterator.isdot.md) -
Визначає, чи є поточний елемент DirectoryIterator '.' або
'..'
- [DirectoryIterator::isFile()](directoryiterator.isfile.md) -
Визначає, чи поточний елемент DirectoryIterator є звичайним
файлом
