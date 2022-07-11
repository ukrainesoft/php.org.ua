- [«gmp_legendre](function.gmp-legendre.md)
- [gmp_mul»](function.gmp-mul.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Обчислення залишку від цілого розподілу

#gmp_mod

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_mod — Обчислення залишку від цілого розподілу

### Опис

**gmp_mod**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Обчислює залишок від розподілу числа `num1` на `num2`. Результат завжди
неотрицательный, знак числа 'num2' ігнорується.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Дільник (модуль).

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_mod()****

` <?php$mod u003d gmp_mod("8", "3");echo gmp_strval($mod) . "
";?> `

Результат виконання цього прикладу:

2
