- [« IntlChar::isdefined](intlchar.isdefined.md)
- [IntlChar::isgraph »](intlchar.isgraph.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ цифрою

# IntlChar::isdigit

(PHP 7, PHP 8)

IntlChar::isdigit — Перевірити, чи символ є цифрою

### Опис

public static **IntlChar::isdigit**(int\|string `$codepoint`): ?bool

Перевіряє, чи є цифрою символ.

**`true`** для символів категорії "Nd" (десяткові цифри). Починаючи з
Unicode 4, функція є аналогом тестування на Numeric_Type для
Decimal.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є цифрою, **`false`** -
якщо ні. У разі виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isdigit("A"));var_dump(IntlChar::isdigit("1"));var_dump(IntlChar::isdigit(" "));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)

### Дивіться також

- [IntlChar::isalpha()](intlchar.isalpha.md) - Перевірити, чи є
чи символ літерою
- [IntlChar::isalnum()](intlchar.isalnum.md) - Перевірити, чи є
чи символ літерою чи цифрою
- [IntlChar::isxdigit()](intlchar.isxdigit.md) - Перевірити, чи є
чи символ шістнадцятковою цифрою
