- [«gmp_nextprime](function.gmp-nextprime.md)
- [gmp_perfect_power »](function.gmp-perfect-power.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Побітове АБО

#gmp_or

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_or - Побітове АБО

### Опис

**gmp_or**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Обчислює побітове АБО двох GMP чисел.

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

**Приклад #1 Приклад використання **gmp_or()****

` <?php$or1 u003d gmp_or("0xfffffff2", "4");echo gmp_strval($or1, 16) . "
";$or2 u003d gmp_or("0xfffffff2", "2");echo gmp_strval($or2, 16) . "
";?> `

Результат виконання цього прикладу:

fffffff6
fffffff2
