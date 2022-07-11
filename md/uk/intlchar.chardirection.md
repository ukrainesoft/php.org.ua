- [« IntlChar::charDigitValue](intlchar.chardigitvalue.md)
- [IntlChar::charFromName »](intlchar.charfromname.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати категорію направлення листа для символу

# IntlChar::charDirection

(PHP 7, PHP 8)

IntlChar::charDirection — Отримати категорію направлення листа для
символу

### Опис

public static **IntlChar::charDirection**(int\|string `$codepoint`):
?int

Повертає категорію направлення листа для символу, яка
використовується в [» Двонаправленому алгоритмі Unicode (UAX
#9)](http://www.unicode.org/reports/tr9/).

> **Примітка**:
>
> Деякі непризначені символьні коди мають категорії R або AL
> оскільки вони перебувають у блоках зарезервованих під написання
> зліва направо.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Значення категорії направлення листа, одна із констант:

- **`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT`**
- **`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT`**
- **`IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER`**
- **`IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR`**
- **`IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_TERMINATOR`**
- **`IntlChar::CHAR_DIRECTION_ARABIC_NUMBER`**
- **`IntlChar::CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR`**
- **`IntlChar::CHAR_DIRECTION_BLOCK_SEPARATOR`**
- **`IntlChar::CHAR_DIRECTION_SEGMENT_SEPARATOR`**
- **`IntlChar::CHAR_DIRECTION_WHITE_SPACE_NEUTRAL`**
- **`IntlChar::CHAR_DIRECTION_OTHER_NEUTRAL`**
- **`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_EMBEDDING`**
- **`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_OVERRIDE`**
- **`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ARABIC`**
- **`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_EMBEDDING`**
- **`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_OVERRIDE`**
- **`IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_FORMAT`**
- **`IntlChar::CHAR_DIRECTION_DIR_NON_SPACING_MARK`**
- **`IntlChar::CHAR_DIRECTION_BOUNDARY_NEUTRAL`**
- **`IntlChar::CHAR_DIRECTION_FIRST_STRONG_ISOLATE`**
- **`IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_ISOLATE`**
- **`IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ISOLATE`**
- **`IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_ISOLATE`**
- **`IntlChar::CHAR_DIRECTION_CHAR_DIRECTION_COUNT`**

У разі виникнення помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::charDirection("A") u003du003du003d IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT);var_dump(IntlChar::charDirection("\u{05E9}") u003du003du003d IntlChar::CHAR_DI ::charDirection("+") u003du003du003d IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR);var_dump(IntlChar::charDirection(".") u003du003du003d IntlChar::CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR);?>

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(true)
bool(true)
