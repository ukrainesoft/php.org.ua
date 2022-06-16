- [«gmp_pow](function.gmp-pow.md)
- [gmp_prob_prime »](function.gmp-prob-prime.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Зводить число до ступеня і виробляє розподіл за модулем

#gmp_powm

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_powm - Зводить число в ступінь і виробляє розподіл за модулем

### Опис

**gmp_powm**([GMP](class.gmp.md)\|int\|string `$num`,
[GMP](class.gmp.md)\|int\|string `$exponent`,
[GMP](class.gmp.md)\|int\|string `$modulus`): [GMP](class.gmp.md)

Обчислює (`num` зводиться в ступінь `exponent`) залишок від
цілісного розподілу на `modulus`. Якщо `exponent` негативний,
результат не визначено.

### Список параметрів

`num`
Підстава ступеня.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`exponent`
Позитивний показник ступеня, в який зводиться 'num'.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`modulus`
Дільник, залишок від цілого розподілу на який буде повернутий.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Нове число GMP (результат операції).

### Приклади

**Приклад #1 Приклад використання **gmp_powm()****

` <?php$pow1 u003d gmp_powm("2", "31", "2147483649");echo gmp_strval($pow1) . "
";?> `

Результат виконання цього прикладу:

2147483648
