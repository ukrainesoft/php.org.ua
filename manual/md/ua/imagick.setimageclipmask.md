- [« Imagick::setImageChannelDepth](imagick.setimagechanneldepth.md)
- [Imagick::setImageColormapColor
»](imagick.setimagecolormapcolor.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює маску кліпу

# Imagick::setImageClipMask

(PECL imagick 2 \>u003d 2.3.0, PECL imagick 3)

Imagick::setImageClipMask — Встановлює маску кліпу

**Увага**

Функція оголошена *УСТАРШЕНОЮ* в Imagick 3.4.4. Покладатись на цю
функцію не рекомендується.

### Опис

public **Imagick::setImageClipMask**([Imagick](class.imagick.md)
`$clip_mask`): bool

Встановлює маску зображення з іншого об'єкта Imagick. Цей
метод доступний, якщо Imagick був скомпільований з версією ImageMagick
6.3.6 чи старше.

### Список параметрів

`clip_mask`
Об'єкт Imagick, що містить маску кліпу

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::setImageClipMask()****

` <?phpfunction setImageClipMask($imagePath) {   $imagick u003d new \Imagick(); $imagick->readImage(realpath($imagePath)); $width u003d $imagick->getImageWidth(); $height u003d $imagick->getImageHeight(); $clipMask u003d new \Imagick(); $clipMask->newPseudoImage(        $width,       $height,       "canvas:transparent"    ); $draw u003d new \ImagickDraw(); $draw->setFillColor('white'); $draw->circle($                                              | $clipMask->drawImage($draw); $imagick->setImageClipMask($clipMask); $imagick->negateImage(false); $imagick->setFormat("png"); header("Content-Type: image/png"); echo $imagick->getImagesBlob();}?> `
