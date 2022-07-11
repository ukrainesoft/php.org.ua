- [« IntlChar::isJavaSpaceChar](intlchar.isjavaspacechar.md)
- [IntlChar::isMirrored »](intlchar.ismirrored.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи в нижньому регістрі символ

# IntlChar::islower

(PHP 7, PHP 8)

IntlChar::islower — Перевірити, чи в нижньому регістрі символ

### Опис

public static **IntlChar::islower**(int\|string `$codepoint`): ?bool

Визначає, чи входить символ у категорію "Ll" (літери у нижньому регістрі).

> **Примітка**:
>
> Можуть бути пропущені деякі символи, оскільки вони можуть мати іншу
> основну категорію. Щоб не втратити їх - використовуйте функцію
> [IntlChar::isULowercase()](intlchar.isulowercase.md).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` входить до категорії Ll або
**`false`**, якщо ні. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::islower("A"));var_dump(IntlChar::islower("a"));var_dump(IntlChar::islower("Φ"));var_dump(IntlChar::islower(" φ"));var_dump(IntlChar::islower("1"));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
bool(false)
bool(true)
bool(false)

### Дивіться також

- [IntlChar::isupper()](intlchar.isupper.md) - Перевірити, чи входить
символ у категорію "Lu" (літера у верхньому регістрі)
- [IntlChar::istitle()](intlchar.istitle.md) - Перевірити, чи є
чи символ титульним (Titlecase)
- [IntlChar::tolower()](intlchar.tolower.md) - Перетворення
символ Unicode в нижній регістр
- [IntlChar::toupper()](intlchar.toupper.md) - Перетворення
символ Unicode у верхній регістр
- **`IntlChar::PROPERTY_LOWERCASE`**
