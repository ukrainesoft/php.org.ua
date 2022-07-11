- [« RecursiveTreeIterator::valid](recursivetreeiterator.valid.md)
- [RegexIterator::accept »](regexiterator.accept.md)

- [PHP Manual](index.md)
- [Ітератори](spl.iterators.md)
- Клас RegexIterator

# Клас RegexIterator

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

## Вступ

Цей ітератор може бути використаний для фільтрації іншого ітератора
основі регулярних виразів.

## Огляд класів

class **RegexIterator** extends
[FilterIterator](class.filteriterator.md) {

/\* Константи \*/

const int `MATCH` u003d 0;

const int `GET_MATCH` u003d 1;

const int `ALL_MATCHES` u003d 2;

const int `SPLIT` u003d 3;

const int `REPLACE` u003d 4;

const int `USE_KEY` u003d 1;

/\* Властивості \*/

public ?string `$replacement` u003d null;

/\* Методи \*/

public [\_\_construct](regexiterator.construct.md)(
[Iterator](class.iterator.md) `$iterator`,
string `$pattern`,
int `$mode` u003d RegexIterator::MATCH,
int `$flags` u003d 0,
int `$pregFlags` u003d 0
)

public [accept](regexiterator.accept.md)(): bool

public [getFlags](regexiterator.getflags.md)(): int

public [getMode](regexiterator.getmode.md)(): int

public [getPregFlags](regexiterator.getpregflags.md)(): int

public [getRegex](regexiterator.getregex.md)(): string

public [setFlags](regexiterator.setflags.md)(int `$flags`): void

public [setMode](regexiterator.setmode.md)(int `$mode`): void

public [setPregFlags](regexiterator.setpregflags.md)(int
`$pregFlags`): void

/\* Наслідувані методи \*/

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

## Зумовлені константи

## Режими роботи RegexIterator

**`RegexIterator::ALL_MATCHES`**
Повертати всі збіги для поточного запису (дивіться
[preg_match_all()](function.preg-match-all.md)).

**`RegexIterator::GET_MATCH`**
Повертати перший збіг для поточного запису (дивіться
[preg_match()](function.preg-match.md)).

**`RegexIterator::MATCH`**
Тільки виконання порівняння (фільтра) для поточного запису (дивіться
[preg_match()](function.preg-match.md)).

**`RegexIterator::REPLACE`**
Замінити поточний запис (дивіться
[preg_replace()](function.preg-replace.md); Повністю поки що
реалізовано)

**`RegexIterator::SPLIT`**
Повертати розділені значення для поточного запису (див.
[preg_split()](function.preg-split.md)).

## Прапори RegexIterator

**`RegexIterator::USE_KEY`**
Спеціальний прапорець: Порівнювати ключ запису замість значення запису.

## Властивості

`replacement`

## Зміст

- [RegexIterator::accept](regexiterator.accept.md) — Перевірка
відповідності регулярному виразу
- [RegexIterator::\_\_construct](regexiterator.construct.md) -
Конструктор класу RegexIterator
- [RegexIterator::getFlags](regexiterator.getflags.md) — Отримання
прапорів налаштування
- [RegexIterator::getMode](regexiterator.getmode.md) — Повертає
режим роботи
- [RegexIterator::getPregFlags](regexiterator.getpregflags.md) -
Повертає прапори регулярного вираження
- [RegexIterator::getRegex](regexiterator.getregex.md) — Повертає
рядок поточного регулярного виразу
- [RegexIterator::setFlags](regexiterator.setflags.md) — Установка
прапорів
- [RegexIterator::setMode](regexiterator.setmode.md) — Встановлення
режиму роботи
- [RegexIterator::setPregFlags](regexiterator.setpregflags.md) -
Завдання прапорів регулярного вираження
