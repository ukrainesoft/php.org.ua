- [« GlobIterator](class.globiterator.md)
- [GlobIterator::count »](globiterator.count.md)

- [PHP Manual](index.md)
- [GlobIterator](class.globiterator.md)
- створює ітератор директорії, використовуючи glob-вираз

# GlobIterator::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

GlobIterator::\_\_construct - Створює ітератор директорії, використовуючи
glob-вираз

### Опис

public **GlobIterator::\_\_construct**(string `$pattern`, int `$flags` u003d
FilesystemIterator::KEY_AS_PATHNAME \|
FilesystemIterator::CURRENT_AS_FILEINFO)

Створює новий ітератор директорії на основі glob-виразу.

### Список параметрів

`pattern`
Шаблон [glob()](function.glob.md).

`flags`
Прапори налаштувань. Прапори можна ставити бітовою маскою констант
[FilesystemIterator](class.filesystemiterator.md).

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
директорія `directory` не існує.

Викидає виняток [ValueError](class.valueerror.md), якщо
параметр `directory` містить порожній рядок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------|
| 8.0.0 | Тепер викидає виняток [ValueError](class.valueerror.md), якщо параметр `directory` містить порожній рядок. Раніше викидався виняток [RuntimeException](class.runtimeexception.md). |

### Приклади

**Приклад #1 Приклад використання
[GlobIterator](class.globiterator.md)**

` <?php$iterator u003d new GlobIterator('*.dll', FilesystemIterator::KEY_AS_FILENAME);if (!$iterator->count()) {    echo 'Немає збігів';} else | printf("Знайдено елементів: %d
", $iterator->count());   foreach ($iterator as $item) {        printf("[%d] %s
", ++$n, $iterator->key());    }}?> `

Результатом виконання цього прикладу буде щось подібне:

Знайдено елементів: 2
[1] php5ts.dll
[2] php_gd2.dll

### Дивіться також

- [DirectoryIterator::\_\_construct()](directoryiterator.construct.md) -
Створює новий ітератор директорій на шляху
- [GlobIterator::count()](globiterator.count.md) - Визначає
кількість директорій та файлів
- [glob()](function.glob.md) - Знаходить файлові шляхи, що збігаються з
шаблоном
