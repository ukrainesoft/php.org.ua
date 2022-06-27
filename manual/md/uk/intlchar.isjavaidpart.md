- [« IntlChar::isISOControl](intlchar.isisocontrol.md)
- [IntlChar::isJavaIDStart »](intlchar.isjavaidstart.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи є символ допустимим в ідентифікаторі Java

# IntlChar::isJavaIDPart

(PHP 7, PHP 8)

IntlChar::isJavaIDPart — Перевірити, чи є символ допустимим у
ідентифікатор Java

### Опис

public static **IntlChar::isJavaIDPart**(int\|string `$codepoint`):
?bool

Перевіряє, чи є символ допустимим в ідентифікаторі Java.

Крім [IntlChar::isIDPart()](intlchar.isidpart.md),
**`true`** повертається для категорії "Sc" (символ грошової одиниці).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` може зустрічатися у
ідентифікатор Java, **`false`** - якщо ні. У разі виникнення
помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isJavaIDPart("A"));var_dump(IntlChar::isJavaIDPart("$"));var_dump(IntlChar::isJavaIDPart("
"));var_dump(IntlChar::isJavaIDPart("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::isIDIgnorable()](intlchar.isidignorable.md) -
Перевірити, чи символ ігнорується
- [IntlChar::isIDPart()](intlchar.isidpart.md) - Перевірити,
чи можна використовувати символ в ідентифікаторі
- [IntlChar::isJavaIDStart()](intlchar.isjavaidstart.md) -
Перевірити, чи символ може бути першим в ідентифікаторі Java
- [IntlChar::isalpha()](intlchar.isalpha.md) - Перевірити, чи є
чи символ літерою
- [IntlChar::isdigit()](intlchar.isdigit.md) - Перевірити, чи є
чи символ цифрою
