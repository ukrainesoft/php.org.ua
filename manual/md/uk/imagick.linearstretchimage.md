- [« Imagick::levelImage](imagick.levelimage.md)
- [Imagick::liquidRescaleImage »](imagick.liquidrescaleimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Розтягує з насиченням яскравість зображення

# Imagick::linearStretchImage

(PECL imagick 2, PECL imagick 3)

Imagick::linearStretchImage — Розтягує з насиченням яскравість
зображення

### Опис

public **Imagick::linearStretchImage**(float `$blackPoint`, float
`$whitePoint`): bool

Розтягує з насиченням яскравість зображення.

### Список параметрів

`blackPoint`
Чорна точка зображення

`whitePoint`
Біла точка зображення

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::linearStretchImage()****

` <?phpfunction linearStretchImage($imagePath, $blackThreshold, $whiteThreshold) {   $imagick u003d new \Imagick(realpath($imagePath)); $pixels u003d $imagick->getImageWidth() * $imagick->getImageHeight(); $imagick->linearStretchImage($blackThreshold * $pixels, $whiteThreshold * $pixels); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
