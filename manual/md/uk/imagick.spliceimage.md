- [« Imagick::sparseColorImage](imagick.sparsecolorimage.md)
- [Imagick::spreadImage »](imagick.spreadimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Склеює суцільний колір у зображення

# Imagick::spliceImage

(PECL imagick 2, PECL imagick 3)

Imagick::spliceImage — Склеює суцільний колір у зображення

### Опис

public **Imagick::spliceImage**(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

Склеює суцільний колір зображення.

### Список параметрів

`width`

`height`

`x`

`y`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::spliceImage()****

` <?phpfunction spliceImage($imagePath, $startX, $startY, $width, $height) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->spliceImage($width, $height, $startX, $startY); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
