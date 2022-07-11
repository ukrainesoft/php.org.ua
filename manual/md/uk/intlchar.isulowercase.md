- [« IntlChar::isUAlphabetic](intlchar.isualphabetic.md)
- [IntlChar::isupper »](intlchar.isupper.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи символ символом в нижньому регістрі

# IntlChar::isULowercase

(PHP 7, PHP 8)

IntlChar::isULowercase — Перевірити, чи символ символу в нижньому
регістрі

### Опис

public static **IntlChar::isULowercase**(int\|string `$codepoint`):
?bool

Перевіряє, чи є символ у нижньому регістрі.

Те саме, що й
`IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_LOWERCASE)`

> **Примітка**:
>
> Відрізняється від [IntlChar::islower()](intlchar.islower.md) та
> повертає **`true`** для більшої кількості символів.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` має властивість "Lowercase",
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isULowercase("A"));var_dump(IntlChar::isULowercase("a"));var_dump(IntlChar::isULowercase("Φ"));var_dump(IntlChar::isULowercase(" φ"));var_dump(IntlChar::isULowercase("1"));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)
bool(true)
bool(false)

### Дивіться також

- [IntlChar::islower()](intlchar.islower.md) - Перевірити в нижньому
чи регістрі символ
- [IntlChar::hasBinaryProperty()](intlchar.hasbinaryproperty.md) -
Перевірити бінарну властивість Unicode для символу
- **`IntlChar::PROPERTY_LOWERCASE`**
