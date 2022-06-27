- [« Imagick::count](imagick.count.md)
- [Imagick::cropThumbnailImage »](imagick.cropthumbnailimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Виймає область зображення

# Imagick::cropImage

(PECL imagick 2, PECL imagick 3)

Imagick::cropImage — Витягує область зображення

### Опис

public **Imagick::cropImage**(
int `$width`,
int `$height`,
int `$x`,
int `$y`
): bool

Витягує область зображення.

### Список параметрів

`width`
Ширина обрізання

`height`
Висота обрізання

`x`
Координата X верхнього лівого кута області обрізання

`y`
Координата Y верхнього лівого кута області обрізання

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Помилки

Викликає ImagickException у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **Imagick::cropImage()****

` <?phpfunction cropImage($imagePath, $startX, $startY, $width, $height) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->cropImage($width, $height, $startX, $startY); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
