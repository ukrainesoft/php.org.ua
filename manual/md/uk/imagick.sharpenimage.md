- [« Imagick::shadowImage](imagick.shadowimage.md)
- [Imagick::shaveImage »](imagick.shaveimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Підвищує різкість зображення

# Imagick::sharpenImage

(PECL imagick 2, PECL imagick 3)

Imagick::sharpenImage — Підвищує різкість зображення

### Опис

public **Imagick::sharpenImage**(float `$radius`, float `$sigma`, int
`$channel` u003d Imagick::CHANNEL_DEFAULT): bool

Підвищує різкість зображення. Згортання зображення за допомогою
гаусівського оператора заданого радіусу та стандартного відхилення
(Сігма). Для розумних результатів радіус має бути більшим за сигму.
Використовуйте радіус 0, і **Imagick::sharpenImage()** вибере відповідний
для вас радіус.

### Список параметрів

`radius`

`sigma`

`channel`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::sharpenImage()****

` <?phpfunction sharpenImage($imagePath, $radius, $sigma, $channel) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->sharpenimage($radius, $sigma, $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
