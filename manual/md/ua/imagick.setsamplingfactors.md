- [« Imagick::setResourceLimit](imagick.setresourcelimit.md)
- [Imagick::setSize »](imagick.setsize.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Встановлює коефіцієнти вибірки зображень

# Imagick::setSamplingFactors

(PECL imagick 2, PECL imagick 3)

Imagick::setSamplingFactors — Встановлює коефіцієнти вибірки
зображень

### Опис

public **Imagick::setSamplingFactors**(array `$factors`): bool

Встановлює коефіцієнти вибірки зображень.

### Список параметрів

`factors`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::setSamplingFactors()****

` <?phpfunction setSamplingFactors($imagePath) {    $imagePath u003d "../imagick/images/FineDetail.png"; $imagick u003d new \Imagick(realpath($imagePath)); $imagick->setImageFormat('jpg'); $imagick->setSamplingFactors(array('2x2', '1x1', '1x1')); $compressedu003du003d$imagick->getImageBlob(); $reopenu003du003dnewImagick(); $reopen->readImageBlob($compressed); $reopen->resizeImage(                                     | header("Content-Type: image/jpg"); echo $reopen->getImageBlob();}?> `
