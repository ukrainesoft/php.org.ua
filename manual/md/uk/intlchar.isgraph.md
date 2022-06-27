- [« IntlChar::isdigit](intlchar.isdigit.md)
- [IntlChar::isIDIgnorable »](intlchar.isidignorable.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символом графічним символом

# IntlChar::isgraph

(PHP 7, PHP 8)

IntlChar::isgraph — Перевірити, чи є символом графічним символом

### Опис

public static **IntlChar::isgraph**(int\|string `$codepoint`): ?bool

Перевіряє, чи є символ "графічним" символом (друковані символи
крім пробельных).

**`true`** для всіх символів за винятком тих, що входять до категорії "Cc"
(керуючі символи), "Cf" (управління форматом), "Cs" (сурогати),
"Cn" (не задані) та "Z" (розділювачі).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є "графічним" символом,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isgraph("A"));var_dump(IntlChar::isgraph("1"));var_dump(IntlChar::isgraph("\u{2603}"));var_dump(IntlChar: :isgraph("
"));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(true)
bool(false)
