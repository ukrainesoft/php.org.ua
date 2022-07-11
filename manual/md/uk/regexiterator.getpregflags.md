- [« RegexIterator::getMode](regexiterator.getmode.md)
- [RegexIterator::getRegex »](regexiterator.getregex.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Повертає прапори регулярного вираження

# RegexIterator::getPregFlags

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::getPregFlags — Повертає прапори регулярного виразу

### Опис

public **RegexIterator::getPregFlags**(): int

Повертає прапори регулярного вираження. Список можливих прапорів наведено
в описі методу
[RegexIterator::\_\_construct()](regexiterator.construct.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає бітову маску прапорів регулярного вираження.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::getPregFlags()****

` <?php$test u003d array ('str1' u003d> 'test 1', 'teststr2' u003d> 'another test', 'str3' u003d> 'test 123');$arrayIterator u003d new Ar $regexIterator u003d new RegexIterator($arrayIterator, '/\s/', RegexIterator::SPLIT);$regexIterator->setPregFlags(PREG_SPLIT_NO_EMPTY | PREG_SPLIT_OFFSET_CAPTURE);if ($regexIterator->getPregFlags() & PREG_SPLIT_NO_EMPTY) {    echo 'Не принимать на увагу порожні ділянки';} else {   echo ''Розглядати пусті ділянки';}?> `

Результат виконання цього прикладу:

Не брати до уваги порожні ділянки

### Дивіться також

- [RegexIterator::setPregFlags()](regexiterator.setpregflags.md) -
Завдання прапорів регулярного вираження
