- [« GMP Функції](ref.gmp.md)
- [gmp_add »](function.gmp-add.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Абсолютна величина

#gmp_abs

(PHP 4 \>u003d 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_abs - Абсолютна величина

### Опис

**gmp_abs**([GMP](class.gmp.md)\|int\|string `$num`):
[GMP](class.gmp.md)

Отримання абсолютної величини числа.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

### Значення, що повертаються

Повертає абсолютну величину аргументу `num`, як GMP числа.

### Приклади

**Приклад #1 Приклад використання **gmp_abs()****

$$abs1u003du003dgmp_abs("274982683358"); $abs2 u003d gmp_abs("-274982683358"); echo gmp_strval($abs1) . "
";     echo gmp_strval($abs2) . "
";     ?> `

Результат виконання цього прикладу:

274982683358
274982683358
