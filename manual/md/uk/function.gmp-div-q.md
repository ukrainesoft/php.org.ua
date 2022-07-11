- [ gmp_com](function.gmp-com.md)
- [gmp_div_qr »](function.gmp-div-qr.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Розподіл чисел

# gmp_div_q

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_div_q — Поділ чисел

### Опис

**gmp_div_q**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`, int `$rounding_mode` u003d
**`GMP_ROUND_ZERO`**): [GMP](class.gmp.md)

Поділяє `num1` на `num2` і повертає цілий результат.

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
Округлення результату визначається параметром `rounding_mode`, який
може приймати такі значення:

- **`GMP_ROUND_ZERO`**: Дробова частина просто відрізається.
- **`GMP_ROUND_PLUSINF`**: Результат округлюється до найближчого цілого
у бік `+нескінченності`.
- **`GMP_ROUND_MINUSINF`**: Результат округлюється до найближчого
цілого у бік `-нескінченності`.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_div_q()****

$ 10 u003d 100, 5; echo gmp_strval($div1) . "
";     $div2 u003d gmp_div_q("1", "3");     echo gmp_strval($div2) . "
";    $div3u003du003dgmp_div_q("1", "3", GMP_ROUND_PLUSINF);     echo gmp_strval($div3) . "
";     $div4 u003d gmp_div_q("-1", "4", GMP_ROUND_PLUSINF);     echo gmp_strval($div4) . "
";    $div5u003du003dgmp_div_q("-1", "4", GMP_ROUND_MINUSINF);     echo gmp_strval($div5) . "
";     ?> `

Результат виконання цього прикладу:

20
         0
1
         0
-1

### Примітки

> **Примітка**:
>
> Ця функція має псевдонім [gmp_div()](function.gmp-div.md).

### Дивіться також

- [gmp_div_r()](function.gmp-div-r.md) - Залишок від розподілу чисел
- [gmp_div_qr()](function.gmp-div-qr.md) - Поділ чисел та отримання
приватного та залишку
