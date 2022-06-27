- [« IntlChar::charType](intlchar.chartype.md)
- [IntlChar::digit »](intlchar.digit.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати символ Unicode за його кодом

# IntlChar::chr

(PHP 7, PHP 8)

IntlChar::chr — Отримати символ Unicode за його кодом

### Опис

public static **IntlChar::chr**(int\|string `$codepoint`): ?string

Повертає рядок, що містить символ Unicode із заданим кодом.

Ця функція протилежна дії функції
[IntlChar::ord()](intlchar.ord.md).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає рядок, що містить символ Unicode із заданим кодом або
**`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?php$values u003d ["A", 63, 123, 9731];foreach ($values as $value) {    var_dump(IntlChar::chr($value));}?> `

Результат виконання цього прикладу:

string(1) "A"
string(1) "?"
string(1) "{"
string(3) "☃"

### Дивіться також

- [IntlChar::ord()](intlchar.ord.md) - Отримати код символ Unicode
- [mb_chr()](function.mb-chr.md) - Повертає символ за значенням
кодової точки Unicode
- [chr()](function.chr.md) - Генерує односимвольний рядок по
заданому числу
