- [«gmp_perfect_power](function.gmp-perfect-power.md)
- [gmp_popcount »](function.gmp-popcount.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Перевірка числа на точний квадрат

#gmp_perfect_square

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_perfect_square — Перевірка числа на точний квадрат

### Опис

**gmp_perfect_square**([GMP](class.gmp.md)\|int\|string `$num`): bool

Перевіряє, чи число точним квадратом, тобто. квадратом цілого
числа.

### Список параметрів

`num`
Перевірене на точний квадрат число.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає **`true`**, якщо `num` є квадратом цілого числа,
в іншому випадку повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання **gmp_perfect_square()****

` <?php// 3 * 3, точный квадратvar_dump(gmp_perfect_square("9"));// не является точным квадратомvar_dump(gmp_perfect_square("7"));// 1234567890 * 1234567890, точный квадратvar_dump(gmp_perfect_square("1524157875019052100" ));?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(true)

### Дивіться також

- [gmp_perfect_power()](function.gmp-perfect-power.md) - Перевірити,
чи є число "досконалим ступенем"
- [gmp_sqrt()](function.gmp-sqrt.md) - Обчислення квадратного кореня
- [gmp_sqrtrem()](function.gmp-sqrtrem.md) - Квадратний корінь з
залишком
