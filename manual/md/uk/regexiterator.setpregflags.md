- [« RegexIterator::setMode](regexiterator.setmode.md)
- [Інтерфейси »](spl.interfaces.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Завдання прапорів регулярного вираження

# RegexIterator::setPregFlags

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::setPregFlags — Завдання прапорів регулярного виразу

### Опис

public **RegexIterator::setPregFlags**(int `$pregFlags`): void

Встановлює прапори регулярного вираження.

### Список параметрів

`pregFlags`
Прапори налаштування регулярного вираження. Список можливих прапорів наведено
в описі методу
[RegexIterator::\_\_construct()](regexiterator.construct.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::setPregFlags()****

Створює новий об'єкт RegexIterator, що відбирає елементи масиву, ключі
яких починаються зі слова 'test'.

` <?php$test u003d array ('test 1', 'another test', 'test 123');$arrayIterator u003d new ArrayIterator($test);$regexIterator u003d new RegexItera^ ^ , RegexIterator::GET_MATCH);$regexIterator->setPregFlags(PREG_OFFSET_CAPTURE);foreach ($regexIterator as $key u003d> $value) {    var_dump($value);

Результатом виконання цього прикладу буде щось подібне:

array(1) {
[0]u003d>
array(2) {
[0]u003d>
string(4) "test"
[1]u003d>
int(0)
}
}
array(1) {
[0]u003d>
array(2) {
[0]u003d>
string(4) "test"
[1]u003d>
int(0)
}
}

### Дивіться також

- [RegexIterator::getPregFlags()](regexiterator.getpregflags.md) -
Повертає прапори регулярного вираження
