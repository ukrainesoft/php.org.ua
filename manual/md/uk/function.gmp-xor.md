- [«gmp_testbit](function.gmp-testbit.md)
- [GMP »](class.gmp.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Побітове що виключає АБО

#gmp_xor

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_xor - Побітове виключає АБО

### Опис

**gmp_xor**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Обчислює побітове що виключає АБО (XOR) двох GMP чисел.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_xor()****

` <?php$xor1 u003d gmp_init("1101101110011101", 2);$xor2 u003d gmp_init("0110011001011001", 2);$xor3 u003d gmp_x "
";?> `

Результат виконання цього прикладу:

1011110111000100
