- [«gmp_mod](function.gmp-mod.md)
- [gmp_neg »](function.gmp-neg.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- множення чисел

# gmp_mul

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_mul — Збільшення чисел

### Опис

**gmp_mul**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Помножує число `num1` на `num2` та повертає результат.

### Список параметрів

`num1`
Перший множник, число, що множиться на `num2`.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Другий множник, число, що множиться на `num1`.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_mul()****

` <?php$mul u003d gmp_mul("12345678", "2000");echo gmp_strval($mul) . "
";?> `

Результат виконання цього прикладу:

24691356000
