- [« Transliterator::transliterate](transliterator.transliterate.md)
- [IntlBreakIterator::\_\_construct
»](intlbreakiterator.construct.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас IntlBreakIterator

# Клас IntlBreakIterator

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

## Вступ

Ітератор переривання (Break iterator) - це об'єкт ICU, що надає
методи для визначення меж у тексті (наприклад межі слова або
пропозиції). У PHP клас **IntlBreakIterator** служить базовим класом
для всіх типів ітераторів переривання ICU. Є й додаткова
функціональність, модуль intl може розширювати цей клас підходящими
підкласами, такими як
[IntlRuleBasedBreakIterator](class.intlrulebasedbreakiterator.md) або
[IntlCodePointBreakIterator](class.intlcodepointbreakiterator.md).

Цей клас реалізує інтерфейс
[IteratorAggregate](class.iteratoraggregate.md). Traversing an
Ітерація **IntlBreakIterator** породжує невід'ємні цілі значення,
що являють собою успішне знаходження кордонів у тексті, і рівні
позиції знайденого символу UTF-8, відрахованої від початку тексту (позиція
першого символу дорівнює `0`). Ключі повернутих значень представляють
послідовність натуральних чисел `{0, 1, 2, …}`.

## Огляд класів

class **IntlBreakIterator** implements
[IteratorAggregate](class.iteratoraggregate.md) {

/\* Константи \*/

const int `DONE` u003d -1;

const int `WORD_NONE` u003d 0;

const int `WORD_NONE_LIMIT` u003d 100;

const int `WORD_NUMBER` u003d 100;

const int `WORD_NUMBER_LIMIT` u003d 200;

const int `WORD_LETTER` u003d 200;

const int `WORD_LETTER_LIMIT` u003d 300;

const int `WORD_KANA` u003d 300;

const int `WORD_KANA_LIMIT` u003d 400;

const int `WORD_IDEO` u003d 400;

const int `WORD_IDEO_LIMIT` u003d 500;

const int `LINE_SOFT` u003d 0;

const int `LINE_SOFT_LIMIT` u003d 100;

const int `LINE_HARD` u003d 100;

const int `LINE_HARD_LIMIT` u003d 200;

const int `SENTENCE_TERM` u003d 0;

const int `SENTENCE_TERM_LIMIT` u003d 100;

const int `SENTENCE_SEP` u003d 100;

const int `SENTENCE_SEP_LIMIT` u003d 200;

/\* Методи \*/

private [\_\_construct](intlbreakiterator.construct.md)()

public static
[createCharacterInstance](intlbreakiterator.createcharacterinstance.md)(?string
`$locale` u003d **`null`**):
?[IntlBreakIterator](class.intlbreakiterator.md)

public static
[createCodePointInstance](intlbreakiterator.createcodepointinstance.md)():
[IntlCodePointBreakIterator](class.intlcodepointbreakiterator.md)

public static
[createLineInstance](intlbreakiterator.createlineinstance.md)(?string
`$locale` u003d **`null`**):
?[IntlBreakIterator](class.intlbreakiterator.md)

public static
[createSentenceInstance](intlbreakiterator.createsentenceinstance.md)(?string
`$locale` u003d **`null`**):
?[IntlBreakIterator](class.intlbreakiterator.md)

public static
[createTitleInstance](intlbreakiterator.createtitleinstance.md)(?string
`$locale` u003d **`null`**):
?[IntlBreakIterator](class.intlbreakiterator.md)

public static
[createWordInstance](intlbreakiterator.createwordinstance.md)(?string
`$locale` u003d **`null`**):
?[IntlBreakIterator](class.intlbreakiterator.md)

public [current](intlbreakiterator.current.md)(): int

public [first](intlbreakiterator.first.md)(): int

public [following](intlbreakiterator.following.md)(int `$offset`): int

public [getErrorCode](intlbreakiterator.geterrorcode.md)(): int

**intl_get_error_code**(): int

public [getErrorMessage](intlbreakiterator.geterrormessage.md)():
string\|false

**intl_get_error_message**(): string

public [getLocale](intlbreakiterator.getlocale.md)(int `$type`):
string

public
[getPartsIterator](intlbreakiterator.getpartsiterator.md)(string
`$type` u003d IntlPartsIterator::KEY_SEQUENTIAL):
[IntlPartsIterator](class.intlpartsiterator.md)

public [getText](intlbreakiterator.gettext.md)(): ?string

public [isBoundary](intlbreakiterator.isboundary.md)(int `$offset`):
bool

public [last](intlbreakiterator.last.md)(): int

public [next](intlbreakiterator.next.md)(?int `$offset` u003d **`null`**):
int

public [preceding](intlbreakiterator.preceding.md)(int `$offset`): int

public [previous](intlbreakiterator.previous.md)(): int

public [setText](intlbreakiterator.settext.md)(string `$text`): ?bool

}

## Зумовлені константи

**`IntlBreakIterator::DONE`**

**`IntlBreakIterator::WORD_NONE`**

**`IntlBreakIterator::WORD_NONE_LIMIT`**

**`IntlBreakIterator::WORD_NUMBER`**

**`IntlBreakIterator::WORD_NUMBER_LIMIT`**

**`IntlBreakIterator::WORD_LETTER`**

**`IntlBreakIterator::WORD_LETTER_LIMIT`**

**`IntlBreakIterator::WORD_KANA`**

**`IntlBreakIterator::WORD_KANA_LIMIT`**

**`IntlBreakIterator::WORD_IDEO`**

**`IntlBreakIterator::WORD_IDEO_LIMIT`**

**`IntlBreakIterator::LINE_SOFT`**

**`IntlBreakIterator::LINE_SOFT_LIMIT`**

**`IntlBreakIterator::LINE_HARD`**

**`IntlBreakIterator::LINE_HARD_LIMIT`**

**`IntlBreakIterator::SENTENCE_TERM`**

**`IntlBreakIterator::SENTENCE_TERM_LIMIT`**

**`IntlBreakIterator::SENTENCE_SEP`**

**`IntlBreakIterator::SENTENCE_SEP_LIMIT`**

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- |
| 8.0.0 | Клас **IntlBreakIterator** тепер реалізує інтерфейс [IteratorAggregate](class.iteratoraggregate.md). Раніше натомість було реалізовано інтерфейс [Traversable](class.traversable.md). |

## Зміст

- [IntlBreakIterator::\_\_construct](intlbreakiterator.construct.md)
- Закритий конструктор, який забороняє створення екземплярів об'єкта
- [IntlBreakIterator::createCharacterInstance](intlbreakiterator.createcharacterinstance.md)
— Створює ітератор переривання меж комбінування
послідовностей символів
- [IntlBreakIterator::createCodePointInstance](intlbreakiterator.createcodepointinstance.md)
— Створює ітератор переривання меж кодових точок.
- [IntlBreakIterator::createLineInstance](intlbreakiterator.createlineinstance.md)
— створює ітератор переривання для логічно можливих розривів рядків
- [IntlBreakIterator::createSentenceInstance](intlbreakiterator.createsentenceinstance.md)
- Створює ітератор переривання для розривів речень
- [IntlBreakIterator::createTitleInstance](intlbreakiterator.createtitleinstance.md)
- Створює ітератор переривання для розривів заголовків
- [IntlBreakIterator::createWordInstance](intlbreakiterator.createwordinstance.md)
- Створює ітератор переривання для розривів слів
- [IntlBreakIterator::current](intlbreakiterator.current.md) -
Повертає індекс поточної позиції
- [IntlBreakIterator::first](intlbreakiterator.first.md)
Встановлює позицію першого символу в тексті
- [IntlBreakIterator::following](intlbreakiterator.following.md)
Переміщує ітератор до першого кордону після вказаного усунення
- [IntlBreakIterator::getErrorCode](intlbreakiterator.geterrorcode.md)
— Повертає останній код помилки об'єкту
- [IntlBreakIterator::getErrorMessage](intlbreakiterator.geterrormessage.md)
— Повертає останнє повідомлення про помилку об'єкту
- [IntlBreakIterator::getLocale](intlbreakiterator.getlocale.md) -
Повертає локаль, пов'язану з об'єктом
- [IntlBreakIterator::getPartsIterator](intlbreakiterator.getpartsiterator.md)
— створює ітератор для переміщення фрагментів між кордонами.
- [IntlBreakIterator::getText](intlbreakiterator.gettext.md) -
Повертає сканований текст
- [IntlBreakIterator::isBoundary](intlbreakiterator.isboundary.md)
Повідомляє, чи є усунення зміщенням кордону
- [IntlBreakIterator::last](intlbreakiterator.last.md)
Встановлює позицію ітератора до індексу за останнім символом
- [IntlBreakIterator::next](intlbreakiterator.next.md) — Переміщує
ітератор до наступного кордону
- [IntlBreakIterator::preceding](intlbreakiterator.preceding.md)
Встановлює позицію ітератора до першого кордону перед усуненням
- [IntlBreakIterator::previous](intlbreakiterator.previous.md) -
Встановлює позицію ітератора на кордоні безпосередньо перед
поточною
- [IntlBreakIterator::setText](intlbreakiterator.settext.md) -
Встановлює сканований текст
