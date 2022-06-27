- [« Imagick::swirlImage](imagick.swirlimage.md)
- [Imagick::thresholdImage »](imagick.thresholdimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Багаторазово розміщує зображення текстури

# Imagick::textureImage

(PECL imagick 2, PECL imagick 3)

Imagick::textureImage — Багаторазово розміщує зображення текстури

### Опис

**Imagick::textureImage**([Imagick](class.imagick.md)
`$texture_wand`): [Imagick](class.imagick.md)

Багаторазово розміщує зображення текстури поперек та вниз по полотну
зображення.

### Список параметрів

`texture_wand`
Об'єкт Imagick для використання як зображення текстури.

### Значення, що повертаються

Повертає новий об'єкт Imagick, до якого застосована повторювана
текстури.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::textureImage()****

` <?phpfunction textureImage($imagePath) {   $image u003d new \Imagick(); $image->newImage(640, 480, new \ImagickPixel('pink')); $image->setImageFormat("jpg"); $texture u003d new \Imagick(realpath($imagePath)); $texture->scaleimage($image->getimagewidth() / 4, $image->getimageheight() / 4); $image u003d $image->textureImage($texture); header("Content-Type: image/jpg"); echo $image;}?> `
