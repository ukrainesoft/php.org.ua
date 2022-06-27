- [«gmp_mul](function.gmp-mul.md)
- [gmp_nextprime »](function.gmp-nextprime.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Зміна знака числа

#gmp_neg

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_neg — Зміна знака числа

### Опис

**gmp_neg**([GMP](class.gmp.md)\|int\|string `$num`):
[GMP](class.gmp.md)

Повертає протилежне щодо нуля число.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає - `num` як GMP числа.

### Приклади

**Приклад #1 Приклад використання **gmp_neg()****

` <?php$neg1 u003d gmp_neg("1");echo gmp_strval($neg1) . "
";$neg2 u003d gmp_neg("-1");echo gmp_strval($neg2) . "
";?> `

Результат виконання цього прикладу:

-1
1
