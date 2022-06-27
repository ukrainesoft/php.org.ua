- [«gmp_setbit](function.gmp-setbit.md)
- [gmp_sqrt »](function.gmp-sqrt.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Знак числа

# gmp_sign

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_sign - Знак числа

### Опис

**gmp_sign**([GMP](class.gmp.md)\|int\|string `$num`): int

Перевіряє знак числа.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), або рядок, що містить число, яке
можна перетворити на тип int.

### Значення, що повертаються

Повертає 1, якщо 'num' позитивне; -1, якщо `num` негативне; і
0, якщо `num` дорівнює нулю.

### Приклади

**Приклад #1 Приклад використання **gmp_sign()****

`<?php// позитивнеecho gmp_sign("500") . "
";// негативнеecho gmp_sign("-500") . "
";// нольecho gmp_sign("0") . "
";?> `

Результат виконання цього прикладу:

1
-1
    0

### Дивіться також

- [gmp_abs()](function.gmp-abs.md) - Абсолютна величина
- [abs()](function.abs.md) - Абсолютне значення (модуль числа)
