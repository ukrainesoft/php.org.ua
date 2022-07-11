- [« Imagick::addNoiseImage](imagick.addnoiseimage.md)
- [Imagick::animateImages »](imagick.animateimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Перетворення зображення

# Imagick::affineTransformImage

(PECL imagick 2, PECL imagick 3)

Imagick::affineTransformImage — Перетворення зображення

### Опис

public
**Imagick::affineTransformImage**([ImagickDraw](class.imagickdraw.md)
`$matrix`): bool

Перетворення зображення за допомогою афінної матриці.

### Список параметрів

`matrix`
Афінна матриця

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::affineTransformImage()****

` <?phpfunction affineTransformImage($imagePath) {   $imagick u003d new \Imagick(realpath($imagePath)); $draw u003d new \ImagickDraw(); $angleu003du003ddeg2rad(40); $affineRotateu003du003d array(        "sx" u003d> cos($angle), "sy" u003d> cos($angle),         "rx" u003d> sin($angle| "tx"u003du003d>0, "ty"u003du003d>0,    ); $draw->affine($affineRotate); $imagick->affineTransformImage($draw); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
