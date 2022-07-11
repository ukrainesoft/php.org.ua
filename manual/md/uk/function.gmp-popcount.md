- [«gmp_perfect_square](function.gmp-perfect-square.md)
- [gmp_pow »] (function.gmp-pow.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Кількість одиниць у двійковому записі числа

#gmp_popcount

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_popcount — Кількість одиниць у двійковому записі числа

### Опис

**gmp_popcount**([GMP](class.gmp.md)\|int\|string `$num`): int

Повертає кількість одиниць у двійковому записі числа.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Кількість одиниць у двійковому записі числа `num`, як числа (int).

### Приклади

**Приклад #1 Приклад використання **gmp_popcount()****

`<?php$pop1 u003d gmp_init("10000101", 2); // 3 1'secho gmp_popcount($pop1) . "
";$pop2u003du003dgmp_init("11111110", 2); // 7 1'secho gmp_popcount($pop2) . "
";?> `

Результат виконання цього прикладу:

3
7
