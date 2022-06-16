- [«FilesystemIterator::rewind](filesystemiterator.rewind.md)
- [FilterIterator »](class.filteriterator.md)

- [PHP Manual](index.md)
- [FilesystemIterator](class.filesystemiterator.md)
- Завдання прапорів обробки

# FilesystemIterator::setFlags

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

FilesystemIterator::setFlags — Завдання прапорів обробки

### Опис

public **FilesystemIterator::setFlags**(int `$flags`): void

Задає налаштування ітератора.

### Список параметрів

`flags`
Прапори, які потрібно встановити. Дивіться [Константи
FilesystemIterator](class.filesystemiterator.md#filesystemiterator.constants).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
[FilesystemIterator::key()](filesystemiterator.key.md)**

Приклад демонструє різницю між прапорами
[FilesystemIterator::KEY_AS_PATHNAME](class.filesystemiterator.md#filesystemiterator.constants.key-as-pathname)
і
[FilesystemIterator::KEY_AS_FILENAME](class.filesystemiterator.md#filesystemiterator.constants.key-as-filename).

` <?php$iterator u003d new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_PATHNAME);echo "Ключом є шлях до файлу:
";foreach ($iterator as $key u003d> $fileinfo) {    echo $key . "
";}$iterator->setFlags(FilesystemIterator::KEY_AS_FILENAME);echo "
Ключем є ім'я файлу:
";foreach ($iterator as $key u003d> $fileinfo) {    echo $key . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Ключем є шлях до файлу:
/www/examples/apple.jpg
/www/examples/banana.jpg
/www/examples/example.php

Ключем є ім'я файлу:
apple.jpg
banana.jpg
example.php

### Дивіться також

- [FilesystemIterator::\_\_construct()](filesystemiterator.construct.md) -
Створює новий ітератор файлової системи
- [FilesystemIterator::getFlags()](filesystemiterator.getflags.md) -
Отримання прапорів налаштувань об'єкта
