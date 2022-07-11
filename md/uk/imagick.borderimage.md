- [« Imagick::blurImage](imagick.blurimage.md)
- [Imagick::brightnessContrastImage
»](imagick.brightnesscontrastimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Оточує зображення рамкою

# Imagick::borderImage

(PECL imagick 2, PECL imagick 3)

Imagick::borderImage — Оточує зображення рамкою

### Опис

public
**Imagick::borderImage**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$bordercolor`, int `$width`, int `$height`): bool

Оточує зображення рамкою з кольором, встановленим в об'єкті
ImagickPixel.

### Список параметрів

'bordercolor'
Об'єкт ImagickPixel або рядок, що містить колір рамки

`width`
Ширина рамки

`height`
Висота рамки

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------|
| PECL imagick 2.1.0 Як колір можна передавати рядок. Попередні версії допускали лише об'єкт ImagickPixel. |

### Приклади

**Приклад #1 Приклад використання **Imagick::borderImage()****

` <?phpfunction borderImage($imagePath, $color, $width, $height) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->borderImage($color, $width, $height); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
