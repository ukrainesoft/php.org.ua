- [« DirectoryIterator::isWritable](directoryiterator.iswritable.md)
- [DirectoryIterator::next »](directoryiterator.next.md)

- [PHP Manual](index.md)
- [DirectoryIterator](class.directoryiterator.md)
- Повертає ключ поточного елемента DirectoryIterator

# DirectoryIterator::key

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::key — Повертає ключ поточного елемента
DirectoryIterator

### Опис

public **DirectoryIterator::key**():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Повертає ключ поточного елемента
[DirectoryIterator](class.directoryiterator.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ключ поточного елемента [DirectoryIterator](class.directoryiterator.md)
як цілого числа (int).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------|
| 8.1.0 | Якщо ітератор не ініціалізований, викидається помилка [Error](class.error.md). Раніше метод повертав "false". |

### Приклади

**Приклад #1 Приклад використання **DirectoryIterator::key()****

` <?php$dir u003d new DirectoryIterator(dirname(__FILE__));foreach ($dir as $fileinfo) {    if (!$fileinfo->isDot()) {           " u003d> " . $fileinfo->getFilename() . "
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

0 u003d> apple.jpg
1 u003d> banana.jpg
2 u003d> index.php
3 u003d> pear.jpg

### Дивіться також

- [DirectoryIterator::current()](directoryiterator.current.md) -
Повертає поточний елемент DirectoryIterator
- [DirectoryIterator::next()](directoryiterator.next.md) -
Переміщує покажчик на наступний елемент DirectoryIterator
- [DirectoryIterator::rewind()](directoryiterator.rewind.md) -
Встановлює вказівник на перший елемент DirectoryIterator
- [DirectoryIterator::valid()](directoryiterator.valid.md) -
Перевіряє, чи поточний елемент DirectoryIterator є допустимим
файлом
- [Iterator::key()](iterator.key.md) - Повертає ключ поточного
елемента
