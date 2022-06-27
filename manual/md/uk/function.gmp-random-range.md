- [«gmp_random_bits](function.gmp-random-bits.md)
- [gmp_random_seed »](function.gmp-random-seed.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Випадкове число

#gmp_random_range

(PHP 5 \>u003d 5.6.3, PHP 7, PHP 8)

gmp_random_range — Випадкове число

### Опис

**gmp_random_range**([GMP](class.gmp.md)\|int\|string `$min`,
[GMP](class.gmp.md)\|int\|string `$max`): [GMP](class.gmp.md)

Генерує випадкове число в діапазоні від `min` до `max`.

`min` та `max` можуть бути негативними, але `min` у будь-якому випадку повинно
бути менше `max`.

### Список параметрів

`min`
GMP-число, яке є нижньою межею діапазону

`max`
GMP-число, що є верхньою межею діапазону

### Значення, що повертаються

Випадкове GMP-число.

### Приклади

**Приклад #1 Приклад використання **gmp_random_range()****

`<?php$rand1 u003d gmp_random_range(0, 100); // випадкове число від 0 до 100$rand2 u003d gmp_random_range(-100, -10); // випадкове число від -100 до -10echo gmp_strval($rand1) . "
";echo gmp_strval($rand2) . "
";?> `

Результат виконання цього прикладу:

42
-67
