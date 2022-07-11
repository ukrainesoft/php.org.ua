- [« IntlChar::ord](intlchar.ord.md)
- [IntlChar::totitle »](intlchar.totitle.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перетворення символу Unicode на нижній регістр

# IntlChar::tolower

(PHP 7, PHP 8)

IntlChar::tolower — Перетворення символу Unicode на нижній регістр

### Опис

public static **IntlChar::tolower**(int\|string `$codepoint`):
int\|string\|null

Перетворює символ на його еквівалент у нижньому регістрі. Якщо такого
ні, то повертається вихідний знак.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає Simple_Lowercase_Mapping для символу, якщо існує. Якщо
ні, то повертає вихідний символ. У разі виникнення помилки
повертає **`null`**.

Тип, що повертається, повинен бути int, якщо тільки символ не був переданий як
рядок UTF-8 (string), у разі повернеться рядок (string). В разі
виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::tolower("A"));var_dump(IntlChar::tolower("a"));var_dump(IntlChar::tolower("Φ"));var_dump(IntlChar::tolower(" φ"));var_dump(IntlChar::tolower("1"));var_dump(IntlChar::tolower(ord("A")));var_dump(IntlChar::tolower(ord("a")))); ?> `

Результат виконання цього прикладу:

string(1) "a"
string(1) "a"
string(2) "φ"
string(2) "φ"
string(1) "1"
int(97)
int(97)

### Дивіться також

- [IntlChar::totitle()](intlchar.totitle.md) - Перетворює символ
Unicode у titlecase
- [IntlChar::toupper()](intlchar.toupper.md) - Перетворення
символ Unicode у верхній регістр
- [mb_strtolower()](function.mb-strtolower.md) - Приведення рядка до
нижнього регістру
