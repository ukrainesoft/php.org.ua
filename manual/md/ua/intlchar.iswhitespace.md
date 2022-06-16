- [« IntlChar::isUWhiteSpace](intlchar.isuwhitespace.md)
- [IntlChar::isxdigit »](intlchar.isxdigit.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ пробельним з точки зору ICU

# IntlChar::isWhitespace

(PHP 7, PHP 8)

IntlChar::isWhitespace — Перевірити, чи є символ пробельним з
точки зору ICU

### Опис

public static **IntlChar::isWhitespace**(int\|string `$codepoint`):
?bool

Перевіряє, чи є символ пробельним з точки зору ICU.

Символ є символом ICU, якщо він відповідає
одному з наступних критеріїв:

- Це символ роздільника Unicode (категорії "Z" u003d "Zs" або "Zl" або
"Zp"), але не є нерозривним пробілом (U+00A0 NBSP або U+2007
"Figure Space" або U+202F "Narrow NBSP").
- Це U+0009 HORIZONTAL TABULATION.
- Це U+000A LINE FEED.
- Це U+000B VERTICAL TABULATION.
- Це U+000C FORM FEED.
- Це U+000D CARRIAGE RETURN.
- Це U+001C FILE SEPARATOR.
- Це U+001D GROUP SEPARATOR.
- Це U+001E RECORD SEPARATOR.
- Це U+001F UNIT SEPARATOR.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є пробельним у ICU,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::iswhitespace("A"));var_dump(IntlChar::iswhitespace(" "));var_dump(IntlChar::iswhitespace("
"));var_dump(IntlChar::iswhitespace(" "));var_dump(IntlChar::iswhitespace("\u{00A0}"));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(true)
bool(true)
bool(false)

### Дивіться також

- [IntlChar::isspace()](intlchar.isspace.md) - Перевіряє, чи є
чи символ пробельним
- [IntlChar::isJavaSpaceChar()](intlchar.isjavaspacechar.md) -
Перевірити, чи є символ пробельним з точки зору Java
- [IntlChar::isUWhiteSpace()](intlchar.isuwhitespace.md) -
Перевірити, чи має символ властивість White_Space (пробіл)
