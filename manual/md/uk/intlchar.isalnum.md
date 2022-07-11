- [« IntlChar::hasBinaryProperty](intlchar.hasbinaryproperty.md)
- [IntlChar::isalpha »](intlchar.isalpha.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ літерою чи цифрою

# IntlChar::isalnum

(PHP 7, PHP 8)

IntlChar::isalnum — Перевірити, чи є символ літерою чи цифрою

### Опис

public static **IntlChar::isalnum**(int\|string `$codepoint`): ?bool

Перевіряє, чи символ літерою чи цифрою. **`true`** категорій
"L" (літери) та "Nd" (десяткові цифри).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є буквою або цифрою,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isalnum("A"));var_dump(IntlChar::isalnum("1"));var_dump(IntlChar::isalnum("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)

### Дивіться також

- [IntlChar::isalpha()](intlchar.isalpha.md) - Перевірити, чи є
чи символ літерою
- [IntlChar::isdigit()](intlchar.isdigit.md) - Перевірити, чи є
чи символ цифрою
