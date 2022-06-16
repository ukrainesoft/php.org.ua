- [«gmp_abs](function.gmp-abs.md)
- [gmp_and »](function.gmp-and.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Складання чисел

#gmp_add

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_add — Складання чисел

### Опис

**gmp_add**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Складає два числа.

### Список параметрів

`num1`
Перше доданок.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Друге доданок.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Сума аргументів як GMP числа.

### Приклади

**Приклад #1 Приклад використання **gmp_add()****

` <?php$sum u003d gmp_add("123456789012345", "76543210987655");echo gmp_strval($sum) . "
";?> `

Результат виконання цього прикладу:

200000000000000
