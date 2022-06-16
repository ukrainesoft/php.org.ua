- [« IntlChar::totitle](intlchar.totitle.md)
- [IntlException »](class.intlexception.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перетворення символу Unicode у верхній регістр

# IntlChar::toupper

(PHP 7, PHP 8)

IntlChar::toupper — Перетворення символу Unicode у верхній регістр

### Опис

public static **IntlChar::toupper**(int\|string `$codepoint`):
int\|string\|null

Перетворює символ на його еквівалент у верхньому регістрі. Якщо такого
ні, то повертається вихідний знак.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає символ Simple_Uppercase_Mapping, якщо він є. В протилежному
У разі повертається вихідний символ.

Тип, що повертається, повинен бути int, якщо тільки символ не був переданий як
рядок UTF-8 (string), у разі повернеться рядок (string). В разі
виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::toupper("A"));var_dump(IntlChar::toupper("a"));var_dump(IntlChar::toupper("Φ"));var_dump(IntlChar::toupper(" φ"));var_dump(IntlChar::toupper("1"));var_dump(IntlChar::toupper(ord("A")));var_dump(IntlChar::toupper(ord("a")))); ?> `

Результат виконання цього прикладу:

string(1) "A"
string(1) "A"
string(2) "Φ"
string(2) "Φ"
string(1) "1"
int(65)
int(65)

### Дивіться також

- [IntlChar::tolower()](intlchar.tolower.md) - Перетворення
символ Unicode в нижній регістр
- [IntlChar::totitle()](intlchar.totitle.md) - Перетворює символ
Unicode у titlecase
- [mb_strtoupper()](function.mb-strtoupper.md) - Приведення рядка до
верхнього регістру
