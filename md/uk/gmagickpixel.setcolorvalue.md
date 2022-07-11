- [« GmagickPixel::setcolor](gmagickpixel.setcolor.md)
- [ImageMagick »](book.imagick.md)

- [PHP Manual](index.md)
- [GmagickPixel](class.gmagickpixel.md)
- Встановити нормалізоване значення колірного каналу

# GmagickPixel::setcolorvalue

(PECL gmagick \>u003d Unknown)

GmagickPixel::setcolorvalue — Встановити нормалізоване значення
колірного каналу

### Опис

public **GmagickPixel::setcolorvalue**(int `$color`, float `$value`):
[GmagickPixel](class.gmagickpixel.md)

Встановлює нормалізоване значення колірного каналу. Значення має
бути числом з плаваючою точкою (float) у діапазоні від 0 до 1. Також
ця функція може використовуватися для завдання каналу прозорості
об'єкта [GmagickPixel](class.gmagickpixel.md).

### Список параметрів

`col`
Колірний канал. Одна із констант колірних каналів Gmagick.

`value`
Значення, що встановлюється. Число з плаваючою точкою в діапазоні від 0 до
1.

### Значення, що повертаються

Об'єкт [GmagickPixel](class.gmagickpixel.md) у разі успішного
виконання.
