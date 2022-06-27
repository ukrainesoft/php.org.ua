- [«gmp_add](function.gmp-add.md)
- [gmp_binomial »](function.gmp-binomial.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Побітове І

#gmp_and

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_and - Побітове І

### Опис

**gmp_and**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Обчислює побітове І двох GMP чисел.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Результат побитового `І` у вигляді GMP числа.

### Приклади

**Приклад #1 Приклад використання **gmp_and()****

` <?php$and1 u003d gmp_and("0xfffffffff4", "0x4");$and2 u003d gmp_and("0xfffffffff4", "0x8");echo gmp_strval($and1) . "
";echo gmp_strval($and2) . "
";?> `

Результат виконання цього прикладу:

4
    0
