- [«
RecursiveIteratorIterator::valid](recursiveiteratoriterator.valid.md)
- [RecursiveRegexIterator::\_\_construct
»](recursiveregexiterator.construct.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RecursiveRegexIterator

# Клас RecursiveRegexIterator

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

## Вступ

Цей рекурсивний ітератор може фільтрувати інший рекурсивний ітератор.
за допомогою регулярних виразів.

## Огляд класів

class **RecursiveRegexIterator** extends
[RegexIterator](class.regexiterator.md) implements
[RecursiveIterator](class.recursiveiterator.md) {

/\* Успадковані константи \*/

const int `MATCH` u003d 0;

const int `GET_MATCH` u003d 1;

const int `ALL_MATCHES` u003d 2;

const int `SPLIT` u003d 3;

const int `REPLACE` u003d 4;

const int `USE_KEY` u003d 1;

/\* Наслідувані властивості \*/

public ?string `$replacement` u003d null;

/\* Методи \*/

public [\_\_construct](recursiveregexiterator.construct.md)(
[RecursiveIterator](class.recursiveiterator.md) `$iterator`,
string `$pattern`,
int `$mode` u003d RecursiveRegexIterator::MATCH,
int `$flags` u003d 0,
int `$pregFlags` u003d 0
)

public [getChildren](recursiveregexiterator.getchildren.md)():
[RecursiveRegexIterator](class.recursiveregexiterator.md)

public [hasChildren](recursiveregexiterator.haschildren.md)(): bool

/\* Наслідувані методи \*/

public [RegexIterator::accept](regexiterator.accept.md)(): bool

public [RegexIterator::getFlags](regexiterator.getflags.md)(): int

public [RegexIterator::getMode](regexiterator.getmode.md)(): int

public [RegexIterator::getPregFlags](regexiterator.getpregflags.md)():
int

public [RegexIterator::getRegex](regexiterator.getregex.md)(): string

public [RegexIterator::setFlags](regexiterator.setflags.md)(int
`$flags`): void

public [RegexIterator::setMode](regexiterator.setmode.md)(int
`$mode`): void

public
[RegexIterator::setPregFlags](regexiterator.setpregflags.md)(int
`$pregFlags`): void

public [FilterIterator::accept](filteriterator.accept.md)(): bool

public [FilterIterator::current](filteriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[FilterIterator::getInnerIterator](filteriterator.getinneriterator.md)():
[Iterator](class.iterator.md)

public [FilterIterator::key](filteriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [FilterIterator::next](filteriterator.next.md)(): void

public [FilterIterator::rewind](filteriterator.rewind.md)(): void

public [FilterIterator::valid](filteriterator.valid.md)(): bool

public [IteratorIterator::current](iteratoriterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[IteratorIterator::getInnerIterator](iteratoriterator.getinneriterator.md)():
?[Iterator](class.iterator.md)

public [IteratorIterator::key](iteratoriterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [IteratorIterator::next](iteratoriterator.next.md)(): void

public [IteratorIterator::rewind](iteratoriterator.rewind.md)(): void

public [IteratorIterator::valid](iteratoriterator.valid.md)(): bool

}

## Зміст

- [RecursiveRegexIterator::\_\_construct](recursiveregexiterator.construct.md)
- Конструктор класу RecursiveRegexIterator
- [RecursiveRegexIterator::getChildren](recursiveregexiterator.getchildren.md)
— Повертає ітератор до поточного елемента
- [RecursiveRegexIterator::hasChildren](recursiveregexiterator.haschildren.md)
— Визначає, чи можлива навігація вмісту поточного елемента
