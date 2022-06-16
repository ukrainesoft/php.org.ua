- [«gmp_lcm](function.gmp-lcm.md)
- [gmp_mod»](function.gmp-mod.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Символ Лежандра

#gmp_legendre

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_legendre - Символ Лежандра

### Опис

**gmp_legendre**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): int

Обчислює [» символ
Лежандра](http://primes.utm.edu/glossary/page.php?sortu003dLegendreSymbol)
чисел `num1` та `num2`. `num2` має бути непарним та позитивним.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

Має бути позитивним і непарним.

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_legendre()****

`<?phpecho gmp_legendre("1", "3") . "
";echo gmp_legendre("2", "3") . "
";?> `

Результат виконання цього прикладу:

1
    0

### Дивіться також

- [gmp_jacobi()](function.gmp-jacobi.md) - Символ Якобі
- [gmp_kronecker()](function.gmp-kronecker.md) - Символ Кронекера
Якобі
