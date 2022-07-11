- [« IntlChar::enumCharTypes](intlchar.enumchartypes.md)
- [IntlChar::forDigit »](intlchar.fordigit.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Здійснює перетворення регістру заданого символу

# IntlChar::foldCase

(PHP 7, PHP 8)

IntlChar::foldCase — Перетворює регістр заданого
символу

### Опис

public static **IntlChar::foldCase**(int\|string `$codepoint`, int
`$options` u003d IntlChar::FOLD_CASE_DEFAULT): int\|string\|null

Повертає код символу в регістрі відмінному від регістру переданого
символ. Якщо символ не має уявлення в іншому регістрі, то буде
повернутий переданий символ.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

`options`
**`IntlChar::FOLD_CASE_DEFAULT`** (за замовчуванням) або
**`IntlChar::FOLD_CASE_EXCLUDE_SPECIAL_I`**.

### Значення, що повертаються

Повертає *Simple_Case_Folding* для символу, якщо він є. В іншому
випадку - сам символ у разі успішного виконання або **`null`**
у разі виникнення помилки.
