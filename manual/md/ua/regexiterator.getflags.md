- [« RegexIterator::\_\_construct](regexiterator.construct.md)
- [RegexIterator::getMode »](regexiterator.getmode.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Отримання прапорів налаштування

# RegexIterator::getFlags

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::getFlags — Отримання прапорців налаштування

### Опис

public **RegexIterator::getFlags**(): int

Повертає прапори настроювання. Список можливих прапорів наведено в описі
методу [RegexIterator::setFlags()](regexiterator.setflags.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає набір прапорів.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::getFlags()****

` <?php$test u003d array ('str1' u003d> 'test 1', 'teststr2' u003d> 'another test', 'str3' u003d> 'test 123');$arrayIterator u003d new Ar $regexIteratoru003d new RegexIterator($arrayIterator, '/^test/');$regexIterator->setFlags(RegexIterator::USE_KEY);if ($regexIterator->getFlags() На: ключів масиву.';} else {    echo 'Фільтрація на основі значень масиву.';}?> `

Результат виконання цього прикладу:

Фільтрування на основі ключів масиву.

### Дивіться також

- [RegexIterator::setFlags()](regexiterator.setflags.md) - Установка
прапорів
