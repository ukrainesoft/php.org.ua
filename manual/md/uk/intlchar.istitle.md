- [« IntlChar::isspace](intlchar.isspace.md)
- [IntlChar::isUAlphabetic »](intlchar.isualphabetic.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ титульним (Titlecase)

# IntlChar::istitle

(PHP 7, PHP 8)

IntlChar::istitle — Перевірити, чи символ титульний (Titlecase)

### Опис

public static **IntlChar::istitle**(int\|string `$codepoint`): ?bool

Перевірити, чи входить символ у категорію Titlecase. Ці символи
є складовими з кількох букв, перша у тому числі заголовна.
Наприклад, \u{01cb} (ǋ) або \u{1faf} (ᾯ).

**`true`** для категорії "Lt" (titlecase).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` є титульним символом,
**`false`** - якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::istitle("A"));var_dump(IntlChar::istitle("a"));var_dump(IntlChar::istitle("Φ"));var_dump(IntlChar::istitle(" φ"));var_dump(IntlChar::istitle("1"));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)
bool(true)
bool(false)

### Дивіться також

- [IntlChar::isupper()](intlchar.isupper.md) - Перевірити, чи входить
символ у категорію "Lu" (літера у верхньому регістрі)
- [IntlChar::islower()](intlchar.islower.md) - Перевірити в нижньому
чи регістрі символ
- [IntlChar::totitle()](intlchar.totitle.md) - Перетворює символ
Unicode у titlecase
