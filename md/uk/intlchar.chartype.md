- [« IntlChar::charName](intlchar.charname.md)
- [IntlChar::chr »](intlchar.chr.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати головну категорію, до якої входить символ

# IntlChar::charType

(PHP 7, PHP 8)

IntlChar::charType — Отримати основну категорію, до якої входить символ

### Опис

public static **IntlChar::charType**(int\|string `$codepoint`): ?int

Повертає головну категорію, до якої входить символ.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає головну категорію; одну із констант:

- **`IntlChar::CHAR_CATEGORY_UNASSIGNED`**
- **`IntlChar::CHAR_CATEGORY_GENERAL_OTHER_TYPES`**
- **`IntlChar::CHAR_CATEGORY_UPPERCASE_LETTER`**
- **`IntlChar::CHAR_CATEGORY_LOWERCASE_LETTER`**
- **`IntlChar::CHAR_CATEGORY_TITLECASE_LETTER`**
- **`IntlChar::CHAR_CATEGORY_MODIFIER_LETTER`**
- **`IntlChar::CHAR_CATEGORY_OTHER_LETTER`**
- **`IntlChar::CHAR_CATEGORY_NON_SPACING_MARK`**
- **`IntlChar::CHAR_CATEGORY_ENCLOSING_MARK`**
- **`IntlChar::CHAR_CATEGORY_COMBINING_SPACING_MARK`**
- **`IntlChar::CHAR_CATEGORY_DECIMAL_DIGIT_NUMBER`**
- **`IntlChar::CHAR_CATEGORY_LETTER_NUMBER`**
- **`IntlChar::CHAR_CATEGORY_OTHER_NUMBER`**
- **`IntlChar::CHAR_CATEGORY_SPACE_SEPARATOR`**
- **`IntlChar::CHAR_CATEGORY_LINE_SEPARATOR`**
- **`IntlChar::CHAR_CATEGORY_PARAGRAPH_SEPARATOR`**
- **`IntlChar::CHAR_CATEGORY_CONTROL_CHAR`**
- **`IntlChar::CHAR_CATEGORY_FORMAT_CHAR`**
- **`IntlChar::CHAR_CATEGORY_PRIVATE_USE_CHAR`**
- **`IntlChar::CHAR_CATEGORY_SURROGATE`**
- **`IntlChar::CHAR_CATEGORY_DASH_PUNCTUATION`**
- **`IntlChar::CHAR_CATEGORY_START_PUNCTUATION`**
- **`IntlChar::CHAR_CATEGORY_END_PUNCTUATION`**
- **`IntlChar::CHAR_CATEGORY_CONNECTOR_PUNCTUATION`**
- **`IntlChar::CHAR_CATEGORY_OTHER_PUNCTUATION`**
- **`IntlChar::CHAR_CATEGORY_MATH_SYMBOL`**
- **`IntlChar::CHAR_CATEGORY_CURRENCY_SYMBOL`**
- **`IntlChar::CHAR_CATEGORY_MODIFIER_SYMBOL`**
- **`IntlChar::CHAR_CATEGORY_OTHER_SYMBOL`**
- **`IntlChar::CHAR_CATEGORY_INITIAL_PUNCTUATION`**
- **`IntlChar::CHAR_CATEGORY_FINAL_PUNCTUATION`**
- **`IntlChar::CHAR_CATEGORY_CHAR_CATEGORY_COUNT`**

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::charType("A") u003du003du003d IntlChar::CHAR_CATEGORY_UPPERCASE_LETTER);var_dump(IntlChar::charType(".") u003du003du003d IntlChar::CHAR_CATEGORY_OTHER_PU "")u003du003du003du003dIntlChar::CHAR_CATEGORY_CONTROL_CHAR);var_dump(IntlChar::charType("\u{2603}") u003du003du003d IntlChar::CHAR_CATEGORY_OTHER_SYMBOL);var_dump(IntlChar:" u003d null);?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(true)
bool(true)
bool(true)
