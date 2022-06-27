- [«gmp_random_range](function.gmp-random-range.md)
- [gmp_random »](function.gmp-random.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Встановити початковий стан RNG

#gmp_random_seed

(PHP 7, PHP 8)

gmp_random_seed — Встановити початковий стан RNG

### Опис

**gmp_random_seed**([GMP](class.gmp.md)\|int\|string `$seed`): void

### Список параметрів

`seed`
Початковий стан для функцій
[gmp_random()](function.gmp-random.md),
[gmp_random_bits()](function.gmp-random-bits.md) та
[gmp_random_range()](function.gmp-random-range.md).

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає **`null`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Виводить **`E_WARNING`** і повертає **`false`**, якщо значення `seed`
некоректно.

### Приклади

**Приклад #1 Приклад використання **gmp_random_seed()****

` <?php// установка початкового стану gmp_random_seed(100);var_dump(gmp_strval(gmp_random(1)));// змінимо початковий стан gmp_random_seed(gmp_init(-100))_ задамо некоректний початковий стан var_dump(gmp_random_seed('not a number')); `

Результат виконання цього прикладу:

string(20) "15370156633245019617"
string(3) "683"

Warning: gmp_random_seed(): Відхилення від convertible variable до GMP - string is not integer in %s on line %d
bool(false)

### Дивіться також

- [gmp_init()](function.gmp-init.md) - Створення GMP числа
- [gmp_random()](function.gmp-random.md) - Випадкове число
- [gmp_random_bits()](function.gmp-random-bits.md) - Випадкове число
- [gmp_random_range()](function.gmp-random-range.md) - Випадкове
число
