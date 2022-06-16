- [«gmp_div](function.gmp-div.md)
- [gmp_export »](function.gmp-export.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Поділ чисел без залишку

#gmp_divexact

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_divexact — Поділ чисел без залишку

### Опис

**gmp_divexact**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): [GMP](class.gmp.md)

Діляє число `num1` на `num2`, використовуючи швидкий алгоритм поділу без
залишку. Функція видає коректний результат тільки якщо свідомо
відомо, що число 'num2' ділить 'num1' націло.

### Список параметрів

`num1`
Подільне.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`num2`
Дільник числа `num1`.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_divexact()****

` <?php$div1 u003d gmp_divexact("10", "2");echo gmp_strval($div1) . "
";$div2 u003d gmp_divexact("10", "3"); // некоректний результатecho gmp_strval($div2) . "
";?> `

Результат виконання цього прикладу:

5
2863311534
