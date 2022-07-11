- [« Imagick::polaroidImage](imagick.polaroidimage.md)
- [Imagick::previewImages »](imagick.previewimages.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Зменшує зображення до обмеженої кількості рівнів кольору

# Imagick::posterizeImage

(PECL imagick 2, PECL imagick 3)

Imagick::posterizeImage — Зменшує зображення до обмеженого
кількості рівнів кольору

### Опис

public **Imagick::posterizeImage**(int `$levels`, bool `$dither`): bool

Зменшує зображення до обмеженої кількості рівнів кольору.

### Список параметрів

`levels`

`dither`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::posterizeImage()****

` <?phpfunction posterizeImage($imagePath, $posterizeType, $numberLevels) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->posterizeImage($numberLevels, $posterizeType); $imagick->setImageFormat('png'); header("Content-Type: image/png"); echo $imagick->getImageBlob();}posterizeImage($imagePath, \Imagick::DITHERMETHOD_RIEMERSMA, 8);?> `
