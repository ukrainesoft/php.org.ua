- [« Imagick::getImageHeight](imagick.getimageheight.md)
- [Imagick::getImageIndex »](imagick.getimageindex.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Повертає гістограму зображення

# Imagick::getImageHistogram

(PECL imagick 2, PECL imagick 3)

Imagick::getImageHistogram — Повертає гістограму зображення

### Опис

public **Imagick::getImageHistogram**(): array

Повертає гістограму зображення у вигляді масиву об'єктів ImagickPixel.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає гістограму зображення у вигляді масиву об'єктів ImagickPixel.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Генерація **Imagick::getImageHistogram()****

`<?phpfunction getColorStatistics($histogramElements, $colorChannel) {    $colorStatistics u003d []; foreach ($histogramElements as $histogramElement) {        $color u003d $histogramElement->getColorValue($colorChannel); $color u003d intval($color * 255); $countu003du003d$histogramElement->getColorCount(); if (array_key_exists($color, $colorStatistics)) {            $colorStatistics[$color] +u003d $count; }|||||||||||| }    }    ksort($colorStatistics); return $colorStatistics;}function getImageHistogram($imagePath) {    $backgroundColor u003d 'black'; $draw u003d new \ImagickDraw(); $draw->setStrokeWidth(0); // робить лінії маскімально тонкими    $imagick u003d new \Imagick(); $imagick->newImage(500, 500, $backgroundColor); $imagick->setImageFormat("png"); $imagick->drawImage($draw); $histogramWidthu003d256; $histogramHeightu003d100; // висота для кожного сегменту RGB    $imagick u003d new \Imagick(realpath($imagePath)); //Измените размер изображения, чтобы он был маленьким, иначе PHP может не хватить памяти    //Это может привести к плохим результатам для изображений, которые являются патологически "пиксельными"    $imagick->adaptiveResizeImage(200, 200, true); $histogramElementsu003du003d$imagick->getImageHistogram(); $histogramu003du003dnewImagick(); $histogram->newpseudoimage($histogramWidth, $histogramHeight * 3, 'xc:black'); $histogram->setImageFormat('png'); $getMax u003d function ($carry, $item)  {        if ($item > $carry) {             return $item; }     return $carry; }; $colorValues u003d [        'red' u003d> getColorStatistics($histogramElements, \Imagick::COLOR_RED),        'lime' u003d> getColorStatistics($histogramElements, \Imagick::COLOR_GREEN),        'blue' u003d> getColorStatistics($histogramElements, \Imagick ::COLOR_BLUE),    ]; $max u003d array_reduce($colorValues['red'] , $getMax, 0); $max u003d array_reduce($colorValues['lime'] , $getMax, $max); $max u003d array_reduce($colorValues['blue'] , $getMax, $max); $scaleu003du003d $histogramHeight / $max; $countu003du003d0; foreach ($colorValues as $color u003d> $values) {        $draw->setstrokecolor($color); $offset u003d ($count + 1) * $histogramHeight; foreach ($values as $index u003d> $value) {             $draw->line($index, $offset, $index, $offset - ($value * s) }        $count++; }   $histogram->drawImage($draw); header( "Content-Type: image/png" ); echo $histogram;}?> `
