- [« IntlChar::ispunct](intlchar.ispunct.md)
- [IntlChar::istitle »](intlchar.istitle.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевіряє, чи є символ пробельним

# IntlChar::isspace

(PHP 7, PHP 8)

IntlChar::isspace — Перевіряє, чи є символ пробельним

### Опис

public static **IntlChar::isspace**(int\|string `$codepoint`): ?bool

Перевіряє, чи є символ пробіл.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є пробельним символом,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isspace("A"));var_dump(IntlChar::isspace(" "));var_dump(IntlChar::isspace("
"));var_dump(IntlChar::isspace(" "));var_dump(IntlChar::isspace("\u{00A0}"));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(true)
bool(true)
bool(true)

### Дивіться також

- [IntlChar::isJavaSpaceChar()](intlchar.isjavaspacechar.md) -
Перевірити, чи є символ пробельним з точки зору Java
- [IntlChar::isWhitespace()](intlchar.iswhitespace.md) - Перевірити,
чи є символ пробельним з точки зору ICU
- [IntlChar::isUWhiteSpace()](intlchar.isuwhitespace.md) -
Перевірити, чи має символ властивість White_Space (пробіл)
