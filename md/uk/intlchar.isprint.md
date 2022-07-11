- [« IntlChar::isMirrored](intlchar.ismirrored.md)
- [IntlChar::ispunct »](intlchar.ispunct.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевіряє, чи символ відображається

# IntlChar::isprint

(PHP 7, PHP 8)

IntlChar::isprint — Перевіряє, чи символ відображається.

### Опис

public static **IntlChar::isprint**(int\|string `$codepoint`): ?bool

Перевіряє, чи символ відображається.

**`true`** для категорій, відмінних від "C" (керуючі символи).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є символом, що відображається,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isprint("A"));var_dump(IntlChar::isprint(" "));var_dump(IntlChar::isprint("
"));var_dump(IntlChar::isprint("\u{200e}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::iscntrl()](intlchar.iscntrl.md) - Перевірити, чи є
чи символ керуючим
- **`IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT`**
