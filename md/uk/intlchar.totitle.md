- [« IntlChar::tolower](intlchar.tolower.md)
- [IntlChar::toupper »](intlchar.toupper.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перетворює символ Unicode у titlecase

# IntlChar::totitle

(PHP 7, PHP 8)

IntlChar::totitle — Перетворює символ Unicode у titlecase

### Опис

public static **IntlChar::totitle**(int\|string `$codepoint`):
int\|string\|null

Повертає еквівалент символу в титульному (titlecase) регістрі. Якщо
такого немає, то повертається вихідний знак.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Якщо існує Simple_Titlecase_Mapping для символу. Якщо
ні, то повертає вихідний символ. У разі виникнення помилки
повертає **`null`**.

Тип, що повертається, повинен бути int, якщо тільки символ не був переданий як
рядок UTF-8 (string), у разі повернеться рядок (string). В разі
виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::totitle("A"));var_dump(IntlChar::totitle("a"));var_dump(IntlChar::totitle("Φ"));var_dump(IntlChar::totitle(" φ"));var_dump(IntlChar::totitle("1"));var_dump(IntlChar::totitle(ord("A")));var_dump(IntlChar::totitle(ord("a")))); ?> `

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
- [IntlChar::toupper()](intlchar.toupper.md) - Перетворення
символ Unicode у верхній регістр
- [mb_convert_case()](function.mb-convert-case.md) - Виробляє
зміну регістру символів у рядку
