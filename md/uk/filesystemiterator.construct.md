- [«FilesystemIterator](class.filesystemiterator.md)
- [FilesystemIterator::current »](filesystemiterator.current.md)

- [PHP Manual](index.md)
- [FilesystemIterator](class.filesystemiterator.md)
- Створює новий ітератор файлової системи

# FilesystemIterator::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

FilesystemIterator::\_\_construct — Створює новий файловий ітератор
системи

### Опис

public **FilesystemIterator::\_\_construct**(string `$directory`, int
`$flags` u003d FilesystemIterator::KEY_AS_PATHNAME \|
FilesystemIterator::CURRENT_AS_FILEINFO \|
FilesystemIterator::SKIP_DOTS)

Створює новий об'єкт ітератора файлової системи на основі аргументу
`directory`.

### Список параметрів

`directory`
Шлях до об'єкта файлової системи, по якому потрібна навігація.

`flags`
Поведінку деяких методів можна встановити за допомогою прапорів. Список цих
прапорів можна знайти на сторінці [визначених констант
FilesystemIterator](class.filesystemiterator.md#filesystemiterator.constants).
Також їх можна задати пізніше методом
[FilesystemIterator::setFlags()](filesystemiterator.setflags.md).

> **Примітка**:
>
> **`FilesystemIterator::SKIP_DOTS`** завжди встановлений і не може бути
> Видалити.

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
директорія `directory` не існує.

Викидає виняток [ValueError](class.valueerror.md), якщо
параметр `directory` містить порожній рядок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------|
| 8.0.0 | Тепер викидає виняток [ValueError](class.valueerror.md), якщо параметр `directory` містить порожній рядок; раніше викидався виняток [RuntimeException](class.runtimeexception.md). |

### Приклади

**Приклад #1 Приклад використання
**FilesystemIterator::\_\_construct()****

` <?php$it u003d new FilesystemIterator(dirname(__FILE__));foreach ($it as $fileinfo) {    echo $fileinfo->getFilename() . "
";}?> `

Результат виконання цього прикладу:

apples.jpg
banana.jpg
example.php

### Дивіться також

- [FilesystemIterator::setFlags()](filesystemiterator.setflags.md) -
Завдання прапорів обробки
- [DirectoryIterator::\_\_construct()](directoryiterator.construct.md) -
Створює новий ітератор директорій на шляху
