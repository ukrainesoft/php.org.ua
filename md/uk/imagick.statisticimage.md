- [« Imagick::spreadImage](imagick.spreadimage.md)
- [Imagick::steganoImage »](imagick.steganoimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Опис

# Imagick::statisticImage

(PECL imagick 3 \>u003d 3.3.0)

Imagick::statisticImage — Опис

### Опис

public **Imagick::statisticImage**(
int `$type`,
int `$width`,
int `$height`,
int `$channel` u003d Imagick::CHANNEL_DEFAULT
): bool

Замінює кожен піксель відповідною статистикою з околиці
зазначеної ширини та висоти.

### Список параметрів

`type`

`width`

`height`

`channel`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::statisticImage()****

` <?phpfunction statisticImage($imagePath, $statisticType, $width, $height, $channel) {    $imagick u003d new \Imagick(realpath($imagePath)); $imagick->statisticImage(       |$statisticType,        $width,        $height,        $channel   ; header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}statisticImage($imagePath, \Imagick::STATISTIC_MEDIAN, 5, 5, \Imagick::CHANNEL_DEFAULT);?> `
