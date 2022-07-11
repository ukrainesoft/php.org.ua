- [« Imagick::resizeImage](imagick.resizeimage.md)
- [Imagick::rotateImage »](imagick.rotateimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Зміщує зображення

# Imagick::rollImage

(PECL imagick 2, PECL imagick 3)

Imagick::rollImage — Зміщення зображення

### Опис

public **Imagick::rollImage**(int `$x`, int `$y`): bool

Зміщує зображення відповідно до визначення x та y.

### Список параметрів

`x`
Зсув по осі X.

`y`
Зміщення осі Y.

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::rollImage()****

` <?phpfunction rollImage($imagePath, $rollX, $rollY) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->rollimage($rollX, $rollY); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
