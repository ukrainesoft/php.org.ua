- [«
IntlChar::getBidiPairedBracket](intlchar.getbidipairedbracket.md)
- [IntlChar::getCombiningClass »](intlchar.getcombiningclass.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати блок розміщення символу Unicode

# IntlChar::getBlockCode

(PHP 7, PHP 8)

IntlChar::getBlockCode — Отримати блок розташування символу Unicode

### Опис

public static **IntlChar::getBlockCode**(int\|string `$codepoint`): ?int

Повертає блок розміщення символу Unicode.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає блок розміщення `codepoint`. Одна з констант
`IntlChar::BLOCK_CODE_*`. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::getBlockCode("A") u003du003du003d IntlChar::BLOCK_CODE_BASIC_LATIN);var_dump(IntlChar::getBlockCode("Φ") u003du003du003d IntlChar::BLOCK_CODE_G: "\u{2603}") u003du003du003d IntlChar::BLOCK_CODE_MISCELLANEOUS_SYMBOLS);?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(true)
