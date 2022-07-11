- [« IntlChar::isalpha](intlchar.isalpha.md)
- [IntlChar::isblank »](intlchar.isblank.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ базовим

# IntlChar::isbase

(PHP 7, PHP 8)

IntlChar::isbase — Перевірити, чи символ є базовим

### Опис

public static **IntlChar::isbase**(int\|string `$codepoint`): ?bool

Перевіряє, чи є символом базовим. **`true`** для категорій "L"
(літери), "N" (числа), "Mc" (міткою позиціонування при комбінації
символів) та "Me" (enclosing marks).

> **Примітка**:
>
> Відрізняється від визначення, заданого в розділі 3.5 статті D13 Unicode,
> визначального базові символи як всі символи (не Cn) графічно не
> що поєднуються з попередніми символами (M) і не є керуючими
> (Cc) або форматуючими (Cf).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є базовим, **`false`** -
якщо ні. У разі виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isbase("A"));var_dump(IntlChar::isbase("1"));var_dump(IntlChar::isbase("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)

### Дивіться також

- [IntlChar::isalpha()](intlchar.isalpha.md) - Перевірити, чи є
чи символ літерою
- [IntlChar::isdigit()](intlchar.isdigit.md) - Перевірити, чи є
чи символ цифрою
