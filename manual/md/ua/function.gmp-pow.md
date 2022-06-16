- [«gmp_popcount](function.gmp-popcount.md)
- [gmp_powm »](function.gmp-powm.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Зводить число до ступеня

#gmp_pow

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_pow — Зводить число до ступеня

### Опис

**gmp_pow**([GMP](class.gmp.md)\|int\|string `$num`, int `$exponent`):
[GMP](class.gmp.md)

Зводить число `num` у ступінь `exponent`.

### Список параметрів

`num`
Підстава ступеня.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`exponent`
Позитивний показник ступеня числа 'num'.

### Значення, що повертаються

Нове (результуюче) GMP число. Результатом прикладу `0^0` буде 1.

### Приклади

**Приклад #1 Приклад використання **gmp_pow()****

`<?php$pow1 u003d gmp_pow("2", 31);echo gmp_strval($pow1) . "
";$pow2u003du003dgmp_pow("0", 0);echo gmp_strval($pow2) . "
";$pow3 u003d gmp_pow("2", -1); // Негативний показник ступеня викличе попередженняecho gmp_strval($pow3) . ""
";?> `

Результат виконання цього прикладу:

2147483648
1
