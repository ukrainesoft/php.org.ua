- [«
ImagickPixel::getColorAsString](imagickpixel.getcolorasstring.md)
- [ImagickPixel::getColorQuantum »](imagickpixel.getcolorquantum.md)

- [PHP Manual](index.md)
- [ImagickPixel](class.imagickpixel.md)
- Повертає кількість кольорів, пов'язаних з цим кольором

# ImagickPixel::getColorCount

(PECL imagick 2, PECL imagick 3)

ImagickPixel::getColorCount — Повертає кількість кольорів, пов'язаних з
цим кольором

### Опис

public **ImagickPixel::getColorCount**(): int

Повертає кількість кольорів, пов'язаних із цим кольором.

Кількість пікселів зображення, що мають той самий колір, що і цей
ImagickPixel.

ImagickPixel::getColorCount може працювати лише з об'єктами
ImagickPixel створені за допомогою Imagick::getImageHistogram()

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішного виконання повертає кількість кольорів у вигляді числа,
інакше викидає виняток ImagickPixelException.

### Приклади

**Приклад #1 ImagickPixel **getColorCount()****

` <?php   $imagick u003d new \Imagick(); $imagick->newPseudoImage(640, 480, "magick:logo"); $histogramElementsu003du003d$imagick->getImageHistogram(); $lastColoru003d array_pop($histogramElements); echo "Last pixel color count is: ".$lastColor->getColorCount();?> `

Висновок буде приблизно такий:

Last pixel color count is: 256244
