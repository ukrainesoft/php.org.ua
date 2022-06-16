- [«gmp_sub](function.gmp-sub.md)
- [gmp_xor »](function.gmp-xor.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Перевірка, чи біт в 1

#gmp_testbit

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

gmp_testbit — Перевірте, чи встановлено біт в 1

### Опис

**gmp_testbit**([GMP](class.gmp.md)\|int\|string `$num`, int
`$index`): bool

Перевіряє, чи встановлено заданий біт 1.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`index`
Перевірений біт

### Значення, що повертаються

Повертає **`true`**, якщо біт встановлений у `num`, інакше **`false`**.

### Помилки

Викидається помилка рівня **`E_WARNING`**, якщо `index` менше нуля, та
повертається **`false`**.

### Приклади

**Приклад #1 Приклад використання **gmp_testbit()****

` <?php$n u003d gmp_init("1000000");var_dump(gmp_testbit($n, 1));gmp_setbit($n, 1);var_dump(gmp_testbit($n, 1));?> `

Результат виконання цього прикладу:

bool(false)
bool(true)

### Дивіться також

- [gmp_setbit()](function.gmp-setbit.md) - Встановлення біта
- [gmp_clrbit()](function.gmp-clrbit.md) - Скидання біта
