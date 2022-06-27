- [«gmp_sqrt](function.gmp-sqrt.md)
- [gmp_strval »](function.gmp-strval.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Квадратний корінь із залишком

#gmp_sqrtrem

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_sqrtrem — Квадратний корінь із залишком

### Опис

**gmp_sqrtrem**([GMP](class.gmp.md)\|int\|string `$num`): array

Обчислює квадратний корінь числа із залишком.

### Список параметрів

`num`
Число, з якого витягується корінь.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає масив, в якому перший елемент - ціла частина кореня із числа
`num`, а другий - залишок (тобто різниця чисел `num` і квадрата першого
елемента масиву).

### Приклади

**Приклад #1 Приклад використання **gmp_sqrtrem()****

` <?phplist($sqrt1, $sqrt1rem) u003d gmp_sqrtrem("9");list($sqrt2, $sqrt2rem) u003d gmp_sqrtrem("7");list($sqrt3, $sqrt3rem)'8 ;echo gmp_strval($sqrt1) . ", " . gmp_strval($sqrt1rem) . "
";echo gmp_strval($sqrt2) . ", " . gmp_strval($sqrt2rem) . "
";echo gmp_strval($sqrt3) . ", " . gmp_strval($sqrt3rem) . "
";?> `

Результат виконання цього прикладу:

3, 0
2, 3
1024, 0
