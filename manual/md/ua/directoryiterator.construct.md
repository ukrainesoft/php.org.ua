- [«DirectoryIterator](class.directoryiterator.md)
- [DirectoryIterator::current »](directoryiterator.current.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Створює новий ітератор директорій на шляху

# DirectoryIterator::\_\_construct

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::\_\_construct — Створює новий ітератор директорій з
шляхи

### Опис

public **DirectoryIterator::\_\_construct**(string `$directory`)

Створює новий ітератор директорій на шляху.

### Список параметрів

`directory`
Дорога до директорії для проходу.

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md) в
у випадку, якщо директорія `directory` не існує.

Викидає виняток [ValueError](class.valueerror.md), якщо
параметр `directory` містить порожній рядок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------|
| 8.0.0 | Тепер викидає виняток [ValueError](class.valueerror.md), якщо параметр `directory` містить порожній рядок; раніше викидався виняток [RuntimeException](class.runtimeexception.md). |

### Приклади

**Приклад #1 Приклад використання
**DirectoryIterator::\_\_construct()****

Приклад виведе список вмісту директорії, що містить виконуваний
скрипт.

`<?php$dir u003d new DirectoryIterator(dirname(__FILE__));foreach ($dir as $fileinfo) {    if (!$fileinfo->isDot()) {          }}?> `

### Дивіться також

- [SplFileInfo](class.splfileinfo.md)
- [Iterator](class.iterator.md)
