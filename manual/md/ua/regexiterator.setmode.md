- [« RegexIterator::setFlags](regexiterator.setflags.md)
- [RegexIterator::setPregFlags »](regexiterator.setpregflags.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Встановлення режиму роботи

# RegexIterator::setMode

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::setMode — Встановлення режиму роботи

### Опис

public **RegexIterator::setMode**(int `$mode`): void

Визначає режим роботи.

### Список параметрів

`mode`
Режим роботи.

Нижче наведено можливі режими. Сенс і значення режимів описані в
розділі [передбачених
констант](class.regexiterator.md#regexiterator.constants).

| значення | константа
|----------|-------------------------------------- -------------------------------------------------- ----|
| 0 | [RegexIterator::MATCH](class.regexiterator.md#regexiterator.constants.match) |
| 1 | [RegexIterator::GET_MATCH](class.regexiterator.md#regexiterator.constants.get-match) |
| 2 | [RegexIterator::ALL_MATCHES](class.regexiterator.md#regexiterator.constants.all-matches) |
| 3 | [RegexIterator::SPLIT](class.regexiterator.md#regexiterator.constants.split) |
| 4 | [RegexIterator::REPLACE](class.regexiterator.md#regexiterator.constants.replace) |

**Режими роботи [RegexIterator](class.regexiterator.md)**

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::setMode()****

` <?php$test u003d array ('str1' u003d> 'test 1', 'test str2' u003d> 'another test', 'str3' u003d> 'test 123');$arrayIterator u003dray ;// Відбір всіх елементів, починаються з слова 'test ', за яким ідуть числа$regexIterator u003d new RegexIterator($arrayIterator, і/ | ->setMode(RegexIterator::GET_MATCH);foreach ($regexIterator as $key u003d> $value) {     // виведення супалих чисел    echo $key . ' u003d> ' . $ value [1]. PHP_EOL;}?> `

Результатом виконання цього прикладу буде щось подібне:

str1 u003d> 1
str3 u003d> 123

### Дивіться також

- [RegexIterator::getMode()](regexiterator.getmode.md) - Повертає
режим роботи
