- [« IntlChar::isWhitespace](intlchar.iswhitespace.md)
- [IntlChar::ord »](intlchar.ord.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ шістнадцятковою цифрою

# IntlChar::isxdigit

(PHP 7, PHP 8)

IntlChar::isxdigit — Перевірити, чи є символ шістнадцятковою
цифрою

### Опис

public static **IntlChar::isxdigit**(int\|string `$codepoint`): ?bool

Перевіряє, чи є символ шістнадцятковою цифрою.

**`true`** для символів з категорії "Nd" (десяткові цифри) та латинських
літер a-f та A-F у уявленнях ASCII та Fullwidth ASCII ( 0041..0046,
0061..0066, FF21..FF26, FF41..FF46.)

Еквівалентно `IntlChar::digit($codepoint, 16)>u003d0`.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є шістнадцятковою
цифрою, **`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isxdigit("A"));var_dump(IntlChar::isxdigit("1"));var_dump(IntlChar::isxdigit("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)

### Примітки

> **Примітка**:
>
> Для того щоб звузити визначення шістнадцяткових цифр тільки
> приймаються лише символи ASCII:
>
> ` <?php$isASCIIHexadecimal u003d IntlChar::ord($codepoint) <u003d 0x7F && IntlChar::isxdigit($codepoint);?> `

### Дивіться також

- [IntlChar::isdigit()](intlchar.isdigit.md) - Перевірити, чи є
чи символ цифрою
