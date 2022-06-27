- [« RegexIterator::getRegex](regexiterator.getregex.md)
- [RegexIterator::setMode »](regexiterator.setmode.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Установка прапорів

# RegexIterator::setFlags

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::setFlags — Установка прапорів

### Опис

public **RegexIterator::setFlags**(int `$flags`): void

Задає прапорці настроювання.

### Список параметрів

`flags`
Прапори, бітова маска класу констант.

Нижче наведені доступні прапори. Сенс та значення прапорів описані в
розділі [передбачених
констант](class.regexiterator.md#regexiterator.constants).

| значення | константа
|----------|-------------------------------------- ----------------------------------------------|
| 1 | [RegexIterator::USE_KEY](class.regexiterator.md#regexiterator.constants.use-key) |

**Прапори [RegexIterator](class.regexiterator.md)**

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::setFlags()****

Створює новий об'єкт-ітератор, який відбирає елементи, ключі яких
починаються зі слова ''test''.

` <?php$test u003d array ('str1' u003d> 'test 1', 'teststr2' u003d> 'another test', 'str3' u003d> 'test 123');$arrayIterator u003d new Ar $regexIteratoru003du003dnewRegexIterator($arrayIterator, '/^test/');$regexIterator->setFlags(RegexIterator::USE_KEY);foreach ($regexIterator as $key u003d> $ ' u003d> ' . $value . "
";}?> `

Результат виконання цього прикладу:

teststr2 u003d> інший test

### Дивіться також

- [RegexIterator::getFlags()](regexiterator.getflags.md) - Отримання
прапорів налаштування
