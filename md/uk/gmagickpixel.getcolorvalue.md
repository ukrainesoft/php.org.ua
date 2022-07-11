- [« GmagickPixel::getcolorcount](gmagickpixel.getcolorcount.md)
- [GmagickPixel::setcolor »](gmagickpixel.setcolor.md)

- [PHP Manual](index.md)
- [GmagickPixel](class.gmagickpixel.md)
- Повертає нормалізоване значення для заданого колірного каналу

# GmagickPixel::getcolorvalue

(PECL gmagick \>u003d Unknown)

GmagickPixel::getcolorvalue — Повертає нормалізоване значення для
заданого колірного каналу

### Опис

public **GmagickPixel::getcolorvalue**(int `$color`): float

Повертає нормалізоване значення для заданого колірного каналу
виді числа з плаваючою точкою в діапазоні від 0 до 1.

### Список параметрів

`col`
Колірний канал. Одна із констант колірних каналів Gmagick.

### Значення, що повертаються

Повертає нормалізоване значення для заданого колірного каналу,
або, у разі помилки, викидає виняток
**GmagickPixelException**.
