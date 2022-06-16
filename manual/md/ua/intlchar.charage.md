- [«IntlChar](class.intlchar.md)
- [IntlChar::charDigitValue »](intlchar.chardigitvalue.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати "вік" символьного коду

# IntlChar::charAge

(PHP 7, PHP 8)

IntlChar::charAge — Отримати "вік" символьного коду

### Опис

public static **IntlChar::charAge**(int\|string `$codepoint`): ?array

Повертає "вік" символьного коду.

"Вік" - це версія Unicode, в якій цей символьний код вперше був
позначений (як не символ або для приватного використання) або прийнятий
як символ. Це може бути корисним у випадках, коли необхідно передати
рядок системі, що не підтримує нові символи.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Номер версії Unicode як масиву. Наприклад, версія *1.3.31.2*
повернеться як `[1, 3, 31, 2]`. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::charage("\u{2603}"));var_dump(IntlChar::charage("\u{1F576}"));?> `

Результат виконання цього прикладу:

array(4) {
[0]u003d>
int(1)
[1]u003d>
int(1)
[2]u003d>
int(0)
[3]u003d>
int(0)
}
array(4) {
[0]u003d>
int(7)
[1]u003d>
int(0)
[2]u003d>
int(0)
[3]u003d>
int(0)
}

### Дивіться також

- [IntlChar::getUnicodeVersion()](intlchar.getunicodeversion.md) -
Отримати версію Unicode
- [IntlChar::getIntPropertyMinValue()](intlchar.getintpropertyminvalue.md) -
Отримати мінімальне значення для якості Unicode
- [IntlChar::getIntPropertyValue()](intlchar.getintpropertyvalue.md) -
Отримати значення властивості Unicode для символу
