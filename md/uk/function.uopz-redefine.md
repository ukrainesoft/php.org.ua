- [«uopz_overload](function.uopz-overload.md)
- [uopz_rename »] (function.uopz-rename.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Перевизначити константу

#uopz_redefine

(PECL uopz 1, PECL uopz 2, PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_redefine — Перевизначити константу

### Опис

**uopz_redefine**(string `$constant`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

**uopz_redefine**(string `$class`, string `$constant`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Перевизначає задану константу `constant` на значення `value`

### Список параметрів

`class`
Ім'я класу, що містить константу

`constant`
Ім'я константи

`value`
Нове значення константи має бути коректним типом для постійної
змінної

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **uopz_redefine()****

` <?phpdefine("MY", 100);uopz_redefine("MY", 1000);echo MY;?> `

Результат виконання цього прикладу:

1000
