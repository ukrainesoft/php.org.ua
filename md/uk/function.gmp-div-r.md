- [«gmp_div_qr](function.gmp-div-qr.md)
- [gmp_div »](function.gmp-div.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Залишок від розподілу чисел

#gmp_div_r

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_div_r — Залишок від розподілу чисел

### Опис

**gmp_div_r**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`, int `$rounding_mode` u003d
**`GMP_ROUND_ZERO`**): [GMP](class.gmp.md)

Обчислює залишок від розподілу націло числа `num1` на `num2`. Якщо число
`num1` відмінно від нуля, результат матиме знак цього числа.

### Список параметрів

`num1`
Подільне.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Дільник числа `num1`.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`rounding_mode`
У документації до функції [gmp_div_q()](function.gmp-div-q.md)
наведено опис аргументу `rounding_mode`.

### Значення, що повертаються

Залишок як GMP числа.

### Приклади

**Приклад #1 Приклад використання **gmp_div_r()****

`<?php    $div u003d gmp_div_r("105", "20"); echo gmp_strval($div) . "
";     ?> `

Результат виконання цього прикладу:

5

### Дивіться також

- [gmp_div_q()](function.gmp-div-q.md) - Поділ чисел
- [gmp_div_qr()](function.gmp-div-qr.md) - Поділ чисел та отримання
приватного та залишку
