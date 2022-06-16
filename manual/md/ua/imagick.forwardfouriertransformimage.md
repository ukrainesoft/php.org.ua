- [« Imagick::flopImage](imagick.flopimage.md)
- [Imagick::frameImage »](imagick.frameimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::forwardFourierTransformImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::forwardFourierTransformImage — Опис

### Опис

public **Imagick::forwardFourierTransformimage**(bool `$magnitude`):
bool

Реалізує дискретне перетворення Фур'є (ДПФ) зображення у вигляді пари
величина/фаза або пари, що складається з реального/уявного зображень.

### Список параметрів

`magnitude`
Якщо значення дорівнює true, буде повернена пара величина/фаза, інакше -
пара, що складається з реального / уявного зображення.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
**Imagick::forwardFourierTransformImage()****

` <?php//Службова функція для forwardTransformImagefunction createMask() {    $draw u003d new \ImagickDraw(); $draw->setStrokeOpacity(0); $draw->setStrokeColor('rgb(255, 255, 255)'); $draw->setFillColor('rgb(255, 255, 255)'); //Малювання круга на осі Y з центром в точках     //x, y, стосується початку координат   $draw->circle(250, 250, 20; $imagicku003du003dnewImagick(); $imagick->newImage(512, 512, "black"); $imagick->drawImage($draw); $imagick->gaussianBlurImage(20, 20); $imagick->autoLevelImage(); return $imagick;}function forwardFourierTransformImage($imagePath) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->resizeimage(512, 512, \Imagick::FILTER_LANCZOS, 1); $mask u003d createMask(); $imagick->forwardFourierTransformImage(true); @$imagick->setimageindex(0); $magnitudeu003du003d$imagick->getimage(); @$imagick->setimageindex(1); $imagickPhaseu003du003d$imagick->getimage(); if (true) {        $imagickPhase->compositeImage($mask, \Imagick::COMPOSITE_MULTIPLY, 0, 0); }    if (false) {        $output u003d clone $imagickPhase; $output->setimageformat('png'); header("Content-Type: image/png"); echo $output->getImageBlob(); }   $magnitude->inverseFourierTransformImage($imagickPhase, true); $magnitude->setimageformat('png'); header("Content-Type: image/png"); echo $magnitude->getImageBlob();}?> `
