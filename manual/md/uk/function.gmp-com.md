- [«gmp_cmp](function.gmp-cmp.md)
- [gmp_div_q»](function.gmp-div-q.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- обчислює доповнення до одиниці числа

# gmp_com

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_com — Обчислює доповнення до одиниці числа

### Опис

**gmp_com**([GMP](class.gmp.md)\|int\|string `$num`):
[GMP](class.gmp.md)

Повертає доповнення до одиниці "num".

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає доповнення до одиниці числа 'num' як числа GMP.

### Приклади

**Приклад #1 Приклад використання **gmp_com()****

` <?php$com u003d gmp_com("1234");echo gmp_strval($com) . "
";?> `

Результат виконання цього прикладу:

-1235
