- [« IntlDatePatternGenerator](class.intldatepatterngenerator.md)
- [IntlDatePatternGenerator::getBestPattern
»](intldatepatterngenerator.getbestpattern.md)

- [PHP Manual](index.md)
- [IntlDatePatternGenerator](class.intldatepatterngenerator.md)
- Створює новий екземпляр IntlDatePatternGenerator

# IntlDatePatternGenerator::create

# IntlDatePatternGenerator::\_\_construct

(PHP 8 \>u003d 8.1.0)

IntlDatePatternGenerator::create --
IntlDatePatternGenerator::\_\_construct — Створює новий екземпляр
IntlDatePatternGenerator

### Опис

public static **IntlDatePatternGenerator::create**(string `$locale` u003d
**`null`**):
?[IntlDatePatternGenerator](class.intldatepatterngenerator.md)

public **IntlDatePatternGenerator::\_\_construct**(string `$locale` u003d
**`null`**)

Створює новий екземпляр
[IntlDatePatternGenerator](class.intldatepatterngenerator.md).

### Список параметрів

`locale`
Локаль. Якщо передано значення **`null`**, використовується ini-параметр
[intl.default_locale](intl.configuration.md#ini.intl.default-locale).

### Значення, що повертаються

Повертає екземпляр
[IntlDatePatternGenerator](class.intldatepatterngenerator.md) у разі
успішного виконання або **`null`** у разі виникнення помилки.
