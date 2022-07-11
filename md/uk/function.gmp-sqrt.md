- [«gmp_sign](function.gmp-sign.md)
- [gmp_sqrtrem »](function.gmp-sqrtrem.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Обчислення квадратного кореня

#gmp_sqrt

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_sqrt — Обчислення квадратного кореня

### Опис

**gmp_sqrt**([GMP](class.gmp.md)\|int\|string `$num`):
[GMP](class.gmp.md)

Обчислює квадратний корінь числа 'num'.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Ціла частина кореня як GMP числа.

### Приклади

**Приклад #1 Приклад використання **gmp_sqrt()****

` <?php$sqrt1 u003d gmp_sqrt("9");$sqrt2 u003d gmp_sqrt("7");$sqrt3 u003d gmp_sqrt("1524157875019052100");echo gmp_str "
";echo gmp_strval($sqrt2) . "
";echo gmp_strval($sqrt3) . "
";?> `

Результат виконання цього прикладу:

3
2
1234567890
