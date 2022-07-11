- [« IntlChar::isupper](intlchar.isupper.md)
- [IntlChar::isUWhiteSpace »](intlchar.isuwhitespace.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ у верхньому регістрі

# IntlChar::isUUppercase

(PHP 7, PHP 8)

IntlChar::isUUppercase — Перевірити, чи символ є символом в
верхньому регістрі

### Опис

public static **IntlChar::isUUppercase**(int\|string `$codepoint`):
?bool

Перевірити, чи є символ у верхньому регістрі.

Те саме, що й
`IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_UPPERCASE)`

> **Примітка**:
>
> Відрізняється від [IntlChar::isupper()](intlchar.isupper.md) та
> повертає **`true`** для більшої кількості символів.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` має властивість "Uppercase",
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isUUppercase("A"));var_dump(IntlChar::isUUppercase("a"));var_dump(IntlChar::isUUppercase("Φ"));var_dump(IntlChar::isUUppercase(" φ"));var_dump(IntlChar::isUUppercase("1"));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::isupper()](intlchar.isupper.md) - Перевірити, чи входить
символ у категорію "Lu" (літера у верхньому регістрі)
- [IntlChar::hasBinaryProperty()](intlchar.hasbinaryproperty.md) -
Перевірити бінарну властивість Unicode для символу
- **`IntlChar::PROPERTY_UPPERCASE`**
