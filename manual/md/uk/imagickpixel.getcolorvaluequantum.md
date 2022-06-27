- [« ImagickPixel::getColorValue](imagickpixel.getcolorvalue.md)
- [ImagickPixel::getHSL »](imagickpixel.gethsl.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Опис

# ImagickPixel::getColorValueQuantum

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

ImagickPixel::getColorValueQuantum — Опис

### Опис

public **ImagickPixel::getColorValueQuantum**(int `$color`): int\|float

Отримує квантове значення кольору ImagickPixel. Повертається
значення - це число з плаваючою точкою, якщо ImageMagick був
скомпільований з HDRI, інакше - ціле число.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Квантове значення кольору. Число з плаваючою точкою, якщо
ImageMagick був скомпільований з HDRI, інакше ціле число.

### Приклади

**Приклад #1 Приклад використання
**ImagickPixel::getColorValueQuantum()****

`<?php        $color u003d new \ImagickPixel('rgb(128, 5, 255)'); $colorRedu003du003d$color->getColorValueQuantum(\Imagick::COLOR_RED); $colorGreenu003du003d$color->getColorValueQuantum(\Imagick::COLOR_GREEN); $colorBlueu003du003d$color->getColorValueQuantum(\Imagick::COLOR_BLUE); $colorAlphau003du003d$color->getColorValueQuantum(\Imagick::COLOR_ALPHA); printf(            "Красный: %s Зелёный: %s  Синий %s Альфа: %s",            $colorRed,            $colorGreen,            $colorBlue,            $colorAlpha        );?> `
