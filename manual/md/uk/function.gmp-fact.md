- [«gmp_export](function.gmp-export.md)
- [gmp_gcd »](function.gmp-gcd.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Факторіал

#gmp_fact

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_fact - Факторіал

### Опис

**gmp_fact**([GMP](class.gmp.md)\|int\|string `$num`):
[GMP](class.gmp.md)

Обчислює факторіал (`num!`) числа `num`.

### Список параметрів

`num`
Число, факторіал якого обчислюється.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_fact()****

`<?php$fact1 u003d gmp_fact(5); // 5 * 4 * 3 * 2 * 1echo gmp_strval($fact1) . "
";$fact2 u003d gmp_fact(50); // 50 * 49 * 48, ... і т.д.echo gmp_strval($fact2) . "
";?> `

Результат виконання цього прикладу:

120
3041409320171337804361260816606476884437764156896051200000000000
