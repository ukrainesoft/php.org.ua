- [«gmp_strval](function.gmp-strval.md)
- [gmp_testbit »](function.gmp-testbit.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Віднімання чисел

#gmp_sub

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_sub — Віднімання чисел

### Опис

**gmp_sub**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Віднімає число `num2` з числа `num1` і повертає результат.

### Список параметрів

`num1`
Зменшуване.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Віднімається з числа `num1`.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_sub()****

`<?php$sub u003d gmp_sub("281474976710656", "4294967296"); // 2^48 - 2^32echo gmp_strval($sub) . "
";?> `

Результат виконання цього прикладу:

281470681743360
