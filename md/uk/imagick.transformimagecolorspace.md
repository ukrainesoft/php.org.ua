- [« Imagick::transformImage](imagick.transformimage.md)
- [Imagick::transparentPaintImage
»](imagick.transparentpaintimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перетворює зображення на новий колірний простір

# Imagick::transformImageColorspace

(PECL imagick 3)

Imagick::transformImageColorspace — Перетворює зображення на нове
колірний простір

### Опис

public **Imagick::transformImageColorspace**(int `$colorspace`): bool

Перетворює зображення на новий колірний простір.

### Список параметрів

`colorspace`
Колірний простір, в який має бути перетворено зображення,
одна з [констант
COLORSPACE](imagick.constants.md#imagick.constants.colorspace),
наприклад, Imagick::COLORSPACE_CMYK.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
**Imagick::transformImageColorspace()****

Перетворює зображення на новий колірний простір, а потім витягує
окремий канал, щоб можна було переглянути значення окремих
каналів.

`<?phpfunction transformImageColorspace($imagePath, $colorSpace, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->transformimagecolorspace($colorSpace); //канал повинен бути одною з констант каналу, наприклад \Imagick::CHANNEL_BLUE   $imagick->separateImageChannel($channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `

### Дивіться також

- [Imagick::setColorSpace()](imagick.setcolorspace.md) -
Встановлює колірний простір
