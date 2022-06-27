- [« ImagickPixel::setColorCount](imagickpixel.setcolorcount.md)
- [ImagickPixel::setColorValueQuantum
»](imagickpixel.setcolorvaluequantum.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Встановлює нормалізоване значення одного з каналів

# ImagickPixel::setColorValue

(PECL imagick 2, PECL imagick 3)

ImagickPixel::setColorValue — Встановлює нормалізоване значення
одного з каналів

### Опис

public **ImagickPixel::setColorValue**(int `$color`, float `$value`):
bool

Встановлює значення вказаного каналу поточного об'єкта за умови
те, що нове значення знаходиться між 0 і 1. Ця функція може бути
використано для встановлення прозорості каналу об'єкта ImagickPixel.

### Список параметрів

`col`
Один із констант кольору Imagick, тобто. \Imagick::COLOR_GREEN або
\Imagick::COLOR_ALPHA.

`value`
Значення для встановлення у цьому каналі, в межах від 0 до 1.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::setColorValue()****

` <?php$color u003d new \ImagickPixel('firebrick');$color->setColorValue(Imagick::COLOR_ALPHA, 0.5);print_r($color->getcolor(true));?> `

Результат виконання цього прикладу:

Array
(
[r] u003d> 0.69803921568627
[g] u003d> 0.13333333333333
[b] u003d> 0.13333333333333
[a] u003d> 0.50000762951095
)
