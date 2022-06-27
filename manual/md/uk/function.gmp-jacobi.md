- [«gmp_invert](function.gmp-invert.md)
- [gmp_kronecker »](function.gmp-kronecker.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Символ Якобі

# gmp_jacobi

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_jacobi — Символ Якобі

### Опис

**gmp_jacobi**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): int

Обчислює [» Символ
Якобі](http://primes.utm.edu/glossary/page.php?sortu003dJacobiSymbol) для
чисел `num1` та `num2`. `num2` має бути позитивним та непарним.

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

**Приклад #1 Приклад використання **gmp_jacobi()****

`<?phpecho gmp_jacobi("1", "3") . "
";echo gmp_jacobi("2", "3") . "
";?> `

Результат виконання цього прикладу:

1
    0

### Дивіться також

- [gmp_kronecker()](function.gmp-kronecker.md) - Символ Кронекера
Якобі
- [gmp_legendre()](function.gmp-legendre.md) - Символ Лежандра
