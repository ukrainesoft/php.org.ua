- [« IntlChar::isJavaIDPart](intlchar.isjavaidpart.md)
- [IntlChar::isJavaSpaceChar »](intlchar.isjavaspacechar.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Перевірити, чи символ може бути першим в ідентифікаторі Java

# IntlChar::isJavaIDStart

(PHP 7, PHP 8)

IntlChar::isJavaIDStart — Перевірити, чи може символ бути першим у
ідентифікатор Java

### Опис

public static **IntlChar::isJavaIDStart**(int\|string `$codepoint`):
?bool

Перевіряє, чи символ може бути першим в ідентифікаторі Java.

Крім [IntlChar::isIDStart()](intlchar.isidstart.md),
**`true`** повертається для символів із категорій "Sc" (символ грошової
одиниці) та "Pc" (з'єднувальна пунктуація).

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає **`true`**, якщо `codepoint` може бути першим у
ідентифікатор Java, **`false`** - якщо ні. У разі виникнення
помилки повертає **`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::isJavaIDStart("A"));var_dump(IntlChar::isJavaIDStart("$"));var_dump(IntlChar::isJavaIDStart("
"));var_dump(IntlChar::isJavaIDStart("\u{2603}"));?> `

Результат виконання цього прикладу:

bool(true)
bool(true)
bool(false)
bool(false)

### Дивіться також

- [IntlChar::isIDStart()](intlchar.isidstart.md) - Перевірити,
чи можна використовувати символ на початку ідентифікатора
- [IntlChar::isJavaIDPart()](intlchar.isjavaidpart.md) - Перевірити,
чи є символ допустимим в ідентифікаторі Java
- [IntlChar::isalpha()](intlchar.isalpha.md) - Перевірити, чи є
чи символ літерою
