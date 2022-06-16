- [« ImagickPixel::getColorQuantum](imagickpixel.getcolorquantum.md)
- [ImagickPixel::getColorValueQuantum
»](imagickpixel.getcolorvaluequantum.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Повертає нормалізоване значення кольору каналу

# ImagickPixel::getColorValue

(PECL imagick 2, PECL imagick 3)

ImagickPixel::getColorValue — Повертає нормалізоване значення кольору
каналу

### Опис

public **ImagickPixel::getColorValue**(int `$color`): float

Повертає значення зазначеного кольору каналу, як дробове число між 0 та
1.

### Список параметрів

`col`
Колір, для якого виходить значення, заданий однією з констант
Imagick. Це RGB колір, CMYK колір, альфа канал або прозорість
(Imagick::COLOR_BLUE, Imagick::COLOR_MAGENTA);

### Значення, що повертаються

Значення каналу, як нормалізованого дробового числа, у разі
Виникнення помилки буде викинуто виключення ImagickPixelException.

### Приклади

**Приклад #1 Приклад використання **Imagick::getColorValue()****

` <?php$color u003d new ImagickPixel('rgba(90%, 20%, 20%, 0.75)');echo "Значення альфа каналу ".$color->getColorValue(Imagick::COLOR_ ".PHP_EOL;echo "Значення червоного каналу ".$color->getColorValue(Imagick::COLOR_RED).PHP_EOL;echo "Значення зеленого каналу ".$color->getColorValue(EHP каналу ".$color->getColorValue(Imagick::COLOR_BLUE).PHP_EOL;echo "".PHP_EOL;echo "Значення блакитного каналу ".$color->getColorValue(Imagick::COLOR_C .$color->getColorValue(Imagick::COLOR_MAGENTA).PHP_EOL;echo "Значення жовтого каналу ".$color->getColorValue(Imagick::COLOR_YELLOW)Чоного ::COLOR_BLACK).PHP_EOL;?> `

Результат виконання цього прикладу:

Значення альфа каналу 0.74999618524453

Значення червоного каналу 0.90000762951095
Значення зеленого каналу 0.2
Значення синього каналу 0.2

Значення блакитного каналу 0.90000762951095
Значення пурпурового каналу 0.2
Значення жовтого каналу 0.2
Значення чорного каналу 0
