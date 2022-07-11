- [« IntlChar::getBlockCode](intlchar.getblockcode.md)
- [IntlChar::getFC_NFKC_Closure »](intlchar.getfc-nfkc-closure.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати комбінуючий клас для символу

# IntlChar::getCombiningClass

(PHP 7, PHP 8)

IntlChar::getCombiningClass — Отримати комбінуючий клас для символу

### Опис

public static **IntlChar::getCombiningClass**(int\|string `$codepoint`):
?int

Повертає комбінуючий клас для символу.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає комбінуючий клас для символу. У разі виникнення
помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::getCombiningClass("A"));var_dump(IntlChar::getCombiningClass("\u{0334}"));var_dump(IntlChar::getCombiningClass("\u{0358}")); ?> `

Результат виконання цього прикладу:

int(0)
int(1)
int(232)
