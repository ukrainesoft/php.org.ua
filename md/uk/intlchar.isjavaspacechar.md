- [« IntlChar::isJavaIDStart](intlchar.isjavaidstart.md)
- [IntlChar::islower »](intlchar.islower.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ пробельним з точки зору Java

# IntlChar::isJavaSpaceChar

(PHP 7, PHP 8)

IntlChar::isJavaSpaceChar — Перевірити, чи є символ пробельним з
точки зору мови Java

### Опис

public static **IntlChar::isJavaSpaceChar**(int\|string `$codepoint`):
?bool

Перевіряє, чи є символ пробельним з точки зору Java.

**`true`** для категорії "Z" (розділювачі), не включаючи контролюючі
символи (наприклад, TAB або Переклад Рядки).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є пробельним у Java,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isJavaSpaceChar("A"));var_dump(IntlChar::isJavaSpaceChar(" "));var_dump(IntlChar::isJavaSpaceChar("
"));var_dump(IntlChar::isJavaSpaceChar(" "));var_dump(IntlChar::isJavaSpaceChar("\u{00A0}"));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)
bool(false)
bool(true)

### Дивіться також

- [IntlChar::isspace()](intlchar.isspace.md) - Перевіряє, чи є
чи символ пробельним
- [IntlChar::isWhitespace()](intlchar.iswhitespace.md) - Перевірити,
чи є символ пробельним з точки зору ICU
- [IntlChar::isUWhiteSpace()](intlchar.isuwhitespace.md) -
Перевірити, чи має символ властивість White_Space (пробіл)
