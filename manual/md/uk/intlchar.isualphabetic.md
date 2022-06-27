- [« IntlChar::istitle](intlchar.istitle.md)
- [IntlChar::isULowercase »](intlchar.isulowercase.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи встановлено у символу властивість Alphabetic

# IntlChar::isUAlphabetic

(PHP 7, PHP 8)

IntlChar::isUAlphabetic — Перевірити, чи встановлено символ символу
Alphabetic

### Опис

public static **IntlChar::isUAlphabetic**(int\|string `$codepoint`):
?bool

Перевіряє, чи встановлено у символу властивість Alphabetic.

Те саме, що й
`IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_ALPHABETIC)`

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` має властивість Alphabetic,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isUAlphabetic("A"));var_dump(IntlChar::isUAlphabetic("1"));var_dump(IntlChar::isUAlphabetic("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::isalpha()](intlchar.isalpha.md) - Перевірити, чи є
чи символ літерою
- [IntlChar::hasBinaryProperty()](intlchar.hasbinaryproperty.md) -
Перевірити бінарну властивість Unicode для символу
- **`IntlChar::PROPERTY_ALPHABETIC`**
