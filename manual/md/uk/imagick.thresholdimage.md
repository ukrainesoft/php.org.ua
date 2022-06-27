- [« Imagick::textureImage](imagick.textureimage.md)
- [Imagick::thumbnailImage »](imagick.thumbnailimage.md)

- [PHP Manual](index.md)
- [Imagick](class.imagick.md)
- Змінює окремі пікселі на основі порогового значення

# Imagick::thresholdImage

(PECL imagick 2, PECL imagick 3)

Imagick::thresholdImage — Змінює окремі пікселі на основі
порогового значення

### Опис

public **Imagick::thresholdImage**(float `$threshold`, int `$channel` u003d
Imagick::CHANNEL_DEFAULT): bool

Змінює окремі пікселі в залежності від їх інтенсивності
порівняно з граничним значенням. Результатом буде високо-контрастне,
двокольорове зображення.

### Список параметрів

`threshold`

`channel`

### Значення, що повертаються

У разі успішної роботи повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання **Imagick::thresholdImage()****

`<?phpfunction thresholdimage($imagePath, $threshold, $channel) {   $imagick u003d new \Imagick(realpath($imagePath)); $imagick->thresholdimage($threshold * \Imagick::getQuantum(), $channel); header("Content-Type: image/jpg"); echo $imagick->getImageBlob();}?> `
