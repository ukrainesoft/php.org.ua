- [« Imagick::sketchImage](imagick.sketchimage.md)
- [Imagick::solarizeImage »](imagick.solarizeimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::smushImages

(PECL imagick 3 \>u003d 3.3.0)

Imagick::smushImages — Опис

### Опис

public **Imagick::smushImages**(bool `$stack`, int `$offset`):
[Imagick](class.imagick.md)

Бере всі зображення з поточного покажчика зображення до кінця списку
зображень і переміщує їх один до одного зверху вниз, якщо параметр
stack має значення true, інакше - зліва направо.

### Список параметрів

`stack`

`offset`

### Значення, що повертаються

Нове розмите зображення.

### Приклади

**Приклад #1 Приклад використання **Imagick::smushImages()****

`<?phpfunction smushImages($imagePath, $imagePath2) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick2 u003d new \Imagick(realpath($imagePath2)); $imagick->addimage($imagick2); $smushedu003du003d$imagick->smushImages(false, 50); $smushed->setImageFormat('jpg'); header("Content-Type: image/jpg"); echo $smushed->getImageBlob();}?> `
