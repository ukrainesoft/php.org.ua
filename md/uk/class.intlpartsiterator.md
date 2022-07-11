- [«
IntlDatePatternGenerator::getBestPattern](intldatepatterngenerator.getbestpattern.md)
- [IntlPartsIterator::getBreakIterator
»](intlpartsiterator.getbreakiterator.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас IntlPartsIterator

# Клас IntlPartsIterator

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

## Вступ

Об'єкти цього класу можна отримати з об'єктів
[IntlBreakIterator](class.intlbreakiterator.md). Поки що ітератор
переривання надає послідовність обмежувачів, можна
отримати **IntlPartsIterator** для зручності отримання текстових
фрагментів між двома обмежувачами.

Ключі можуть являти собою усунення від лівого або правого
обмежувача або можуть бути просто послідовністю натуральних
чисел. Дивіться
[IntlBreakIterator::getPartsIterator()](intlbreakiterator.getpartsiterator.md).

## Огляд класів

class **IntlPartsIterator** extends
[IntlIterator](class.intliterator.md) {

/\* Constants \*/

const int `KEY_SEQUENTIAL` u003d 0;

const int `KEY_LEFT` u003d 1;

const int `KEY_RIGHT` u003d 2;

/\* Методи \*/

public [getBreakIterator](intlpartsiterator.getbreakiterator.md)():
[IntlBreakIterator](class.intlbreakiterator.md)

/\* Наслідувані методи \*/

public [IntlIterator::current](intliterator.current.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [IntlIterator::key](intliterator.key.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [IntlIterator::next](intliterator.next.md)(): void

public [IntlIterator::rewind](intliterator.rewind.md)(): void

public [IntlIterator::valid](intliterator.valid.md)(): bool

}

## Зумовлені константи

**`IntlPartsIterator::KEY_SEQUENTIAL`**

**`IntlPartsIterator::KEY_LEFT`**

**`IntlPartsIterator::KEY_RIGHT`**

## Зміст

- [IntlPartsIterator::getBreakIterator](intlpartsiterator.getbreakiterator.md)
— Отримати IntlBreakIterator, зберігаючи ітератор цієї частини
