- [« IntlChar::getCombiningClass](intlchar.getcombiningclass.md)
- [IntlChar::getIntPropertyMaxValue
»](intlchar.getintpropertymaxvalue.md)

- [PHP Manual](index.md)
- [IntlChar](class.intlchar.md)
- Отримати властивість FC_NFKC_Closure для символу

# IntlChar::getFC_NFKC_Closure

(PHP 7, PHP 8)

IntlChar::getFC_NFKC_Closure — Отримати властивість FC_NFKC_Closure для
символу

### Опис

public static **IntlChar::getFC_NFKC_Closure**(int\|string
`$codepoint`): string\|false\|null

Отримує властивість FC_NFKC_Closure символу.

### Список параметрів

`codepoint`
Цілочисленне (int) завдання коду символу (наприклад, `0x2603` для *U+2603
СНІГОВИКА*), або символ, закодований рядок UTF-8 (наприклад
``\u{2603}"`)

### Значення, що повертаються

Повертає властивість FC_NFKC_Closure для codepoint у вигляді рядка, або
порожній рядок, якщо його немає. У разі виникнення помилки повертає
**`null`**.

### Приклади

**Приклад #1 Тестування різних способів завдання**

` <?phpvar_dump(IntlChar::getFC_NFKC_Closure("\u{2121}"));var_dump(IntlChar::getFC_NFKC_Closure("\u{1D2D}"));?> `

Результат виконання цього прикладу:

string(3) "tel"
string(2) "æ"
