- [« IntlChar::isprint](intlchar.isprint.md)
- [IntlChar::isspace »](intlchar.isspace.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевіряє, чи є символом пунктуації

# IntlChar::ispunct

(PHP 7, PHP 8)

IntlChar::ispunct — Перевіряє, чи є символом пунктуації

### Опис

public static **IntlChar::ispunct**(int\|string `$codepoint`): ?bool

Перевіряє, чи є символом пунктуації.

**`true`** для символів із категорією "P" (пунктуація).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є символом пунктуації,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::ispunct("."));var_dump(IntlChar::ispunct(","));var_dump(IntlChar::ispunct("
"));var_dump(IntlChar::ispunct("$"));

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)
bool(false)
