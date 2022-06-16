- [« RegexIterator::getFlags](regexiterator.getflags.md)
- [RegexIterator::getPregFlags »](regexiterator.getpregflags.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Повертає режим роботи

# RegexIterator::getMode

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::getMode — Повертає режим роботи

### Опис

public **RegexIterator::getMode**(): int

Повертає режим роботи. Список можливих режимів наведено на сторінці
[RegexIterator::setMode()](regexiterator.setmode.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає режим роботи.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::getMode()****

` <?php$test u003d array ('str1' u003d> 'test 1', 'teststr2' u003d> 'another test', 'str3' u003d> 'test 123');$arrayIterator u003d new Ar $regexIteratoru003du003d new RegexIterator($arrayIterator, '/^[a-z]+/', RegexIterator::GET_MATCH);$mode u003d $regexIterator->getMode();if ($mode & Regex           соответствий для каждого элемента.';} elseif ($mode & RegexIterator::ALL_MATCHES) {    echo 'Получение всех соответствий для каждого элемента.';} elseif ($mode & RegexIterator::MATCH) {    echo 'Получение элементов, прошедших отбор. ';} elseif ($mode & RegexIterator::SPLIT) {    echo 'Одержання окремих частей кожного елемента.';}?> `

Результат виконання цього прикладу:

Перевірка відповідності кожного елемента.

### Дивіться також

- [RegexIterator::setMode()](regexiterator.setmode.md) - Установка
режиму роботи
