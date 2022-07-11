- [« IntlChar::isULowercase](intlchar.isulowercase.md)
- [IntlChar::isUUppercase »](intlchar.isuuppercase.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи входить символ у категорію "Lu" (літера у верхньому
регістрі)

# IntlChar::isupper

(PHP 7, PHP 8)

IntlChar::isupper — Перевірити, чи входить символ до категорії "Lu" (літера
у верхньому регістрі)

### Опис

public static **IntlChar::isupper**(int\|string `$codepoint`): ?bool

Визначає, чи входить символ у категорію "Lu" (літери у верхньому
регістрі).

> **Примітка**:
>
> Можуть бути пропущені деякі символи, оскільки вони можуть мати іншу
> основну категорію. Щоб не втратити їх - використовуйте функцію
> [IntlChar::isUUppercase()](intlchar.isuuppercase.md).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` входить до категорії Lu або
**`false`**, якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isupper("A"));var_dump(IntlChar::isupper("a"));var_dump(IntlChar::isupper("Φ"));var_dump(IntlChar::isupper(" φ"));var_dump(IntlChar::isupper("1"));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::islower()](intlchar.islower.md) - Перевірити в нижньому
чи регістрі символ
- [IntlChar::istitle()](intlchar.istitle.md) - Перевірити, чи є
чи символ титульним (Titlecase)
- [IntlChar::tolower()](intlchar.tolower.md) - Перетворення
символ Unicode в нижній регістр
- [IntlChar::toupper()](intlchar.toupper.md) - Перетворення
символ Unicode у верхній регістр
- **`IntlChar::PROPERTY_UPPERCASE`**
