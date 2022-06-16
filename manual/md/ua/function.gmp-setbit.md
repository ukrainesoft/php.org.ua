- [«gmp_scan1](function.gmp-scan1.md)
- [gmp_sign »](function.gmp-sign.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Установка біта

#gmp_setbit

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_setbit — Встановлення біта

### Опис

**gmp_setbit**([GMP](class.gmp.md) `$num`, int `$index`, bool `$value`
u003d **`true`**): void

Встановлює в 1 біт з індексом `index` у числі `num`.

### Список параметрів

`num`
Значення, що змінюється.

Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`index`
Індекс встановлюваного біта. Індекс 0 вказує на молодший біт.

`value`
True для установки біта (установки в 1/включено); false для його очищення
(Установки в 0/вимкнено).

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_setbit()** - 0 індекс**

` <?php$a u003d gmp_init("2"); //echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "
";gmp_setbit($a, 0); // 0b10 now becomes 0b11echo gmp_strval($a), ->>0b', gmp_strval($a, 2), "
";?> `

Результат виконання цього прикладу:

2 -> 0b10
3 -> 0b11

**Приклад #2 Приклад використання **gmp_setbit()** - 1 індекс**

` <?php$a u003d gmp_init("0xfd");echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "
";gmp_setbit($a, 1); // index starts at 0echo gmp_strval($a), ' -> 0b', gmp_strval($a, 2), "
";?> `

Результат виконання цього прикладу:

253 -> 0b11111101
255 -> 0b11111111

**Приклад #3 Приклад використання **gmp_setbit()** очищення біта**

` <?php$a u003d gmp_init("0xff");echo gmp_strval($a), - -> 0b', gmp_strval($a, 2), "
";gmp_setbit($a, 0, false); // clear bit at index 0echo gmp_strval($a), ->>0b', gmp_strval($a, 2), "
";?> `

Результат виконання цього прикладу:

255 -> 0b11111111
254 -> 0b11111110

### Примітки

> **Примітка**:
>
> На відміну від більшості GMP функцій, **gmp_setbit()** має
> викликатись для вже існуючого об'єкта GMP (наприклад, створеного
> функцією [gmp_init()](function.gmp-init.md)). Число не буде
> Створюватися автоматично.

### Дивіться також

- [gmp_clrbit()](function.gmp-clrbit.md) - Скидання біта
- [gmp_testbit()](function.gmp-testbit.md) - Перевірка, чи встановлено
біт в 1
