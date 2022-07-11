- [«gmp_divexact](function.gmp-divexact.md)
- [gmp_fact»](function.gmp-fact.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Експортувати у бінарний рядок

#gmp_export

(PHP 5 \>u003d 5.6.1, PHP 7, PHP 8)

gmp_export — Експортувати в бінарний рядок

### Опис

**gmp_export**([GMP](class.gmp.md)\|int\|string `$num`, int
`$word_size` u003d 1, int `$flags` u003d GMP_MSW_FIRST \| GMP_NATIVE_ENDIAN):
string

Експортує GMP-число до бінарного рядка

### Список параметрів

`num`
GMP-число для експорту

`word_size`
За замовчуванням дорівнює 1. Кількість байт у кожному блоці бінарних даних.
Зазвичай використовується разом із завданням options.

`flags`
Типово **`GMP_MSW_FIRST`** \| **`GMP_NATIVE_ENDIAN`**.

### Значення, що повертаються

Повертає рядок.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------|
| 8.0.0 | Функція більше не повертає **`false`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Приклад використання **gmp_export()****

`<?php$number u003d gmp_init(16705);echo gmp_export($number) . "
";?> `

Результат виконання цього прикладу:

AA

### Дивіться також

- [gmp_import()](function.gmp-import.md) - Імпортувати з бінарної
рядки
