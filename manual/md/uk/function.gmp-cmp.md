- [«gmp_clrbit](function.gmp-clrbit.md)
- [gmp_com »](function.gmp-com.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Порівняння чисел

#gmp_cmp

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_cmp — Порівняння чисел

### Опис

**gmp_cmp**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): int

Порівнює два числа.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає позитивне значення, якщо `a > b`, нуль, якщо `a u003d b` і
негативне значення, якщо `a<b`.

### Приклади

**Приклад #1 Приклад використання **gmp_cmp()****

`<?php$cmp1 u003d gmp_cmp("1234", "1000"); // більше$cmp2 u003d gmp_cmp("1000", "1234"); // менше $cmp3 u003d gmp_cmp("1234", "1234"); // рівніecho "$cmp1 $cmp2 $cmp3
";?> `

Результат виконання цього прикладу:

1 -1 0
