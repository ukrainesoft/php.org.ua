- [« DirectoryIterator::getCTime](directoryiterator.getctime.md)
- [DirectoryIterator::getFilename
»](directoryiterator.getfilename.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає розширення файлу

# DirectoryIterator::getExtension

(PHP 5 \>u003d 5.3.6, PHP 7, PHP 8)

DirectoryIterator::getExtension — Повертає розширення файлу

### Опис

public **DirectoryIterator::getExtension**(): string

Повертає розширення файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок (string), який містить розширення файлу або порожній
рядок (string), якщо файл не має.

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::getExtension()****

` <?php$directory u003d new DirectoryIterator(__DIR__);foreach ($directory as $fileinfo) {    if ($fileinfo->isFile()) {        echo $file "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

php
txt
jpg
gz

### Примітки

> **Примітка**:
>
> Іншим доступним рішенням може бути функція
> [pathinfo()](function.pathinfo.md).
>
> ` <?php$extension u003d pathinfo($fileinfo->getFilename(), PATHINFO_EXTENSION);?> `

### Дивіться також

- [DirectoryIterator::getFilename()](directoryiterator.getfilename.md) -
Повертає ім'я файлу поточного елемента DirectoryIterator
- [DirectoryIterator::getBasename()](directoryiterator.getbasename.md) -
Повертає ім'я файлу (без розширення) поточного елемента
DirectoryIterator
- [pathinfo()](function.pathinfo.md) - Повертає інформацію про шлях
до файлу
