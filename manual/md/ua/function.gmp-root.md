- [«gmp_random](function.gmp-random.md)
- [gmp_rootrem »](function.gmp-rootrem.md)

- [PHP Manual](index.md)
- [GMP Функції](ref.gmp.md)
- Витягти корінь ступеня N і повернути його цілу частину

#gmp_root

(PHP 5 \>u003d 5.6.0, PHP 7, PHP 8)

gmp_root - Витягти корінь ступеня N і повернути його цілу частину

### Опис

**gmp_root**([GMP](class.gmp.md)\|int\|string `$num`, int `$nth`):
[GMP](class.gmp.md)

Витягує корінь ступеня `nth` з `num` і повертає цілу частину
результату.

### Список параметрів

`num`
Об'єкт [GMP](class.gmp.md), ціле число (int) або числовий рядок
(string).

`nth`
Позитивна кількість ступеня кореня `num`.

### Значення, що повертаються

Цілочисленну частину результату вилучення кореня як GMP-числа.
