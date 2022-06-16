- [«gmp_prob_prime](function.gmp-prob-prime.md)
- [gmp_random_range »](function.gmp-random-range.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Випадкове число

#gmp_random_bits

(PHP 5 \>u003d 5.6.3, PHP 7, PHP 8)

gmp_random_bits — Випадкове число

### Опис

**gmp_random_bits**(int `$bits`): [GMP](class.gmp.md)

Генерує випадкове число. Число буде в діапазоні від 0 до (2 \*\*
`bits`) – 1.

Параметр `bits` має бути більшим за 0, а максимальне значення обмежено
лише доступною оперативною пам'яттю.

### Список параметрів

`bits`
Кількість бітів.

### Значення, що повертаються

Випадкове GMP-число.

### Приклади

**Приклад #1 Приклад використання **gmp_random_bits()****

`<?php$rand1 u003d gmp_random_bits(3); // випадкове число від 0 до 7$rand2 u003d gmp_random_bits(5); // випадкове число від 0 до 31echo gmp_strval($rand1) . "
";echo gmp_strval($rand2) . "
";?> `

Результат виконання цього прикладу:

3
15
