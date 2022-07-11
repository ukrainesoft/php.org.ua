- [«FilesystemIterator::current](filesystemiterator.current.md)
- [FilesystemIterator::key »](filesystemiterator.key.md)

- [PHP Manual](index.md)
- [FilesystemIterator](class.filesystemiterator.md)
- Отримання прапорів налаштувань об'єкта

# FilesystemIterator::getFlags

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

FilesystemIterator::getFlags — Отримання прапорців налаштувань об'єкта

### Опис

public **FilesystemIterator::getFlags**(): int

Отримує значення прапорів налаштувань об'єкта у тому вигляді, як вони були
задані методами
[FilesystemIterator::\_\_construct()](filesystemiterator.construct.md)
або [FilesystemIterator::setFlags()](filesystemiterator.setflags.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ціле число, яке представляє задані прапори.

### Дивіться також

- [FilesystemIterator::\_\_construct()](filesystemiterator.construct.md) -
Створює новий ітератор файлової системи
- [FilesystemIterator::setFlags()](filesystemiterator.setflags.md) -
Завдання прапорів обробки
