- [«gmp_div_q](function.gmp-div-q.md)
- [gmp_div_r »](function.gmp-div-r.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Поділ чисел та отримання приватного та залишку

#gmp_div_qr

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_div_qr — Поділ чисел та отримання приватного та залишку

### Опис

**gmp_div_qr**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`, int `$rounding_mode` u003d
**`GMP_ROUND_ZERO`**): array

Функція ділить `num1` на `num2`.

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

Повертає масив (array), у якому перший елемент містить `[n/d]`
(ціле приватне), а другий `(n - [n/d] * d)` (залишок від розподілу).

### Приклади

**Приклад #1 Поділ GMP чисел**

`<?php    $a u003d gmp_init("0x41682179fbf5"); $res u003d gmp_div_qr($a, "0xDEFE75"); printf("Результат: q - %s, r - %s",     gmp_strval($res[0]), gmp_strval($res[1])); ?> `

### Дивіться також

- [gmp_div_q()](function.gmp-div-q.md) - Поділ чисел
- [gmp_div_r()](function.gmp-div-r.md) - Залишок від розподілу чисел
