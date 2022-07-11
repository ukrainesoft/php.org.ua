- [«gmp_intval](function.gmp-intval.md)
- [gmp_jacobi »](function.gmp-jacobi.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Інверсія залишку від розподілу

#gmp_invert

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_invert - Інверсія залишку від розподілу

### Опис

**gmp_invert**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`):
[GMP](class.gmp.md)\|false

Обчислює інверсію залишку від розподілу числа `num1` на число `num2`.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

GMP число у разі успішного виконання або **`false`**, якщо інверсія
не існує.

### Приклади

**Приклад #1 Приклад використання **gmp_invert()****

`<?phpecho gmp_invert("5", "10"); // ні інверсії, не виводить нічого, результат FALSE$invert u003d gmp_invert("5", "11");echo gmp_strval($invert) . "
";?> `

Результат виконання цього прикладу:

9
