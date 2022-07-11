- [«
Imagick::brightnessContrastImage](imagick.brightnesscontrastimage.md)
- [Imagick::chopImage »](imagick.chopimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Малювання вугіллям

# Imagick::charcoalImage

(PECL imagick 2, PECL imagick 3)

Imagick::charcoalImage — Малювання вугіллям

### Опис

public **Imagick::charcoalImage**(float `$radius`, float `$sigma`): bool

Малювання вугіллям.

### Список параметрів

`radius`
Радіус Гауса, у пікселях, не включаючи центральний піксель

`sigma`
Стандартне відхилення Гауса, у пікселях

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::charcoalImage()****

`<?phpfunction charcoalImage($imagePath, $radius, $sigma) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->charcoalImage($radius, $sigma); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
