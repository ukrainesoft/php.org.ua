- [«
IntlCodePointBreakIterator::getLastCodePoint](intlcodepointbreakiterator.getlastcodepoint.md)
- [IntlDatePatternGenerator::create
»](intldatepatterngenerator.create.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас IntlDatePatternGenerator

# Клас IntlDatePatternGenerator

(PHP 8 \>u003d 8.1.0)

## Вступ

Створює локалізовані рядки шаблонів формату дати та/або часу,
придатні для використання в
[IntlDateFormatter](class.intldateformatter.md).

## Огляд класів

class **IntlDatePatternGenerator** {

/\* Методи \*/

public [\_\_construct](intldatepatterngenerator.create.md)(string
`$locale` u003d **`null`**)

public static [create](intldatepatterngenerator.create.md)(string
`$locale` u003d **`null`**):
?[IntlDatePatternGenerator](class.intldatepatterngenerator.md)

public
[getBestPattern](intldatepatterngenerator.getbestpattern.md)(string
`$skeleton`): string\|false

}

## Зміст

- [IntlDatePatternGenerator::create](intldatepatterngenerator.create.md)
— Створює новий екземпляр IntlDatePatternGenerator
- [IntlDatePatternGenerator::getBestPattern](intldatepatterngenerator.getbestpattern.md)
— Визначає найбільш вдалий формат дати/часу
