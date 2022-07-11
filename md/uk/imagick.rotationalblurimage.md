- [« Imagick::rotateImage](imagick.rotateimage.md)
- [Imagick::roundCorners »](imagick.roundcorners.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Застосовує обертальне розмиття до зображення

# Imagick::rotationalBlurImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::rotationalBlurImage — Застосовує обертальне розмиття до
зображенню

### Опис

public **Imagick::rotationalBlurImage**(float `$angle`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Застосовує обертальне розмиття зображення.

### Список параметрів

`angle`
Кут розмиття.

`channel`
Надайте будь-яку коректну для вашого режиму каналу константу. Для
застосування до більш ніж одного каналу, комбінуйте [константи
каналов](imagick.constants.md#imagick.constants.channel) за допомогою
побітових операторів. За промовчанням одно **`Imagick::CHANNEL_DEFAULT`**.
Зверніться до списку [констант
каналов](imagick.constants.md#imagick.constants.channel)

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::rotationalBlurImage()****

`<?phpfunction rotationalBlurImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->rotationalBlurImage(3); $imagick->rotationalBlurImage(5); $imagick->rotationalBlurImage(7); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
