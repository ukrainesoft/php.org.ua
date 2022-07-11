- [«gmp_binomial](function.gmp-binomial.md)
- [gmp_cmp »](function.gmp-cmp.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Скидання біта

#gmp_clrbit

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_clrbit - Скидання біта

### Опис

**gmp_clrbit**([GMP](class.gmp.md) `$num`, int `$index`): void

Скидає (встановлює 0) біт на позиції `index` аргументу `num`.
Індексація починається із 0.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`index`
Індекс біта, що очищається. Індекс 0 вказує на молодший біт.

### Значення, що повертаються

Об'єкт класу [GMP](class.gmp.md)ю

### Приклади

**Приклад #1 Приклад використання **gmp_clrbit()****

`<?php   $a u003d gmp_init("0xff"); gmp_clrbit($a, 0); // індексація з 0, молодший значний біт    echo gmp_strval($a) . "
";    ?> `

Результат виконання цього прикладу:

254

### Примітки

> **Примітка**:
>
> На відміну від більшості GMP функцій, **gmp_clrbit()** має
> викликатися для вже існуючого об'єкта GMP (наприклад, створеного з
> за допомогою [gmp_init()](function.gmp-init.md)). Функція не створює їх
> автоматично.

### Дивіться також

- [gmp_setbit()](function.gmp-setbit.md) - Встановлення біта
- [gmp_testbit()](function.gmp-testbit.md) - Перевірка, чи встановлено
біт в 1
