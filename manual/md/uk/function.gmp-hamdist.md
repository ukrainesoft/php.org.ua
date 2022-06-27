- [«gmp_gcdext](function.gmp-gcdext.md)
- [gmp_import »](function.gmp-import.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Відстань Хеммінга

#gmp_hamdist

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_hamdist — Відстань Хеммінга

### Опис

**gmp_hamdist**([GMP](class.gmp.md)\|int\|string `$num1`,
[GMP](class.gmp.md)\|int\|string `$num2`): int

Повертає відстань Хеммінга для чисел `num1` та `num2`. Обидва операнди
мають бути неотрицательными.

### Список параметрів

`num1`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

Має бути невід'ємним.

`num2`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

Має бути невід'ємним.

### Значення, що повертаються

Відстань Хеммінга між `num1` і `num2` у вигляді цілого числа (int).

### Приклади

**Приклад #1 Приклад використання **gmp_hamdist()****

` <?php$ham1 u003d gmp_init("1001010011", 2);$ham2 u003d gmp_init("1011111100", 2);echo gmp_hamdist($ham1, $ham2) . "
";/* відстань Хеммінга еквівалентно: */echo gmp_popcount(gmp_xor($ham1, $ham2)) . ""
";?> `

Результат виконання цього прикладу:

6
6

### Дивіться також

- [gmp_popcount()](function.gmp-popcount.md) - Кількість одиниць
двійкового запису числа
- [gmp_xor()](function.gmp-xor.md) - Побітове виключне АБО
