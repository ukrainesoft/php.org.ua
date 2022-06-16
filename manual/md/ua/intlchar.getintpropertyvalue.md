- [«
IntlChar::getIntPropertyMinValue](intlchar.getintpropertyminvalue.md)
- [IntlChar::getNumericValue »](intlchar.getnumericvalue.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати значення властивості Unicode для символу

# IntlChar::getIntPropertyValue

(PHP 7, PHP 8)

IntlChar::getIntPropertyValue — Отримати значення властивості Unicode для
символу

### Опис

public static **IntlChar::getIntPropertyValue**(int\|string
`$codepoint`, int `$property`): ?int

Отримує значення нумерованої або цілісної властивості Unicode для
символ. Також повертаються бінарне та шаблонне значення властивості.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

`property`
Властивість Unicode для відображення (Дивись константи
`IntlChar::PROPERTY_*`).

### Значення, що повертаються

Повертає чисельне значення для зазначеної властивості, або для
перелічуваних властивостей, що відповідає чисельному значенню константу
відповідно до значення перерахованого типу властивості. В разі
виникнення помилки повертає **`null`**.

Повертає `0` або `1` (для **`false`**/**`true`**) для бінарних властивостей
Unicode.

Повертає бітовий шаблон шаблонних властивостей.

Повертає `0` якщо `property` не входить у допустимий діапазон або якщо
версія Unicode не містить даних для цієї властивості.

### Приклади

**Приклад #1 Тестування різних властивостей**

` <?phpvar_dump(IntlChar::getIntPropertyValue("A", IntlChar::PROPERTY_ALPHABETIC) u003du003du003d 1);var_dump(IntlChar::getIntPropertyValue("[", IntlChar::PROPERTY_  ::getIntPropertyValue("Φ", IntlChar::PROPERTY_BLOCK) u003du003du003d IntlChar::BLOCK_CODE_GREEK);?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(true)

### Дивіться також

- [IntlChar::hasBinaryProperty()](intlchar.hasbinaryproperty.md) -
Перевірити бінарну властивість Unicode для символу
- [IntlChar::getIntPropertyMinValue()](intlchar.getintpropertyminvalue.md) -
Отримати мінімальне значення для якості Unicode
- [IntlChar::getIntPropertyMaxValue()](intlchar.getintpropertymaxvalue.md) -
Отримати мінімальне значення для якості Unicode
- [IntlChar::getUnicodeVersion()](intlchar.getunicodeversion.md) -
Отримати версію Unicode
