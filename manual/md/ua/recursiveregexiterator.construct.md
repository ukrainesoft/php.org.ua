- [«RecursiveRegexIterator](class.recursiveregexiterator.md)
- [RecursiveRegexIterator::getChildren
»](recursiveregexiterator.getchildren.md)

- [PHP Manual](index.md)
- [RecursiveRegexIterator](class.recursiveregexiterator.md)
- Конструктор класу RecursiveRegexIterator

# RecursiveRegexIterator::\_\_construct

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

RecursiveRegexIterator::\_\_construct — Конструктор класу
RecursiveRegexIterator

### Опис

public **RecursiveRegexIterator::\_\_construct**(
[RecursiveIterator](class.recursiveiterator.md) `$iterator`,
string `$pattern`,
int `$mode` u003d RecursiveRegexIterator::MATCH,
int `$flags` u003d 0,
int `$pregFlags` u003d 0
)

Створює новий об'єкт-ітератор регулярного вираження.

### Список параметрів

`iterator`
Рекурсивний ітератор, до якого потрібно застосувати фільтр на основі
регулярного вираження.

`pattern`
Регулярний вираз.

`mode`
Режим роботи, список доступних режимів наведено в описі методу
[RegexIterator::setMode()](regexiterator.setmode.md).

`flags`
Спеціальні прапори. Список доступних прапорів наведено в описі методу
[RegexIterator::setFlags()](regexiterator.setflags.md).

`pregFlags`
Прапори регулярного вираження. Список прапорів залежить від режиму роботи:

| режим роботи прапори |
|---------------------------------------|--------- -------------------------------------------------- -|
| `RecursiveRegexIterator::ALL_MATCHES` | Дивіться [preg_match_all()](function.preg-match-all.md). |
| `RecursiveRegexIterator::GET_MATCH` | Дивіться [preg_match()](function.preg-match.md). |
| `RecursiveRegexIterator::MATCH` | Дивіться [preg_match()](function.preg-match.md). |
| `RecursiveRegexIterator::REPLACE` | ні |
| `RecursiveRegexIterator::SPLIT` | Дивіться [preg_split()](function.preg-split.md). |

**[RegexIterator](class.regexiterator.md) preg_flags**

### Приклади

**Приклад #1 Приклад використання
**RecursiveRegexIterator::\_\_construct()****

Створює новий об'єкт-ітератор RegexIterator, який вибирає все
рядки, що починаються зі слова 'test'.

` <?php$rArrayIterator u003d new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));$rRegexIterator u003d new RecursiveRegexItera   ::ALL_MATCHES);foreach ($rRegexIterator as $key1 u003d> $value1) {    if ($rRegexIterator->hasChildren()) {        // выведем все дочерние элементы        echo "Дочерние элементы: "; foreach ($rRegexIterator->getChildren() as $key u003d> $value) {            echo $value . " "; }        echo "
";    }}else {        echo "Немає|дочірніх елементів
";    }}?> `

Результатом виконання цього прикладу буде щось подібне:

Немає дочірніх елементів
Дочірні елементи: test4 test5

### Дивіться також

- [preg_match()](function.preg-match.md) - Виконує перевірку на
відповідність регулярному виразу
- [preg_match_all()](function.preg-match-all.md) - Виконує
глобальний пошук шаблону в рядку
- [preg_replace()](function.preg-replace.md) - Пошук та
заміну за регулярним виразом
- [preg_split()](function.preg-split.md) - Розбиває рядок по
регулярному виразу
