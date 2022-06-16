- [« RegexIterator::accept](regexiterator.accept.md)
- [RegexIterator::getFlags »](regexiterator.getflags.md)

- [PHP Manual](index.md)
- [RegexIterator](class.regexiterator.md)
- Конструктор класу RegexIterator

# RegexIterator::\_\_construct

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RegexIterator::\_\_construct - Конструктор класу RegexIterator

### Опис

public **RegexIterator::\_\_construct**(
[Iterator](class.iterator.md) `$iterator`,
string `$pattern`,
int `$mode` u003d RegexIterator::MATCH,
int `$flags` u003d 0,
int `$pregFlags` u003d 0
)

Створює новий об'єкт класу [RegexIterator](class.regexiterator.md),
який фільтрує елементи ітератора [Iterator](class.iterator.md)
ґрунтуючись на регулярному вираженні.

### Список параметрів

`iterator`
Ітератор, до якого потрібно застосувати фільтр.

`pattern`
Регулярний вираз, на основі якого проводиться відбір елементів.

`mode`
Режим роботи. Список можливих режимів можна переглянути в описі
методом [RegexIterator::setMode()](regexiterator.setmode.md).

`flags`
Спеціальні прапори. Список можливих прапорів наведено в описі методу
[RegexIterator::setFlags()](regexiterator.setflags.md).

`pregFlags`
Прапори регулярного вираження. Список можливих прапорів залежить від режиму
роботи:

| режим роботи прапори |
|------------------------------|------------------ ------------------------------------------|
| `RegexIterator::ALL_MATCHES` | Дивіться [preg_match_all()](function.preg-match-all.md). |
| `RegexIterator::GET_MATCH` | Дивіться [preg_match()](function.preg-match.md). |
| `RegexIterator::MATCH` | Дивіться [preg_match()](function.preg-match.md). |
| `RegexIterator::REPLACE` | ні |
| `RegexIterator::SPLIT` | Дивіться [preg_split()](function.preg-split.md). |

**[RegexIterator](class.regexiterator.md) preg_flags**

### Помилки

Викидає виняток
[InvalidArgumentException](class.invalidargumentexception.md), якщо
pattern заданий некоректно.

### Приклади

**Приклад #1 Приклад використання **RegexIterator::\_\_construct()****

Створює новий об'єкт RegexIterator, який відбирає рядки,
що починаються зі слова 'test'.

` <?php$arrayIterator u003d new ArrayIterator(array('test 1', 'another test', 'test 123'));$regexIteratoru003du003dnewRegexIterator($arrayIterator, '/$e as $value) {   echo $value . "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

test 1
test 123

### Дивіться також

- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [preg_match_all()](function.preg-match-all.md) - Виконує
глобальний пошук шаблону в рядку
- [preg_replace()](function.preg-replace.md) - Пошук та
заміну за регулярним виразом
- [preg_split()](function.preg-split.md) - Розбиває рядок по
регулярному виразу
