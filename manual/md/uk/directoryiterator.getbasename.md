- [« DirectoryIterator::getATime](directoryiterator.getatime.md)
- [DirectoryIterator::getCTime »](directoryiterator.getctime.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає ім'я файлу (без розширення) поточного елемента
DirectoryIterator

# DirectoryIterator::getBasename

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

DirectoryIterator::getBasename — Повертає ім'я файлу (без розширення)
поточний елемент DirectoryIterator

### Опис

public **DirectoryIterator::getBasename**(string `$suffix` u003d ""): string

Повертає ім'я файлу (без розширення) поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

`suffix`
Якщо ім'я файлу закінчується на `suffix`, він буде відкинуто.

### Значення, що повертаються

Ім'я файлу поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getBasename()****

Приклад виведе список імен файлів директорії, що містить виконуваний
скрипт. Якщо ім'я файлу закінчується на `.jpg`, цей суфікс буде
відкинуто.

` <?php$dir u003d new DirectoryIterator(dirname(__FILE__));foreach ($dir as $fileinfo) {    if ($fileinfo->isFile()) {         echo "
";        echo $fileinfo->getBasename('.jpg') . "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

apple.jpg
apple
banana.jpg
banana
index.php
index.php
pear.jpg
pear

### Дивіться також

- [DirectoryIterator::getFilename()](directoryiterator.getfilename.md) -
Повертає ім'я файлу поточного елемента DirectoryIterator
- [DirectoryIterator::getPath()](directoryiterator.getpath.md) -
Повертає шлях до поточного елементу DirectoryIterator без імені
файлу
- [DirectoryIterator::getPathname()](directoryiterator.getpathname.md) -
Повертає шлях та ім'я файлу поточного елемента DirectoryIterator
- [basename()](function.basename.md) - Повертає останній
компонент імені із зазначеного шляху
- [pathinfo()](function.pathinfo.md) - Повертає інформацію про шлях
до файлу
