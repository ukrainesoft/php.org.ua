- [«gmp_or](function.gmp-or.md)
- [gmp_perfect_square »](function.gmp-perfect-square.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Перевірити, чи є число "досконалим ступенем"

#gmp_perfect_power

(PHP 7 \>u003d 7.3.0, PHP 8)

gmp_perfect_power — Перевірити, чи є число "досконалим ступенем"

### Опис

**gmp_perfect_power**([GMP](class.gmp.md)\|int\|string `$num`): bool

Перевіряє, чи є 'num' досконалим ступенем. Ціле число є
досконалим ступенем, якщо його можна отримати зведенням меншого
цілого числа в цілу міру.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає **`true`**, якщо `num` є досконалим ступенем. В
в іншому випадку повертає **`false`**.

### Дивіться також

- [gmp_perfect_square()](function.gmp-perfect-square.md) - Перевірка
числа на точний квадрат
