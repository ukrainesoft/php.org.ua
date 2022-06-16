- [« IntlChar::isIDIgnorable](intlchar.isidignorable.md)
- [IntlChar::isIDStart »](intlchar.isidstart.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи можна використовувати символ в ідентифікаторі

# IntlChar::isIDPart

(PHP 7, PHP 8)

IntlChar::isIDPart — Перевірити, чи можна використовувати символ в
ідентифікатор

### Опис

public static **IntlChar::isIDPart**(int\|string `$codepoint`): ?bool

Перевіряє, чи можна використовувати символ в ідентифікаторі.

**`true`** для символів категорії "L" (літери), "Nl" (символи цифр), "Nd"
(десяткові цифри), "Mc" та "Mn" (мітки суміщення), "Pc" (з'єднує
пунктуація), та u_isIDIgnorable(c).

> **Примітка**:
>
> Майже те саме, що і ID_Continue в Unicode
> (**`IntlChar::PROPERTY_ID_CONTINUE`**) за винятком того, що
> Unicode рекомендує ігнорувати Cf, які є меншими
> [IntlChar::isIDIgnorable()](intlchar.isidignorable.md).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`** якщо `codepoint` можна використовувати в
ідентифікатори, **`false`** - якщо ні. У разі виникнення помилки
повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isIDPart("A"));var_dump(IntlChar::isIDPart("$"));var_dump(IntlChar::isIDPart("
"));var_dump(IntlChar::isIDPart("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::isIDIgnorable()](intlchar.isidignorable.md) -
Перевірити, чи символ ігнорується
- [IntlChar::isIDStart()](intlchar.isidstart.md) - Перевірити,
чи можна використовувати символ на початку ідентифікатора
- **`IntlChar::PROPERTY_ID_CONTINUE`**
