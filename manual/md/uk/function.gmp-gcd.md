- [«gmp_fact](function.gmp-fact.md)
- [gmp_gcdext »](function.gmp-gcdext.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Обчислення найбільшого загального дільника

#gmp_gcd

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_gcd - Обчислення найбільшого загального дільника

### Опис

**gmp_gcd**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Обчислює найбільший загальний дільник чисел `num1` та `num2`. Результат
завжди позитивний, навіть якщо одне з чисел, або обидва негативні.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Позитивний НОД чисел `num1` та `num2`.

### Приклади

**Приклад #1 Приклад використання **gmp_gcd()****

` <?php$gcd u003d gmp_gcd("12", "21");echo gmp_strval($gcd) . "
";?> `

Результат виконання цього прикладу:

3

### Дивіться також

- [gmp_lcm()](function.gmp-lcm.md) - Обчислює найменше загальне
кратне
