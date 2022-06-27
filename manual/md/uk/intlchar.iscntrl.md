- [« IntlChar::isblank](intlchar.isblank.md)
- [IntlChar::isdefined »](intlchar.isdefined.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ керуючим

# IntlChar::iscntrl

(PHP 7, PHP 8)

IntlChar::iscntrl — Перевірити, чи є символ керуючим

### Опис

public static **IntlChar::iscntrl**(int\|string `$codepoint`): ?bool

Перевіряє, чи є символ керуючим.

Керуючі символи:

- 8-бітні керуючі символи ISO (U+0000..U+001f та U+007f..U+009f)
- **`IntlChar::CHAR_CATEGORY_CONTROL_CHAR`** (Cc)
- **`IntlChar::CHAR_CATEGORY_FORMAT_CHAR`** (Cf)
- **`IntlChar::CHAR_CATEGORY_LINE_SEPARATOR`** (Zl)
- **`IntlChar::CHAR_CATEGORY_PARAGRAPH_SEPARATOR`** (Zp)

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є керуючим,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::iscntrl("A"));var_dump(IntlChar::iscntrl(" "));var_dump(IntlChar::iscntrl("
"));var_dump(IntlChar::iscntrl("\u{200e}"));?> `

Результат виконання цього прикладу:

bool(false)
bool(false)
bool(true)
bool(true)

### Дивіться також

- [IntlChar::isprint()](intlchar.isprint.md) - Перевіряє, чи є
чи символ відображається
- **`IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT`**
