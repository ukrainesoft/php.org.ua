- [« IntlChar::isalnum](intlchar.isalnum.md)
- [IntlChar::isbase »](intlchar.isbase.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ літерою

# IntlChar::isalpha

(PHP 7, PHP 8)

IntlChar::isalpha — Перевірити, чи є символ літерою

### Опис

public static **IntlChar::isalpha**(int\|string `$codepoint`): ?bool

Перевіряє, чи є символ літерою. **`true`** для категорії "L"
(букви).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є буквою, **`false`** -
якщо ні. У разі виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isalpha("A"));var_dump(IntlChar::isalpha("1"));var_dump(IntlChar::isalpha("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::isalnum()](intlchar.isalnum.md) - Перевірити, чи є
чи символ літерою чи цифрою
- [IntlChar::isdigit()](intlchar.isdigit.md) - Перевірити, чи є
чи символ цифрою
