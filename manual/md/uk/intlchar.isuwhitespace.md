- [« IntlChar::isUUppercase](intlchar.isuuppercase.md)
- [IntlChar::isWhitespace »](intlchar.iswhitespace.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи має символ властивість White_Space (пробіл)

# IntlChar::isUWhiteSpace

(PHP 7, PHP 8)

IntlChar::isUWhiteSpace — Перевірити, чи має символ властивість
White_Space (пробіловий символ)

### Опис

public static **IntlChar::isUWhiteSpace**(int\|string `$codepoint`):
?bool

Перевіряє, чи має символ властивість White_Space (пробіл).

Те саме, що й
`IntlChar::hasBinaryProperty($codepoint, IntlChar::PROPERTY_WHITE_SPACE)`

> **Примітка**:
>
> Відрізняється від [IntlChar::isspace()](intlchar.isspace.md) та
> [IntlChar::isWhitespace()](intlchar.iswhitespace.md).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` має властивість "White_Space",
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isUWhiteSpace("A"));var_dump(IntlChar::isUWhiteSpace(" "));var_dump(IntlChar::isUWhiteSpace("
"));var_dump(IntlChar::isUWhiteSpace(" "));var_dump(IntlChar::isUWhiteSpace("\u{00A0}"));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(true)
bool(true)
bool(true)

### Дивіться також

- [IntlChar::isspace()](intlchar.isspace.md) - Перевіряє, чи є
чи символ пробельним
- [IntlChar::isWhitespace()](intlchar.iswhitespace.md) - Перевірити,
чи є символ пробельним з точки зору ICU
- [IntlChar::isJavaSpaceChar()](intlchar.isjavaspacechar.md) -
Перевірити, чи є символ пробельним з точки зору Java
- [IntlChar::hasBinaryProperty()](intlchar.hasbinaryproperty.md) -
Перевірити бінарну властивість Unicode для символу
- **`IntlChar::PROPERTY_WHITE_SPACE`**
